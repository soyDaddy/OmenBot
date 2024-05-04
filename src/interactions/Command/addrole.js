const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('autorol')
    .setDescription(global.i18n.getMessage(null, `commands.slash.autorol.description`))
    .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.autorol.name`))
    .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.autorol.description`))
    .addRoleOption(option => option
        .setName('role')
        .setDescription(global.i18n.getMessage(null, `commands.slash.autorol.role.description`))
        .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.autorol.role.name`))
        .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.autorol.role.description`))
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator)
    ,
    run: async (client, interaction, args) => {
        const { options, guild } = interaction
        const members = await guild.members.fetch()
        const role = options.getRole('role')
        await interaction.reply({ content: 'Cargando...'})
        let num = 0;
        setTimeout(() => {
            members.forEach( async m => {
                m.roles.add(role).catch( err => {
                    return; 
                });
                num++;

                const embed = new EmbedBuilder()
                .setTitle('Dando roles a todos los miembros')
                .setDescription(`✔️ ${num} miembros ya tienen el rol ${role}`)
                .setColor('#800080')
                interaction.editReply({ content: '', embeds: [embed]})
            });
        }, 1000)
    }
}