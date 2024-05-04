const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cumple')
        .setDescription('Ver o registrar un cumpleaños')
        .addSubcommand(subcommand => subcommand
            .setName('help')
            .setDescription('Get information about the birthdays category commands')
        )
        .addSubcommand(subcommand => subcommand
            .setName('comprovar')
            .setDescription('Comprovar un cumpleaños')
        )
        .addSubcommand(subcommand => subcommand
            .setName('eliminar')
            .setDescription('Eliminar tu cumpleaños')
        )
        .addSubcommand(subcommand => subcommand
            .setName('lista')
            .setDescription('Mostrar una lista con todos los cumpleaños registrados')
        )
        .addSubcommand(subcommand => subcommand
            .setName('establecer')
            .setDescription('Establecer tu cumpleaños')
            .addNumberOption(option => option
                .setName('dia')
                .setDescription('El número del dia de tu cumpleaños')
                .setRequired(true)
            )
            .addNumberOption(option => option
                .setName('mes')
                .setDescription('El número del mes de tu cumpleaños')
                .setRequired(true)
            )
        )
    ,

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        client.loadSubcommands(client, interaction, args);
    },
};

 