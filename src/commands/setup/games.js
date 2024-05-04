const Discord = require('discord.js');
const Counting = require("../../database/models/countChannel");
const GTN = require("../../database/models/guessNumber");
const GTW = require("../../database/models/guessWord");
const WordSnake = require("../../database/models/wordsnake");

module.exports = async (client, interaction, args) => {
    const choice = interaction.options.getString('setup');
    const channel = interaction.options.getChannel('channel');

    if (choice == "counting") {
        client.embed({
            title: `🔢・Contador`,
            desc: `Este es el inicio del contador, empezamos desde el número **1**`,
            image: "https://cdn.discordapp.com/attachments/1120353006764965989/1129404937042919444/standard_24.gif"
        }, channel)

        client.createChannelSetup(Counting, channel, interaction)
    }

    if (choice == "gtn") {
        client.embed({
            title: `🔢・Adivina el número`,
            desc: `Adivina el número entre **1** y **10.000**!`,
            image: "https://cdn.discordapp.com/attachments/1120353006764965989/1129404936321507388/standard_23.gif"
        }, channel)

        client.createChannelSetup(GTN, channel, interaction)
    }

    if (choice == "gtw") {
        var word = "start";
        var shuffled = word.split('').sort(function () { return 0.5 - Math.random() }).join('');

        client.embed({
            title: `💬・Adivina la Palabra`,
            desc: `Pon las letras en el orden correcto!`,
            image: "https://media.discordapp.net/attachments/1120353006764965989/1129404937441386536/standard_25.gif",
            fields: [
                {
                    name: `🔀┆Palabra`,
                    value: `${shuffled.toLowerCase()}`
                }
            ],
        }, channel)

        client.createChannelSetup(GTW, channel, interaction)
    }

    if (choice == "wordsnake") {
        client.createChannelSetup(WordSnake, channel, interaction)
    }
}

 