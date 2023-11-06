const Discord = require('discord.js');
const soycanvas = require("soycanvas")
const Schema = require("../../database/models/levels");

module.exports = async (client, interaction, args) => {
    const rawLeaderboard = await Schema.find({ guildID: interaction.guild.id }).sort(([['xp', 'descending']])).exec();
    
    if (!rawLeaderboard) return interaction.editReply('No data found')
    let messageTop = [];
    const randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
    rawLeaderboard.filter(bes => interaction.guild.members.cache.get(bes.userID)).splice(0, 10).map(async (x, index) => { messageTop.push({ top: index + 1, avatar: interaction.guild.members.cache.get(x.userID).user.displayAvatarURL({ extension: "png", forceStatic: true }), tag: interaction.guild.members.cache.get(x.userID).user.tag, score: x.level }) })
        const messageTopCanvas = await new soycanvas.Top()
            .setOpacity(0.7)
            .setScoreMessage(`Level:`)
            .setabbreviateNumber(false)
            .setColors({ box: '#212121', username: '#'+randomColor, score: '#'+randomColor, firstRank: '#f7c716', secondRank: '#9e9e9e', thirdRank: '#94610f' })
            .setUsersData(messageTop.length > 0 ? messageTop : [{ top: 1, avatar: "https://cdn.discordapp.com/avatars/928259219038302258/cb1bcc0c5616d3fb1527b4ea03c9ae17.png", tag: "soyDaddy", score: `0` }])
            .build();

    await interaction.editReply({files: [messageTopCanvas]})
}
