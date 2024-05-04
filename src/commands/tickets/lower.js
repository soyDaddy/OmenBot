const Discord = require('discord.js');

const ticketSchema = require("../../database/models/tickets");
const ticketChannels = require("../../database/models/ticketChannels");

module.exports = async (client, interaction, args) => {
    const perms = await client.checkUserPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageMessages],
        perms: [Discord.PermissionsBitField.Flags.ManageMessages]
    }, interaction)

    if (perms == false) return;

    ticketSchema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
        if (data) {
            const ticketCategory = interaction.guild.channels.cache.get(data.Category);
            const ticketRole = interaction.guild.roles.cache.get(data.Role);

            if (ticketCategory == undefined) {
                return client.errNormal({
                    error: "Do the setup!",
                    type: 'editreply'
                }, interaction);
            }

            if (interaction.channel.parentId == ticketCategory.id) {

                try {
                    interaction.channel.permissionOverwrites.edit(ticketRole, {
                        ViewChannel: true,
                        SendMessages: true,
                        AttachFiles: true,
                        ReadMessageHistory: true,
                        AddReactions: true
                    });

                    return client.simpleEmbed({
                        desc: `Ticket rebajado por <@!${interaction.user.id}>`,
                        type: 'editreply'
                    }, interaction)
                }
                catch {
                    client.errNormal({
                        error: "Algo a salido mal!",
                        type: 'editreply'
                    }, interaction);
                }

            }
            else {
                client.errNormal({ 
                    error: "This is not a ticket!", 
                    type: 'editreply'
                }, interaction);

            }
        }
        else {
            return client.errNormal({ 
                error: "Do the setup!", 
                type: 'editreply'
            }, interaction);
        }
    })
}

 