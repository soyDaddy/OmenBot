const Schema = require("../../database/models/stats");

module.exports = async (client, guild) => {
    try {
        setInterval(async () => {
            const data = await Schema.find();
            if (data) {
                data.forEach(async d => {
                    try {
                        const guild = client.guilds.cache.get(d.Guild);
                        var channelName = await client.getTemplate(guild);
                        channelName = channelName.replace(`{emoji}`, "💎")
                        channelName = channelName.replace(`{name}`, `Boosts: ${guild.premiumSubscriptionCount || '0'}`)
                        const channel = guild.channels.cache.get(d.Boost)
                        await channel.setName(channelName)
                    } catch (e) { }
                })
            }
        }, 60000);
    } catch (err) { }
};