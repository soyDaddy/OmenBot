const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bot')
        .setDescription(global.i18n.getMessage(null, `commands.slash.bot.description`))
		.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.bot.name`))
		.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.bot.description`))
        .addSubcommand(subcommand => subcommand
            .setName('help')
            .setDescription(global.i18n.getMessage(null, `commands.slash.bot.help.description`))
            .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.bot.help.name`))
            .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.bot.help.description`))
        )
        .addSubcommand(subcommand => subcommand
            .setName('info')
            .setDescription(global.i18n.getMessage(null, `commands.slash.bot.info.description`))
            .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.bot.info.name`))
            .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.bot.info.description`))
        )
        .addSubcommand(subcommand => subcommand
            .setName('ping')
            .setDescription(global.i18n.getMessage(null, `commands.slash.bot.ping.description`))
            .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.bot.ping.name`))
            .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.bot.ping.description`))
        )
        .addSubcommand(subcommand => subcommand
            .setName('changelogs')
            .setDescription(global.i18n.getMessage(null, `commands.slash.bot.changelogs.description`))
            .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.bot.changelogs.name`))
            .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.bot.changelogs.description`))
        )
        .addSubcommand(subcommand => subcommand
            .setName('links')
            .setDescription(global.i18n.getMessage(null, `commands.slash.bot.links.description`))
            .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.bot.links.name`))
            .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.bot.links.description`))
        )
        .addSubcommand(subcommand => subcommand
            .setName('owner')
            .setDescription(global.i18n.getMessage(null, `commands.slash.bot.owner.description`))
            .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.bot.owner.name`))
            .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.bot.owner.description`))
        )
        .addSubcommand(subcommand => subcommand
            .setName('socials')
            .setDescription(global.i18n.getMessage(null, `commands.slash.bot.socials.description`))
            .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.bot.socials.name`))
            .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.bot.socials.description`))
        )
        .addSubcommand(subcommand => subcommand
            .setName('support')
            .setDescription(global.i18n.getMessage(null, `commands.slash.bot.support.description`))
            .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.bot.support.name`))
            .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.bot.support.description`))
        )
        .addSubcommand(subcommand => subcommand
            .setName('uptime')
            .setDescription(global.i18n.getMessage(null, `commands.slash.bot.uptime.description`))
            .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.bot.uptime.name`))
            .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.bot.uptime.description`))
        )
        .addSubcommand(subcommand => subcommand
            .setName('feedback')
            .setDescription(global.i18n.getMessage(null, `commands.slash.bot.feedback.description`))
		    .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.bot.feedback.name`))
		    .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.bot.feedback.description`))
            .addStringOption(option => option
                .setName("message")
                .setDescription(global.i18n.getMessage(null, `commands.slash.bot.feedback.message.description`))
		        .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.bot.feedback.message.name`))
		        .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.bot.feedback.message.description`))
                .setRequired(true)
            )
        ),

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        client.loadSubcommands(client, interaction, args);
    },
};

 