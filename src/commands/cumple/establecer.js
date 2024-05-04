const Discord = require('discord.js');
const Schema = require("../../database/models/cumple");

module.exports = async (client, interaction, args) => {
    const months = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
    };

    const day = interaction.options.getNumber('dia');
    const month = interaction.options.getNumber('mes');

    if (!day || day > 31) return client.errNormal({ 
        error: "Wrong day format!",
        type: 'editreply'
    }, interaction);

    if (!month || month > 12) return client.errNormal({
        error: "Wrong month format!",
        type: 'editreply'
    }, interaction);

    const convertedDay = day;
    const convertedMonth = months[month];
    const birthdayString = `${convertedDay}/${convertedMonth}`;

    Schema.findOne({ Guild: interaction.guild.id, User: interaction.user.id }, async (err, data) => {
        if (data) {
            data.Birthday = birthdayString;
            data.save();
        }
        else {
            new Schema({
                Guild: interaction.guild.id,
                User: interaction.user.id,
                Birthday: birthdayString
            }).save();
        }
    })

    client.succNormal({ 
        text: `Birthday has been set successfully`,
        fields: [
            {
                name: `${client.emotes.normal.birthday}┆Birthday`,
                value: `${birthdayString}`
            }
        ],
        type: 'editreply'
    }, interaction);
}