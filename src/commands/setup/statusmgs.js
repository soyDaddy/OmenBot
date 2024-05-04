const Discord = require('discord.js');
const statusSchema = require('../../database/models/statusmsgsetup');

module.exports = async (client, interaction, args) => {
    const channel = interaction.options.getChannel('channel');
    statusSchema.findOne({ Guild: interaction.guild.id }, async (err, data) => {

    if (data) {
        data.Channel = channel.id;
        data.save();
    }
    else {
        new statusSchema({
            Guild: interaction.guild.id, 
            Channel: channel.id
        }).save();
    }
})
client.succNormal({
    text: `Votación configurada correctamente!`,
    type: 'editreply'
}, interaction);
}