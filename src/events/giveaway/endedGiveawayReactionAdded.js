const Discord = require('discord.js');

module.exports = (client, giveaway, member, reaction) => {
    client.errNormal({
        error: `The giveaway was already ended`
    }, member).catch(() => { });
};