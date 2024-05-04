const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const channel = interaction.options.getChannel('channel');

    const embed = new Discord.EmbedBuilder()
        .setTitle('🛑 Reglas del Servidor 🛑')
        .setDescription('Se van a implementar algunas reglas en el servidor, el fin de estas reglas es tener una comunidad sana, libre de toxicidad y sobre todo tener una comunidad donde se respeten gustos, opiniones y se respeten como personas.')
        .setColor('#800080')
        .setImage('https://media.discordapp.net/attachments/1120353006764965989/1129963966702043248/standard_27.gif')

    const buttons = new Discord.ActionRowBuilder()
        .addComponents(
    new Discord.ButtonBuilder()
        .setCustomId('tokio_normas')
        .setLabel('Normas')
        .setEmoji('📜')
        .setStyle(Discord.ButtonStyle.Secondary),

    new Discord.ButtonBuilder()
        .setCustomId('tokio_roles')
        .setLabel('AutoRoles')
        .setEmoji('👾')
        .setStyle(Discord.ButtonStyle.Secondary),

    new Discord.ButtonBuilder()
        .setCustomId('tokio_redes')
        .setLabel('Redes Sociaes')
        .setEmoji('💻')
        .setStyle(Discord.ButtonStyle.Secondary),
        )
        
    channel.send({ embeds: [embed], components: [buttons]})

interaction.editReply({content: 'Done', ephemeral: true})
}