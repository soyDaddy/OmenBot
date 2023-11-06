const { CommandInteraction, Client } = require('discord.js');
const { ContextMenuCommandBuilder, PermissionsBitField } = require('discord.js');
const Discord = require('discord.js');

const Schema = require("../../database/models/warnings");
const Case = require("../../database/models/warnCase");

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('• Give Warn')
        .setNameLocalizations(global.i18n.getAllMessages(`commands.content.warn`))
        .setType(2)
        .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator)
    ,

    run: async (client, interaction, args) => {
        // Create modal to give a reason
        const modal = new Discord.ModalBuilder()
            .setTitle('Warn')
            .setCustomId('warn')
            .addComponents(
                new Discord.ActionRowBuilder().addComponents(
                    new Discord.TextInputBuilder()
                        .setCustomId('reason')
                        .setPlaceholder('Razon')
                        .setLabel('Razon')
                        .setMinLength(1)
                        .setStyle(Discord.TextInputStyle.Short)
                        .setMaxLength(100)),
            );
        await interaction.showModal(modal);

        const submitted = await interaction.awaitModalSubmit({
            time: 60000,
            filter: i => i.user.id === interaction.user.id,
        }).catch(() => { });

        if (!submitted) {
            return;
        }

        const member = interaction.guild.members.cache.get(interaction.targetId);
        var caseNumber; 
        await Case.findOne({ Guild: interaction.guild.id }).then(async data => {
            if(!data) {
                new Case({
                    Guild: interaction.guild.id,
                    Case: 1
                }).save();
                caseNumber = 1;
            }
            else {
                data.Case += 1;
                data.save();
                caseNumber = data.Case;
            }
        });

        Schema.findOne({ Guild: interaction.guild.id, User: member.id }, async (err, data) => {
            if (data) {
                data.Warnings.push({
                    Moderator: interaction.user.id,
                    Reason: submitted.fields.getTextInputValue("reason"),
                    Date: Date.now(),
                    Case: caseNumber
                });
                data.save();
            }
            else {
                new Schema({
                    Guild: interaction.guild.id,
                    User: member.id,
                    Warnings: [{
                        Moderator: interaction.user.id,
                        Reason: submitted.fields.getTextInputValue("reason"),
                        Date: Date.now(),
                        Case: caseNumber
                    }]
                }).save();
            }
        })

        client.embed({
            title: `🔨・Warn`,
            desc: `Tienes un Warn en **${interaction.guild.name}**`,
            fields: [
                {
                    name: "👤┆Moderador",
                    value: interaction.user.tag,
                    inline: true
                },
                {
                    name: "📄┆Razón",
                    value: submitted.fields.getTextInputValue("reason"),
                    inline: true
                }
            ]
        }, member).catch(() => { })

        client.emit('warnAdd', member, interaction.user, submitted.fields.getTextInputValue("reason"));
        client.succNormal({
            text: `El usuario a recibido un warn!`,
            fields: [
                {
                    name: "👤┆Usuario",
                    value: `${member}`,
                    inline: true
                },
                {
                    name: "👤┆Moderador",
                    value: `${interaction.user}`,
                    inline: true
                },
                {
                    name: "📄┆Razón",
                    value: submitted.fields.getTextInputValue("reason"),
                    inline: false
                }
            ],
            type: 'ephemeral'
        }, submitted);
    },
};

