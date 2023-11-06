const Discord = require('discord.js');
const chalk = require('chalk');
const fs = require("node:fs");
const fetch = require('node-fetch')
const { getInfo } = require('discord-hybrid-sharding')

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

    const startLogs = new Discord.WebhookClient({
        id: client.webhooks.startLogs.id,
        token: client.webhooks.startLogs.token,
    });

    console.log(`\u001b[0m`);
    console.log(chalk.blue(chalk.bold(`System`)), (chalk.white(`>>`)), chalk.red(`Cluster #${client.cluster.id}`), chalk.green(`is ready!`))
    console.log(chalk.blue(chalk.bold(`Bot`)), (chalk.white(`>>`)), chalk.green(`Started on`), chalk.red(`${client.guilds.cache.size}`), chalk.green(`servers!`))

    let embed = new Discord.EmbedBuilder()
        .setTitle(`🆙・Cluster Encendido`)
        .setDescription(`Se han iniciado los Cluster`)
        .addFields(
            { name: "🆔┆ID", value: `${id}/${getInfo().TOTAL_SHARDS}`, inline: true },
            { name: "📃┆Estado", value: `Listo`, inline: true },
        )
        .setColor(client.config.colors.normal)
    startLogs.send({
        username: 'Bot Logs',
        embeds: [embed],
    });

    setInterval(async function () {
        const promises = [
            client.cluster.broadcastEval(c => c.guilds.cache.size),
            client.cluster.broadcastEval((c) => c.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)),
        ];
        return Promise.all(promises)
            .then(results => {
                const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
                const members = results[1].reduce((acc, memberCount) => acc + memberCount, 0);
                fetch('https://list.soydaddy.space/api/bots/stats', { 
                    headers: { 'Authorization': process.env.OLTOKEN, 'serverCount': totalGuilds, 'shardCount': getInfo().TOTAL_SHARDS, 'Content-Type': 'application/json' },
                    method: "POST"
                  })
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
    }, 30000)
}

