const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Mikey`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `Mikey69YT#6666`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `MK Mods S.L.`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[http://www.soyomen.me](http://www.soyomen.me)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 