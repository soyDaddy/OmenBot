const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('profile')
        .setDescription('Create a profile for the server')
        .addSubcommand(subcommand => subcommand
                .setName('help')
                .setDescription('Get information about the profile category commands')
        )
        .addSubcommand(subcommand => subcommand
                .setName('create')
                .setDescription('Create your profile')
        ).addSubcommand(subcommand => subcommand
                .setName('edit')
                .setDescription('Edit your profile')
        ).
        addSubcommand(subcommand => subcommand
                .setName('profile')
                .setDescription('See your profile')
                .addUserOption((option) => option.setName('user').setDescription('The user you want the profile from')
                )
        ),

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        client.loadSubcommands(client, interaction, args);
    },
};