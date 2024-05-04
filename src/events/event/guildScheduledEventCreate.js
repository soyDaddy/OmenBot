const discord = require('discord.js');

module.exports = async (client, event) => {
    let types = {
        GUILD_ONLY: "Server only",
        PUBLIC: "Public",
    }

    let locations = {
        NONE: "None",
        STAGE_INSTANCE: "Stage Channel",
        VOICE: "Voice Channel",
        EXTERNAL: `External`
    }

    const logsChannel = await client.getLogs(event.guildId);
    if (!logsChannel) return;

    client.embed({
        title: `🎡・Event created`,
        desc: `An event has been created`,
        fields: [
            {
                name: `> Name`,
                value: `- ${event.name}`
            },
            {
                name: `> Description`,
                value: `- ${event.description || 'None'}`
            },
            {
                name: `> Start`,
                value: `- <t:${(event.scheduledStartTimestamp / 1000).toFixed(0)}>`
            },
            {
                name: `> Privacy`,
                value: `- ${types[event.privacyLevel]}`
            },
            {
                name: `> Creator`,
                value: `- <@!${event.creatorId}> (${event.creatorId})`
            },
            {
                name: `> Location type`,
                value: `- ${locations[event.entityType]}`
            },
            {
                name: `> Timestamp`,
                value: `- <t:${Math.floor(Date.now() / 1000)}:R>`
            }
        ]
    }, logsChannel).catch(() => { })
};