const { CommandInteraction, Client } = require('discord.js');
const { ContextMenuCommandBuilder, PermissionsBitField } = require('discord.js');
const Discord = require('discord.js');
const Schema = require("../../database/models/warnings");

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('• Warnings')
        .setNameLocalizations(global.i18n.getAllMessages(`commands.content.warnings`))
        .setType(2)
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator)
    ,

    run: async (client, interaction, args) => {
        await interaction.deferReply({ ephemeral: false });

        const member = interaction.guild.members.cache.get(interaction.targetId);

        Schema.findOne({ Guild: interaction.guild.id, User: member.id }, async (err, data) => {
            if (data) {
                var fields = [];
                data.Warnings.forEach(element => {
                    fields.push({
                        name: "Warning **" + element.Case + "**",
                        value: "Razón: " + element.Reason + "\nModerador <@!" + element.Moderator + ">",
                        inline: true
                    })
                });
                client.embed({
                    title: `${client.emotes.normal.error}・Warnings`,
                    desc: `Los Warns de **${member.user.tag}**`,
                    fields: [
                        {
                            name: "Total",
                            value: `${data.Warnings.length}`,
                        },
                        ...fields
                    ],
                    type: 'editreply'
                }, interaction)
            }
            else {
                client.embed({
                    title: `${client.emotes.normal.error}・Warnings`,
                    desc: `El usuario ${member.user.tag} no tiene ningún Warn!`,
                    type: 'editreply'
                }, interaction)
            }
        })
    },
};

 