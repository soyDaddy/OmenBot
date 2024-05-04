const { CommandInteraction, Client } = require('discord.js');
const { ContextMenuCommandBuilder, PermissionsBitField } = require('discord.js');
const Discord = require('discord.js');
const Schema = require("../../database/models/warnings");

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('• UnWarn User')
        .setNameLocalizations(global.i18n.getAllMessages(`commands.content.unwarn`))
        .setType(2)
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator)
    ,

    run: async (client, interaction, args) => {
        await interaction.deferReply({ ephemeral: true });

        const member = interaction.guild.members.cache.get(interaction.targetId);

        Schema.findOne({ Guild: interaction.guild.id, User: member.id }, async (err, data) => {
            if (data) {
                const menu = new Discord.StringSelectMenuBuilder()
                    .setCustomId('unwarn')
                    .setPlaceholder('Selecciona un Warn para eliminar');
                data.Warnings.forEach(element => {
                    menu.addOptions({
                        label: `Caso ${element.Case}`,
                        value: element.Case.toString(),
                        description: "Razón: " + element.Reason
                    })
                });

                client.embed({
                    title: `🔨・Unwarn`,
                    desc: `Selecciona el Warn que eliminar de **${member.user.tag}**`,
                    components: [new Discord.ActionRowBuilder().addComponents(menu)],
                    type: 'ephemeraledit'
                }, interaction);

                // Create a new collector for the menu
                const filter = i => i.user.id === interaction.user.id;
                const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

                collector.on('collect', async i => {
                    if (i.customId === 'unwarn') {
                        // Remove the warning from the database
                        data.Warnings.splice(data.Warnings.findIndex(element => element.Case == i.values[0]), 1);
                        data.save();
                        // Remove the menu from the message
                        i.update({
                            components: []
                        });
                        // Send a success message
                        client.succNormal({
                            text: `El Warn ha sido eliminado correctamente`,
                            fields: [
                                {
                                    name: "👤┆Usuario",
                                    value: `${member}`,
                                    inline: true
                                }
                            ],
                            type: 'ephemeraledit'
                        }, interaction);
                        client.emit('warnRemove', member, interaction.user)
                        client.embed({
                            title: `🔨・Unwarn`,
                            desc: `Se te ha eliminado un Warn **${interaction.guild.name}**`,
                            fields: [
                                {
                                    name: "👤┆Moderador",
                                    value: interaction.user.tag,
                                    inline: true
                                },
                            ]
                        }, member).catch(() => { })
                    }
                });
            } else {
                client.errNormal({
                    error: "El usuario no tiene Warns!",
                    type: 'ephemeraledit'
                }, interaction);
            }
        })
    },
};