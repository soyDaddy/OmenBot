const Discord = require('discord.js');

module.exports = (client, giveaway, winners) => {
    winners.forEach((member) => {
        client.embed({
            title: `🎉・Giveaway Ended`,
            desc: `Congratulations ${member.user.username}! Won the giveaway!`,
            fields: [
                {
                    name: `🎁┆Price`,
                    value: `${giveaway.prize}`,
                    inline: true
                },
                {
                    name: `🥳┆Giveaway`,
                    value: `[Click here](https://discordapp.com/channels/${giveaway.message.guildId}/${giveaway.message.channelId}/${giveaway.message.id})`,
                    inline: true
                }
            ]
        
        }, member).catch(() => { });
    });
};