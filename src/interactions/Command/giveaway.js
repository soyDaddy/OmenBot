const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');
const { ChannelType } = require('discord.js');
const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('giveaway')
        .setDescription('Create a Giveaway')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Get information about the giveaway category commands')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('start')
                .setDescription('Start a giveaway')
                .addChannelOption(option => option.setName('channel').setDescription('Channel where is sent the giveaway').setRequired(true).addChannelTypes(ChannelType.GuildText, ChannelType.GuildAnnouncement))
                .addStringOption(option => option.setName('duration').setDescription('Duration: ex 30 Days (30d)').setRequired(true))
                .addNumberOption(option => option.setName('winners').setDescription('Number of Winners').setRequired(true))
                .addStringOption(option => option.setName('prize').setDescription('Pize of the Giveaway').setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('drop')
                .setDescription('Drop a giveaway')
                .addChannelOption(option => option.setName('channel').setDescription('Channel where is sent the giveaway').setRequired(true).addChannelTypes(ChannelType.GuildText, ChannelType.GuildAnnouncement))
                .addStringOption(option => option.setName('duration').setDescription('Duration: ex 30 Days (30d)').setRequired(true))
                .addNumberOption(option => option.setName('winners').setDescription('Number of Winners').setRequired(true))
                .addStringOption(option => option.setName('prize').setDescription('Pize of the Giveaway').setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('reroll')
                .setDescription('Reroll a giveaway')
                .addStringOption(option => option.setName('message').setDescription('Giveaway message ID').setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('end')
                .setDescription('End a giveaway')
                .addStringOption(option => option.setName('message').setDescription('Giveaway message ID').setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('edit')
                .setDescription('Edit the time of a giveaway')
                .addStringOption(option => option.setName('message').setDescription('Giveaway message ID').setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('delete')
                .setDescription('Delete a giveaway')
                .addStringOption(option => option.setName('message').setDescription('Giveaway message ID').setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('pause')
                .setDescription('Pause a giveaway')
                .addStringOption(option => option.setName('message').setDescription('Giveaway message ID').setRequired(true)),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('unpause')
                .setDescription('Unpause a giveaway')
                .addStringOption(option => option.setName('message').setDescription('Giveaway message ID').setRequired(true)),
        )
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator)
    ,

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        client.loadSubcommands(client, interaction, args);
    },
};

 