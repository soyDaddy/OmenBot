const Discord = require('discord.js');

module.exports = (client) => {
    client.generateSelect = async function (id, labels) {
        let sendComponents = [];

        let row = new Discord.ActionRowBuilder();
        let row2 = new Discord.ActionRowBuilder();
        let row3 = new Discord.ActionRowBuilder();
        let row4 = new Discord.ActionRowBuilder();
        let row5 = new Discord.ActionRowBuilder();

        if (labels.length < 25 || labels.length == 25) {
            const menu = new Discord.StringSelectMenuBuilder()
                .setCustomId(`${id}-1`)
                .setPlaceholder('❌┇Nada seleccionado')
                .addOptions(labels.slice(0, 25));

            row.addComponents(menu)

            sendComponents = row;
        }

        if (labels.length < 50 && labels.length > 25 || labels.length == 50) {
            const menu = new Discord.StringSelectMenuBuilder()
                .setCustomId(`${id}-1`)
                .setPlaceholder('❌┇Nada seleccionado')
                .addOptions(labels.slice(0, 25));

            const menu2 = new Discord.StringSelectMenuBuilder()
                .setCustomId(`${id}-2`)
                .setPlaceholder('❌┇Nada seleccionado')
                .addOptions(labels.slice(25, 50));

            row.addComponents(menu)
            row2.addComponents(menu2)

            sendComponents = row, row2;
        }

        if (labels.length < 75 && labels.length > 50 || labels.length == 75) {
            const menu = new Discord.StringSelectMenuBuilder()
                .setCustomId(`${id}-1`)
                .setPlaceholder('❌┇Nada seleccionado')
                .addOptions(labels.slice(0, 25));

            const menu2 = new Discord.StringSelectMenuBuilder()
                .setCustomId(`${id}-2`)
                .setPlaceholder('❌┇Nada seleccionado')
                .addOptions(labels.slice(25, 50));

            const menu3 = new Discord.StringSelectMenuBuilder()
                .setCustomId(`${id}-3`)
                .setPlaceholder('❌┇Nada seleccionado')
                .addOptions(labels.slice(50, 75));

            row.addComponents(menu)
            row2.addComponents(menu2)
            row3.addComponents(menu3)

            sendComponents = row, row2, row3;
        }

        if (labels.length < 100 && labels.length > 75 || labels.length == 100) {
            const menu = new Discord.StringSelectMenuBuilder()
                .setCustomId(`${id}-1`)
                .setPlaceholder('❌┇Nada seleccionado')
                .addOptions(labels.slice(0, 25));

            const menu2 = new Discord.StringSelectMenuBuilder()
                .setCustomId(`${id}-2`)
                .setPlaceholder('❌┇Nada seleccionado')
                .addOptions(labels.slice(25, 50));

            const menu3 = new Discord.StringSelectMenuBuilder()
                .setCustomId(`${id}-3`)
                .setPlaceholder('❌┇Nada seleccionado')
                .addOptions(labels.slice(50, 75));

            const menu4 = new Discord.StringSelectMenuBuilder()
                .setCustomId(`${id}-4`)
                .setPlaceholder('❌┇Nada seleccionado')
                .addOptions(labels.slice(75, 100));

            row.addComponents(menu)
            row2.addComponents(menu2)
            row3.addComponents(menu3)
            row4.addComponents(menu4)

            sendComponents = row, row2, row3, row4;
        }

        if (labels.length < 125 && labels.length > 100 || labels.length == 125) {
            const menu = new Discord.StringSelectMenuBuilder()
                .setCustomId(`${id}-1`)
                .setPlaceholder('❌┇Nada seleccionado')
                .addOptions(labels.slice(0, 25));

            const menu2 = new Discord.StringSelectMenuBuilder()
                .setCustomId(`${id}-2`)
                .setPlaceholder('❌┇Nada seleccionado')
                .addOptions(labels.slice(25, 50));

            const menu3 = new Discord.StringSelectMenuBuilder()
                .setCustomId(`${id}-3`)
                .setPlaceholder('❌┇Nada seleccionado')
                .addOptions(labels.slice(50, 75));

            const menu4 = new Discord.StringSelectMenuBuilder()
                .setCustomId(`${id}-4`)
                .setPlaceholder('❌┇Nada seleccionado')
                .addOptions(labels.slice(75, 100));

            const menu5 = new Discord.StringSelectMenuBuilder()
                .setCustomId(`${id}-5`)
                .setPlaceholder('❌┇Nada seleccionado')
                .addOptions(labels.slice(100, 125));

            row.addComponents(menu)
            row2.addComponents(menu2)
            row3.addComponents(menu3)
            row4.addComponents(menu4)
            row5.addComponents(menu5)

            sendComponents = row, row2, row3, row4, row5;
        }

        return await sendComponents;
    }
}