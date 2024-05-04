const Discord = require('discord.js');
const ms = require('ms');

module.exports = async (client, interaction, args) => {
    const gchannel = interaction.options.getChannel('channel');
    const duration = interaction.options.getString('duration');
    const winnerCount = interaction.options.getNumber('winners');
    const prize = interaction.options.getString('prize');

    client.giveawaysManager.start(gchannel, {
        duration: ms(duration),
        prize: `${client.emotes.normal.gift} - ${prize}`,
        lastChance: {
            enabled: true,
            content: `${client.emotes.normal.error} **ÚLTIMA OPORTUNIDAD PARA PARTICIPAR !** ${client.emotes.normal.error}`,
            threshold: 5000,
            embedColor: '#FF0000'
        },
        pauseOptions: {
            isPaused: true,
            content: '⚠️ **ESTE SORTEO ESTÁ PAUSADO !** ⚠️',
            unPauseAfter: null,
            embedColor: '#FFFF00'
        },
        winnerCount: parseInt(winnerCount),
        hostedBy: interaction.user,
        thumbnail: interaction.guild.iconURL({ dynamic: true, size: 1024 }),
        isDrop: true,
        messages: {
            giveaway: `${client.emotes.normal.party} **GIVEAWAY** ${client.emotes.normal.party}`,
            giveawayEnded: `${client.emotes.normal.party} **GIVEAWAY ENDED** ${client.emotes.normal.party}`,
            drawing: `${client.emotes.normal.clock} - Ends in: **{timestamp}**!`,
            dropMessage: `Be the first on react 🥳`,
            winMessage: "Congratulations {winners}! You won **{this.prize}** !",
            embedFooter: "Giveaway!",
            embedColor: client.config.colors.normal,
            noWinner: "Giveaway cancelled. Insuficient participants \n",
            hostedBy: `${client.emotes.normal.party} - Hosted by: {this.hostedBy}`,
            winners: `🏆 - Winner(s)`,
            endedAt: "Ends in:",
            units: {
                seconds: "seconds",
                minutes: "minutes",
                hours: "hours",
                days: "days",
                pluralS: false
            },
        },

    }).then((gData) => {
        client.succNormal({ 
            text: `Sorteo iniciado en ${gchannel}`,
            type: 'ephemeraledit'
        }, interaction);
    });
}

 