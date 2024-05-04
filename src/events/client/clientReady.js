const Discord = require('discord.js');
const fs = require("node:fs");
const fetch = require('node-fetch')
const { checkGiveaways } = require('../../functions/giveaway2');

module.exports = async (client, id) => {

    if(fs.existsSync("./restart.json")) {
        const restart = JSON.parse(fs.readFileSync("./restart.json", "utf8"));
        if(restart[0] && restart[1]) {
            const channel = client.channels.cache.get(restart[0]);
            const msg = await channel.messages?.fetch(restart[1]);
            if(!msg) return
            client.embed({
                title: `・REINICIAR`,
                desc: "Bot reiniciado correctamente",
                image: `https://media.discordapp.net/attachments/1112743789782638602/1136341316654071978/standard_38.gif`,
                color: "Green",
                type: `edit`
            }, msg);
            fs.writeFileSync("./restart.json", JSON.stringify([]), "utf8");
        }
    };

    setInterval(() => checkGiveaways(client), 60000);

    if (!process.env.OLTOKEN) {
        setInterval(() => {
            const promises = [
                client.cluster.broadcastEval(c => c.guilds.cache.size),
                client.cluster.broadcastEval((c) => c.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)),
            ];
            Promise.all(promises).then(results => {
                const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
                const members = results[1].reduce((acc, memberCount) => acc + memberCount, 0);
                fetch('https://omenlist.xyz/api/bots/stats', { 
                    headers: { 'Authorization': process.env.OLTOKEN, 'serverCount': totalGuilds, 'Content-Type': 'application/json' },
                    method: "POST"
                })
            })
        }, 10000);
    };

    setInterval(async function () {
        const promises = [
            client.cluster.broadcastEval(c => c.guilds.cache.size),
            client.cluster.broadcastEval((c) => c.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)),
        ];
        return Promise.all(promises)
            .then(results => {
                const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
                const members = results[1].reduce((acc, memberCount) => acc + memberCount, 0);
                let statuttext = [
                        `・❓┆/help`,
                        `・🌐┆${totalGuilds} servidores`,
                        `・🙆┆${members} usuarios`,
                        `・💻┆Creado por: soyDaddy`,
                        `・🎉┆400+ commands`,
                        `・🏷️┆Versión ${require(`${process.cwd()}/package.json`).version}`
                    ];
                const randomText = statuttext[Math.floor(Math.random() * statuttext.length)];
                client.user.setPresence({ activities: [{ name: randomText, type: Discord.ActivityType.Playing }], status: 'online' });
            })
    }, 30000);
}