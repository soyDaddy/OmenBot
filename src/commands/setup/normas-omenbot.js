const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const channel = interaction.options.getChannel('channel');

    const embed = new Discord.EmbedBuilder()
        .setTitle('🛑 Info Panel 🛑')
        .setDescription('\"🇪🇸\": **Español**\nEste es el panel de información del servidor y de nuestros bots\n\n\"🇺🇸\": **English**\nThis is the info panel of the server and our bots')
        .setColor('#800080')
        .setImage('https://cdn.discordapp.com/attachments/1120353006764965989/1156917319205916783/info-panel.png?ex=6516b6b7&is=65156537&hm=6af467b9e9c71867d844eaeeaab855b9c19158ca8fd6da8f0e3cd3edf74bc4d2&')

    const buttons = new Discord.ActionRowBuilder()
        .addComponents(
    new Discord.ButtonBuilder()
        .setCustomId('omenbot_info_es')
        .setLabel('Español')
        .setEmoji('🇪🇸')
        .setStyle(Discord.ButtonStyle.Secondary),

    new Discord.ButtonBuilder()
        .setCustomId('omenbot_info_en')
        .setLabel('English')
        .setEmoji('🇺🇸')
        .setStyle(Discord.ButtonStyle.Secondary),
        )
        
    channel.send({ embeds: [embed], components: [buttons]})

interaction.editReply({content: 'Done', ephemeral: true})
}