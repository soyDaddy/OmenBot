const Discord = require('discord.js');

const webhookClient = new Discord.WebhookClient({
    id: "1069420795358621796",
    token: "rQ2gvvokUBIULDMiF4SF-jstptWYRIUdlOu4WiLcSpygtpJ8F4mgekyB0k29QEs9GUeW",
});

module.exports = async (client, interaction, args) => {
    const feedback = interaction.options.getString('message');

    const embed = new Discord.EmbedBuilder()
        .setTitle(`📝・Nuevo Comentario!`)
        .addFields(
            { name: "User", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
        )
        .setDescription(`${feedback}`)
        .setColor(client.config.colors.normal)
    webhookClient.send({
        username: 'Bot Comentarios',
        embeds: [embed],
    });

    client.succNormal({ 
        text: `Comentario enviado correctamente`,
        type: 'editreply'
    }, interaction);
}

 