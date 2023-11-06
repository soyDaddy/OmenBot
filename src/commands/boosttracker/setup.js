const Discord = require('discord.js');
const boostTrackerSchema = require('../../database/models/boosttracker');

module.exports = async (client, interaction, args) => {
    const channel = interaction.options.getChannel("canal");
    const logChannel = interaction.options.getChannel("logs");
    boostTrackerSchema.findOne({ Guild: interaction.guild.id, Channel: channel.id }, async (err, data) => {

    if (data) {
        data.Channel = channel.id;
        data.Logs = logChannel.id;
        data.save();
    }
    else {
        new boostTrackerSchema({
            Guild: interaction.guild.id, 
            Channel: channel.id,
            Logs: logChannel.id
        }).save();
    }
})
client.succNormal({
    text: `BoostTracker Configurated in <#${channel.id}>`,
    type: 'editreply'
}, interaction);
}