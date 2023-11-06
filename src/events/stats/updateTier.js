const Discord = require('discord.js');

const Schema = require("../../database/models/stats");

module.exports = async (client, guild) => {
    let tier = {
        "Tier1": `1`,
        "Tier2": `2`,
        "Tier3": `3`,
        "None": `0`,
    }

    try {
        var channelName = await client.getTemplate(guild);
        channelName = channelName.replace(`{emoji}`, "🥇")
        channelName = channelName.replace(`{name}`, `Tier: ${tier[guild.premiumTier] || '0'}`)

        const data = await Schema.findOne({ Guild: guild.id });
        const channel = guild.channels.cache.get(data.BoostTier)
        await channel.setName(channelName)
    }
    catch { }
};