const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('custom-commands')
        .setDescription('Create some custom commands')
        .addSubcommand(subcommand => subcommand
            .setName('help')
            .setDescription('Get information about the custom commands category')
        )
        .addSubcommand(subcommand => subcommand
            .setName('add')
            .setDescription('Create a custom command')
            .addStringOption(option => option
                .setName('command')
                .setDescription('The name of the command')
                .setRequired(true)
            )
            .addStringOption(option => option
                .setName('text')
                .setDescription('The response of the command')
                .setRequired(true)
            )
        )
        .addSubcommand(subcommand => subcommand
            .setName('delete')
            .setDescription('Delete a custom command')
            .addStringOption(option => option
                .setName('command')
                .setDescription('The name of the command')
                .setRequired(true)
            )
        )
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator)
    ,

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        client.loadSubcommands(client, interaction, args);
    },
};

 