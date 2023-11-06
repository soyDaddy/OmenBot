const Discord = require('discord.js');
const boostTrackerSchema = require('../../database/models/boosttracker');

module.exports = async (client, interaction, args) => {
       await boostTrackerSchema.findOneAndDelete({ Guild: interaction.guild.id }).then(() => {
        client.succNormal({ 
            text: `BoostTracker successfully deleted!`,
            type: 'editreply'
        }, interaction);
    })
}