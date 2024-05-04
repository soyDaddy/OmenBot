const Discord = require('discord.js');
const moment = require('moment');
const momentTimezone = require('moment-timezone');

const Schema = require("../../database/models/stats");

module.exports = async (client, interaction, args) => {
    const time = interaction.options.getString("timezone");

    if (!momentTimezone.tz.zone(time)) return client.errNormal({
        error: `Timezone is not valid`,
        type: 'editreply'
    }, interaction)

    const timeNow = moment().tz(time).format("HH:mm (z)");

    var channelName = await client.getTemplate(interaction.guild);
    channelName = channelName.replace(`{emoji}`, "⏰")
    channelName = channelName.replace(`{name}`, `${timeNow}`)

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
                data.Time = channel.id;
                data.TimeZone = time
                data.save();
            }
            else {
                new Schema({
                    Guild: interaction.guild.id,
                    Time: channel.id,
                    TimeZone: time
                }).save();
            }
        })

        client.succNormal({
            text: `Voice channel count created!`,
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

 