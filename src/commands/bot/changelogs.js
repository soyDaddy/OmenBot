const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: "📃・Cambios",
        desc: `_____`,
        thumbnail: client.user.avatarURL({ size: 1024 }),
        fields: [{
            name: "📆 • 21/01/2023",
                value: ' - Actualización del bot a la nueva versión de discord.js (v14)',
                inline: false,
            },
            {
            name: "📆 • 27/01/2023",
                value: 'Comienzo de la traducción del bot',
                inline: false,
            },
            {
            name: "📆 • 02/02/2023",
                value: 'Suspensión temporal de todos los servicios de OmenBot',
                inline: false,
            },
            {
            name: "📆 • 3/03/2023",
                value: 'Reinicio de OmenBot',
                inline: false,
            },
            {
            name: "📆 • 12/03/2023",
                value: 'Actualización de las dependencias de OmenBot',
                inline: false,
            },
            {
            name: "📆 • 16/03/2023",
                value: 'Creación de un sistema de detección de actualizaciones automática.',
                inline: false,
            },
        ],
        type: 'editreply'
    }, interaction)
}

 