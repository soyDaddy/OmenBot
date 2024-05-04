const Discord = require('discord.js');

const Functions = require("../../database/models/functions");

module.exports = async (client, guild) => {
    const webhookClient = new Discord.WebhookClient({
        id: client.webhooks.serverLogs.id,
        token: client.webhooks.serverLogs.token,
    });

    if (guild == undefined) return;

    new Functions({
        Guild: guild.id,
        Prefix: client.config.discord.prefix
    }).save();

    try {
        const promises = [
            client.cluster.broadcastEval(client => client.guilds.cache.size),
            client.cluster.broadcastEval(client => client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)),
        ];
        Promise.all(promises)
            .then(async (results) => {
                const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
                const embed = new Discord.EmbedBuilder()
                    .setTitle("🟢・Added to a new server!")
                    .addFields(
                        { name: "Total servers:", value: `${totalGuilds}`, inline: true },
                        { name: "Server name", value: `${guild.name}`, inline: true },
                        { name: "Server ID", value: `${guild.id}`, inline: true },
                        { name: "Server members", value: `${guild.memberCount}`, inline: true },
                        { name: "Server owner", value: `<@!${guild.ownerId}> (${guild.ownerId})`, inline: true },
                    )
                    .setColor(client.config.colors.normal)
                webhookClient.send({
                    username: 'Bot Logs',
                    avatarURL: client.user.avatarURL(),
                    embeds: [embed],
                });
            })

        let defaultChannel = "";
        guild.channels.cache.forEach((channel) => {
            if (channel.type == Discord.ChannelType.GuildText && defaultChannel == "") {
                if (channel.permissionsFor(guild.members.me).has(Discord.PermissionFlagsBits.SendMessages)) {
                    defaultChannel = channel;
                }
            }
        })

        let row = new Discord.ActionRowBuilder()
            .addComponents(
                new Discord.ButtonBuilder()
                    .setLabel("Invitar")
                    .setURL(client.config.discord.botInvite)
                    .setStyle(Discord.ButtonStyle.Link),

                new Discord.ButtonBuilder()
                    .setLabel("Servidor de Soporte")
                    .setURL(client.config.discord.serverInvite)
                    .setStyle(Discord.ButtonStyle.Link),

                new Discord.ButtonBuilder()
                    .setLabel("Pagina Web")
                    .setURL("https://omenlist.xyz/bot/1066471348282605700")
                    .setStyle(Discord.ButtonStyle.Link),
            );

        client.embed({
            title: "Grácias por invitar a OmenBot!",
            desc: "Te agradecemos que hayas añadido a OmenBot a tu servidor, este bot te va a ayudar a configurar tu servidor de manera que se hará todo más facil.",
            image: "https://cdn.discordapp.com/attachments/1112453766294290653/1128539761414516747/standard_19.gif",
            fields: [{
                name: "📨┆Invitar a OmenBot a otro servidor!",
                value: `Invitalo haciendo click [[AQUÍ]](${client.config.discord.botInvite})`,
                inline: false,
            },
            ],
            components: [row], 
        }, defaultChannel)
    }
    catch (err) {
        console.log(err);
    }


};