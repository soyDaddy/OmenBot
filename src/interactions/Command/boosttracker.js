const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("boosttracker")
    .setDescription("Configura el BoostTracker")
    .addSubcommand(subcommand => subcommand
        .setName("setup")
        .setDescription("Configura el BoostTracker en este servidor")
        .addChannelOption(option => option
            .setName("canal")
            .setDescription("En que canal se enviarán los anuncios de Boost")
            .setRequired(true)
        )
        .addChannelOption(option => option
            .setName("logs")
            .setDescription("Donde se enviarán los Logs")
            .setRequired(true)
        )
    )
    .addSubcommand(subcommand => subcommand
        .setName("remove")
        .setDescription("Eliminar la configuración de este servidor")
    )
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator)
    ,
    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        client.loadSubcommands(client, interaction, args);
    },
};
