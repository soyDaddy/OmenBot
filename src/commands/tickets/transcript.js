const Discord = require('discord.js');

const ticketSchema = require("../../database/models/tickets");
const ticketChannels = require("../../database/models/ticketChannels");
const fs = require('fs');
const axios = require('axios');
const fetch = require('node-fetch');
const FormData = require('form-data');
const os = require('os');
const path = require('path');

module.exports = async (client, interaction, args) => {
    const perms = await client.checkUserPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageMessages],
        perms: [Discord.PermissionsBitField.Flags.ManageMessages]
    }, interaction)

    if (perms == false) return;

    let type = 'reply';
    if (interaction.isCommand()) type = 'editreply';

    ticketChannels.findOne({ Guild: interaction.guild.id, channelID: interaction.channel.id }, async (err, ticketData) => {
        if (ticketData) {
            ticketSchema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
                if (data) {
                    const ticketCategory = interaction.guild.channels.cache.get(data.Category);

                    if (ticketCategory == undefined) {
                        return client.errNormal({
                            error: "Do the setup!",
                            type: type
                        }, interaction);
                    }

                    if (interaction.channel.parentId == ticketCategory.id) {
                        return client.simpleEmbed({
                            desc: `${client.emotes.animated.loading}・Guardando Transcripción...`,
                            type: type
                        }, interaction).then(async (editMsg) => {
                            const guild = await client.guilds.fetch(interaction.guild.id);
                            const channel = await guild.channels.fetch(interaction.channel.id);
						    const messages = await channel.messages.fetch({ limit: 100 });

  							let transcripcionText = messages.map(message => `${message.author.tag}: ${message.content}`).join('\n');
  							const formData = new FormData();
  								formData.append('transcripcion', transcripcionText);
  								formData.append('ticketId', channel.id);
  							const archivos = [];
  							messages.forEach((message) => {
    							message.attachments.forEach((attachment) => {
									const filePath = path.join(__dirname, 'tempdir');
      								const writer = fs.createWriteStream(filePath);
      								archivos.push(attachment.url);
      								axios.get(attachment.url, { responseType: 'stream' }).then(response => {
        								response.data.pipe(writer);
        								formData.append('files', fs.createReadStream(filePath), { filename: attachment.name });
      								});
    							});
  							});
                            enviarArchivos(channel.id, archivos)
                            return client.simpleEmbed({
                            	desc: `Transcripción Guardada`,
                                type: 'editreply'
                                }, interaction)
                        });
                    }
                    else {
                        client.errNormal({
                            error: "This is not a ticket!",
                            type: type
                        }, interaction);

                    }
                }
                else {
                    return client.errNormal({
                        error: "Do the setup!",
                        type: type
                    }, interaction);
                }
            })
        }
    })
}

 async function enviarArchivos(transcriptionId, pathsDeArchivos) {
    const formData = new FormData();
    pathsDeArchivos.forEach(path => {
        formData.append('archivos', fs.createReadStream(path));
    });
    formData.append('transcriptionId', transcriptionId);

    try {
        const response = await fetch(`https://omenlist.xyz/uploads?transcriptionId=${transcriptionId}`, {
            method: 'POST',
            body: formData,
        });
        if (!response.ok) {
            throw new Error(`Error al subir archivos: ${response.statusText}`);
        }

        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error('Error al enviar los archivos:', error);
    }
}