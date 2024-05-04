const Discord = require('discord.js');
const pollschema = require('../../database/models/votesetup');
const Schema = require('../../database/models/functions');

module.exports = async (client, interaction, args) => {
    const channel = interaction.options.getChannel('channel');
    const settings = await Schema.findOne({ Guild: interaction.guild.id });
    const getMessage = global.i18n.getLocale(settings.Locale);
    pollschema.findOne({ Guild: interaction.guild.id }, async (err, data) => {

    if (data) {
        data.Channel = channel.id;
        data.save();
    }
    else {
        new pollschema({
            Guild: interaction.guild.id, 
            Channel: channel.id
        }).save();
    }
})
client.succNormal({
    text: `${getMessage(`message.command.suggestion.done`)} ${channel}`,
    type: 'editreply'
}, interaction);
}