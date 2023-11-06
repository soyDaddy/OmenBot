const Discord = require('discord.js');
const soycanvas = require("soycanvas");
const Functions = require("../../database/models/functions");
const Schema = require("../../database/models/levels");
const Profile = require('../../database/models/profile');

module.exports = async (client, interaction, args) => {
    const data = await Functions.findOne({ Guild: interaction.guild.id });

    if (data && data.Levels == true) {
        const target = interaction.options.getUser('user') || interaction.user;
        const user = await client.fetchLevels(target.id, interaction.guild.id);
        const prfile = await Profile.findOne({ User: target.id });

        if(!user || !user.xp) return client.errNormal({
            error: "This user has no levels!",
            type: 'editreply'
        }, interaction);
        let xpRequired = client.xpFor(user.level + 1);
        const randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
        if (prfile) {
            const rank = await new soycanvas.Rank()
    .setAvatar(target.displayAvatarURL({ forceStatic: true, extension: "png" }))
    .setBackground("image", prfile.Background)
    .setUsername(target.username)
    .setBorder(prfile.Color)
    .setBarColor(prfile.Color)
    .setStatus(client.guilds.cache.get(interaction.guild.id).members.cache.get(target.id).presence?.status ?? 'offline')
    .setLevel(user.level)
    .setLevelColor({number:prfile.Color})
    .setRank(user.position)
    .setRankColor({number:prfile.Color})
    .setCurrentXp(user.xp)
    .setRequiredXp(xpRequired)
    .build();
    interaction.editReply({ files: [rank] })
        } else {
            const rank = await new soycanvas.Rank()
    .setAvatar(target.displayAvatarURL({ forceStatic: true, extension: "png" }))
    .setBackground("image", "https://list.soydaddy.space/public/background.jpg")
    .setUsername(target.username)
    .setBorder('#'+randomColor)
    .setBarColor('#'+randomColor)
    .setStatus(client.guilds.cache.get(interaction.guild.id).members.cache.get(target.id).presence?.status ?? 'offline')
    .setLevel(user.level)
    .setLevelColor({number:'#'+randomColor})
    .setRank(user.position)
    .setRankColor({number:'#'+randomColor})
    .setCurrentXp(user.xp)
    .setRequiredXp(xpRequired)
    .build();
    interaction.editReply({ files: [rank] })
        }
    }
    else {
        client.errNormal({
            error: "Levels are disabled in this guild!",
            type: 'editreply'
        }, interaction);
    }
}

