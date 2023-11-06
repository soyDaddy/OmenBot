const Discord = require('discord.js');

const Schema = require("../../database/models/stats");

module.exports = async (client, interaction, args) => {
    var channelName = await client.getTemplate(interaction.guild);
    channelName = channelName.replace(`{emoji}`, "")
    channelName = channelName.replace(`{name}`, `🟢 ${client.guilds.cache.get(interaction.guild.id).members.cache.filter(member => member.presence?.status == "online").size} | 🔴 ${client.guilds.cache.get(interaction.guild.id).members.cache.filter(member => member.presence?.status == "dnd").size} | 🟡 ${client.guilds.cache.get(interaction.guild.id).members.cache.filter(member => member.presence?.status == "idle").size} | ⚫${client.guilds.cache.get(interaction.guild.id).members.cache.filter(member => member.presence?.status == "offline").size}`)

    await interaction.guild.channels.create({
        name: channelName,
        type:  Discord.ChannelType.GuildVoice, permissionOverwrites: [
            {
                deny: [Discord.PermissionsBitField.Flags.Connect],
                id: interaction.guild.id
            },
        ],
    }).then(async (channel) => {
        Schema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
            if (data) {
                data.Online = channel.id;
                data.save();
            }
            else {
                new Schema({
                    Guild: interaction.guild.id,
                    Online: channel.id
                }).save();
            }
        })

        client.succNormal({
            text: `Online members count created!`,
            fields: [
                {
                    name: `📘┆Channel`,
                    value: `${channel}`
                }
            ],
            type: 'editreply'
        }, interaction);
    })

}

 