const Discord = require('discord.js');

module.exports = async (client) => {
client.on(Discord.Events.InteractionCreate, async (interaction) => {

        if (interaction.customId === 'omen_normas') {
            const embed = new Discord.EmbedBuilder().setTitle('> Normas').setColor("#800080").addFields({ name: `<:discordZoom:1066488260156739684> Respetar las reglas oficiales de discord`, value: `-> https://discord.com/guidelines\n-> https://discord.com/terms`}).addFields({ name: `<:arrow:1066488498384806008> Respetar a todo el mundo por igual`, value: `Cualquier tipo de acoso será seguido de un baneo permanente`}).addFields({ name: `<:arrow:1066488498384806008> Queda prohibido el contenido +18 o NSFW`, value: `Esto también incluye la sexualización hacia algún personaje`}).addFields({ name: `<:arrow:1066488498384806008> No autopromocionarse o spam`, value: `Esto conllevará a baneo permanente de la comunidad`}).addFields({ name: `<:arrow:1066488498384806008> No se permite hablar sobre temas polémicos`, value: `Entre ellos estan incluidos la política, religión, ideologías, etc`}).addFields({ name: `<:arrow:1066488498384806008> No usar las menciones "@ here" o "@ everyone"`, value: `Resulta molesto para la mayoría de usuarios`}).addFields({ name: `<:arrow:1066488498384806008> Totalmente prohibido insistir para ser staff`, value: `Si es necesario más personal se abrirán unas postulaciones`}).addFields({ name: `<:arrow:1066488498384806008> No realizar ruidos o comportamientos molestos en canales de audio`, value: `Es molesto para los que se encuentren en el canal`}).addFields({ name: `═══════════════════`, value: `<:Warning:1066489152486518804> Si se necesita ayuda urgente, abrid un <#1066486487169900684> en tickets para ser atendido lo antes posible.`}).setTimestamp()
            interaction.reply({embeds: [embed], ephemeral: true})
        }

        if (interaction.customId === 'omen_invitacion') {
            const embed = new Discord.EmbedBuilder().setTitle('> Invitación').setColor("#800080").setDescription(`Este es el enlace de invitación **PERMANENTE** al servidor.\n**https://discord.gg/GE8R2JjctV**\n\nPero por la reciente llegada del nivel 3 de mejoras del servidor hemos habilitado el siguiente enlace:\n**https://discord.gg/soyomen**\n\nNo está permitido crear otros enlaces en este servidor.`).setImage('https://cdn.discordapp.com/attachments/1065783915408797779/1068788573471522816/standard_10.gif').setTimestamp()
            interaction.reply({embeds: [embed], ephemeral: true})
        }

        if (interaction.customId === 'omen_redes') {
            const embed = new Discord.EmbedBuilder().setTitle('> Redes Sociales').setColor("#800080").setDescription(`Redes sociales de **soyOmen**\n\n**Instagram:** https://www.instagram.com/soyomen_/\n**Twitch:** https://www.twitch.tv/soyomen_\n**Twitter:** https://twitter.com/soyomen_\n**TikTok:** https://www.tiktok.com/@soyomen_`).setTimestamp()
            const buttons = new Discord.ActionRowBuilder().addComponents( new Discord.ButtonBuilder().setLabel('Instagram').setURL('https://www.instagram.com/soyomen_/').setStyle(Discord.ButtonStyle.Link), new Discord.ButtonBuilder().setLabel('Twitch').setURL('https://www.twitch.tv/soyomen_').setStyle(Discord.ButtonStyle.Link), new Discord.ButtonBuilder().setLabel('Twitter').setURL('https://twitter.com/soyomen_').setStyle(Discord.ButtonStyle.Link), new Discord.ButtonBuilder().setLabel('TikTok').setURL('https://www.tiktok.com/@soyomen_').setStyle(Discord.ButtonStyle.Link),)
            interaction.reply({embeds: [embed], components: [buttons], ephemeral: true})
        }
    })
}