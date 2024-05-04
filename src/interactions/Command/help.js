const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');
const Schema = require('../../database/models/functions')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription(global.i18n.getMessage(null, `commands.slash.help.description`))
        .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.help.name`))
        .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.help.description`))
        ,
    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
		const settings = await Schema.findOne({ Guild: interaction.guild.id });
		const getMessage = global.i18n.getLocale(settings.Locale);
        const randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
        const row = new Discord.ActionRowBuilder()
            .addComponents(
                new Discord.StringSelectMenuBuilder()
                    .setCustomId('Help-menu')
                    .setPlaceholder(getMessage(`message.command.help.menu.placeholder`))
                    .addOptions([
                        {
                            label: getMessage(`message.command.help.menu.options.commands.label`),
                            description: getMessage(`message.command.help.menu.options.commands.description`),
                            emoji: "💻",
                            value: "commands-Bothelp",
                        },
                        {
                            label: getMessage(`message.command.help.menu.options.invite.label`),
                            description: getMessage(`message.command.help.menu.options.invite.description`),
                            emoji: "📨",
                            value: "invite-Bothelp",
                        },
                        {
                            label: getMessage(`message.command.help.menu.options.support.label`),
                            description: getMessage(`message.command.help.menu.options.support.description`),
                            emoji: "❓",
                            value: "support-Bothelp",
                        },
                        {
                            label: getMessage(`message.command.help.menu.options.changelog.label`),
                            description: getMessage(`message.command.help.menu.options.changelog.description`),
                            emoji: "📃",
                            value: "changelogs-help",
                        },
                    ]),
            );

        return client.embed({
            title: getMessage(`message.command.help.embed.title`),
            desc: getMessage(`message.command.help.embed.description`),
            image: "https://media.discordapp.net/attachments/1112453766294290653/1128539761414516747/standard_19.gif",
            color: '#'+randomColor,
            fields: [
                {
                    name: getMessage(`message.command.help.embed.fields.name1`),
                    value: getMessage(`message.command.help.embed.fields.value1`)
                },
                {
                    name: getMessage(`message.command.help.embed.fields.name2`),
                    value: getMessage(`message.command.help.embed.fields.value2`)
                },
                {
                    name: getMessage(`message.command.help.embed.fields.name3`),
                    value: getMessage(`message.command.help.embed.fields.value3`)
                },
            ],
            components: [row],
            type: 'editreply'
        }, interaction)
    },
};
