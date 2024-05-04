const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')

module.exports = async (client, interaction, args) => {
    const channel = interaction.options.getChannel('channel');

    const embed = new EmbedBuilder()
        .setTitle('🛑 Reglas del Servidor 🛑')
        .setDescription('Se van a implementar algunas reglas en el servidor, el fin de estas reglas es tener una comunidad sana, libre de toxicidad y sobre todo tener una comunidad donde se respeten gustos, opiniones y se respeten como personas.')
        .setColor('#800080')
        .setImage('https://cdn.discordapp.com/attachments/1065783915408797779/1066484681131966555/standard_1.gif')

    const buttons = new ActionRowBuilder()
        .addComponents(
    new ButtonBuilder()
        .setCustomId('omen_normas')
        .setLabel('Normas')
        .setEmoji('📜')
        .setStyle(ButtonStyle.Secondary),

     new ButtonBuilder()
        .setCustomId('omen_invitacion')
        .setLabel('Invitación')
        .setEmoji('🏐')
        .setStyle(ButtonStyle.Secondary),

    new ButtonBuilder()
        .setCustomId('omen_redes')
        .setLabel('Redes Sociaes')
        .setEmoji('💻')
        .setStyle(ButtonStyle.Secondary),
        )
        
    channel.send({ embeds: [embed], components: [buttons]})

interaction.editReply({content: 'Done', ephemeral: true})
}