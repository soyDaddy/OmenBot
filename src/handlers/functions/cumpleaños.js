const Schema = require("../../database/models/cumple");
const Devs = require("../../database/models/developers");
const birthdayChannel = require("../../database/models/cumplechannels");
const { EmbedBuilder } = require('discord.js')

module.exports = (client) => {
    const checkBirthdays = async () => {
        const now = new Date();
        const getLastDate = await Devs.findOne({ Action: " Birthday" }).exec();
        let month = now.getMonth() + 1;
        let day = now.getDate();
        let dateNow = `${day} - ${month}`;
        if (getLastDate) {
            const lastDate = getLastDate.Date;
            if (lastDate == dateNow) return;
            getLastDate.Date = dateNow;
            getLastDate.save();
        }
        else {
            new Devs({
                Action: "Birthday",
                Date: dateNow,
            }).save();
        }

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

        const convertedDay = day;
        const convertedMonth = months[month];
        const birthdayString = `${convertedDay}/${convertedMonth}`;
        const results = await Schema.find({ Birthday: birthdayString })

        if (results) {
            for (const result of results) {
                const { Guild, User } = result;

                const finalGuild = client.guilds.cache.get(Guild)
                if (finalGuild) {
                    birthdayChannel.findOne({ Guild: finalGuild.id }, async (err, data) => {
                        if (data) {
                            const channel = finalGuild.channels.cache.get(data.Channel);
                            const embed = new EmbedBuilder()
                            .setTitle(`${client.emotes.normal.birthday}・BirthDay`)
                            .setDescription(`Today is the birthday of <@!${User}>!`)
                            channel.send({embeds: [embed]})}})}}}

        setTimeout(checkBirthdays, 1000 * 10)
    }
    checkBirthdays()
}