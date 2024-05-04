const Schema = require("../../database/models/stats");

module.exports = async (client) => {
    try {
        setInterval(async () => {
            const data = await Schema.find();
            if (data) {
                data.forEach(async d => {
                    try {
                        const guild = client.guilds.cache.get(d.Guild);
                        var channelName = await client.getTemplate(guild);
                        channelName = channelName.replace(`{emoji}`, "")
                        channelName = channelName.replace(`{name}`, `🟢 ${client.guilds.cache.get(d.Guild).members.cache.filter(member => member.presence?.status == "online").size} | 🔴 ${client.guilds.cache.get(d.Guild).members.cache.filter(member => member.presence?.status == "dnd").size} | 🟡 ${client.guilds.cache.get(d.Guild).members.cache.filter(member => member.presence?.status == "idle").size}`)
                        const channel = guild.channels.cache.get(d.Online)
                        await channel.setName(channelName)
                    } catch (e) { }
                })
            }
        }, 60000);
    } catch (err) { }
};