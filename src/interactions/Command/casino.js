const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('casino')
        .setDescription('Play the casino game')
        .addSubcommand(subcommand => subcommand
            .setName('help')
            .setDescription('Get information about the casino category commands')
        )
        .addSubcommand(subcommand => subcommand
            .setName('blackjack')
            .setDescription('Play a blackjack game to win money')
            .addNumberOption(option => option
                .setName('amount')
                .setDescription('Enter a amount')
                .setRequired(true)
            )
        )
        .addSubcommand(subcommand => subcommand
            .setName('crash')
            .setDescription('More risk, more reward')
            .addNumberOption(option => option
                .setName('amount')
                .setDescription('Enter a amount')
                .setRequired(true)
            )
        )
        .addSubcommand(subcommand => subcommand
            .setName('roulette')
            .setDescription('Play roulette')
            .addStringOption(option => option
                .setName('color')
                .setDescription('Enter a hex color')
                .setRequired(true)
            )
            .addNumberOption(option => option
                .setName('amount')
                .setDescription('Enter a amount')
                .setRequired(true)
            )
        )
        .addSubcommand(subcommand => subcommand
            .setName('slots')
            .setDescription('Play slots')
            .addNumberOption(option => option
                .setName('amount')
                .setDescription('Enter a amount')
                .setRequired(true)
            )
        )
    ,

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        client.loadSubcommands(client, interaction, args);
    },
};

 