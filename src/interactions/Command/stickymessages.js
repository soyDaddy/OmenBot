const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');
const { ChannelType } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stickymessages')
        .setDescription('Manage the sticky messages')
        .addSubcommand(subcommand => subcommand
            .setName('help')
            .setDescription('Get information about the sticky messages category commands')
        )
        .addSubcommand(subcommand => subcommand
            .setName('stick')
            .setDescription('Stick an message in a channel')
            .addChannelOption(option => option
                .setName('channel')
                .setDescription('Select a channel')
                .setRequired(true)
                .addChannelTypes(ChannelType.GuildText))
            .addStringOption(option => option
                .setName('message')
                .setDescription('Your sticky messages')
                .setRequired(true))
        )
        .addSubcommand(subcommand => subcommand
            .setName('messages')
            .setDescription('Show all your guild sticky messages')
        )
        .addSubcommand(subcommand => subcommand
            .setName('unstick')
            .setDescription('Unstick an message in a channel')
            .addChannelOption(option => option
                .setName('channel')
                .setDescription('Select a channel')
                .setRequired(true)
                .addChannelTypes(ChannelType.GuildText))
        )
        .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator)
        ,

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        client.loadSubcommands(client, interaction, args);
    },
};

 