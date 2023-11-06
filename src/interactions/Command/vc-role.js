const { SlashCommandBuilder, PermissionsBitField, ChannelType } = require('discord.js');
const Schema = require("../../database/models/vcrole");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('vcrole')
        .setDescription('Configurar los roles de VC')
        .addRoleOption(option => option
            .setName('role')
            .setDescription('Rol que se le dará')
            .setRequired(true))
        .addChannelOption(option => option
            .setName('channel')
            .setDescription('En que canal de voz quieres configurarlo')
            .setRequired(true)
            .addChannelTypes(ChannelType.GuildVoice))
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator),

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        const role = interaction.options.getRole('role');
        const channel = interaction.options.getChannel('channel');

            await Schema.create({
                Guild: interaction.guild.id, 
                Channel: channel.id,
                Role: role.id
            });

            await client.succNormal({
            text: `VCRole configurada correctamente!`,
            type: 'editreply'
        }, interaction);
}}
