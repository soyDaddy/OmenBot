const Discord = require('discord.js');

module.exports = async (client) => {
client.on(Discord.Events.InteractionCreate, async (interaction) => {

        if (interaction.customId === 'tokio_normas') {
            const embed = new Discord.EmbedBuilder()
            .setTitle('> Normas')
            .setColor("#800080")
            .setTimestamp()
            .addFields({ name: `RESPETO A LOS USUARIOS Y STAFF`, value: `𝘓𝘰 𝘱𝘳𝘪𝘮𝘰𝘳𝘥𝘪𝘢𝘭 𝘦𝘴 𝘦𝘭 𝘳𝘦𝘴𝘱𝘦𝘵𝘰, 𝘢𝘴𝘪 𝘲𝘶𝘦 𝘢𝘯𝘵𝘦 𝘵𝘰𝘥𝘰 𝘴𝘦 𝘱𝘪𝘥𝘦 𝘳𝘦𝘴𝘱𝘦𝘵𝘰 𝘵𝘢𝘯𝘵𝘰 𝘢 𝘶𝘴𝘶𝘢𝘳𝘪𝘦𝘴 𝘤𝘰𝘮𝘰 𝘢𝘭 𝘴𝘵𝘢𝘧𝘧, 𝘳𝘦𝘴𝘱𝘦𝘵𝘰 𝘦𝘯 𝘨𝘦𝘯𝘦𝘳𝘢𝘭. 𝘚𝘪 𝘯𝘰 𝘵𝘪𝘦𝘯𝘦𝘯 𝘶𝘯 𝘯𝘪𝘷𝘦𝘭 𝘥𝘦 𝘤𝘰𝘯𝘧𝘪𝘢𝘯𝘻𝘢 𝘦𝘷𝘪𝘵𝘦𝘯 𝘪𝘯𝘴𝘶𝘭𝘵𝘢𝘳𝘴𝘦, 𝘩𝘢𝘤𝘦𝘳 𝘣𝘳𝘰𝘮𝘢𝘴 𝘥𝘦 𝘩𝘶𝘮𝘰𝘳 𝘯𝘦𝘨𝘳𝘰 𝘴𝘰𝘭𝘰 𝘴𝘪 𝘦𝘴𝘵𝘢𝘯 𝘦𝘯 𝘤𝘰𝘯𝘧𝘪𝘢𝘯𝘻𝘢. 𝘓𝘢 𝘣𝘳𝘰𝘮𝘢𝘴 𝘰𝘧𝘦𝘯𝘴𝘪𝘷𝘢𝘴 𝘯𝘰 𝘴𝘦 𝘵𝘰𝘭𝘦𝘳𝘢𝘳𝘢𝘯, 𝘺 𝘢 𝘣𝘳𝘰𝘮𝘢𝘴 𝘰𝘧𝘦𝘯𝘴𝘪𝘷𝘢𝘴 𝘮𝘦 𝘳𝘦𝘧𝘪𝘦𝘳𝘰 𝘢 𝘤𝘶𝘢𝘭𝘲𝘶𝘪𝘦𝘳 𝘣𝘳𝘰𝘮𝘢 𝘲𝘶𝘦 𝘩𝘢𝘨𝘢 𝘴𝘦𝘯𝘵𝘪𝘳 𝘮𝘢𝘭 𝘢𝘭 𝘰𝘵𝘳𝘰, 𝘺𝘢 𝘴𝘦𝘢 𝘤𝘰𝘯 𝘳𝘦𝘧𝘦𝘳𝘦𝘯𝘤𝘪𝘢 𝘢𝘭 𝘧𝘪𝘴𝘪𝘤𝘰, 𝘰𝘳𝘪𝘦𝘯𝘵𝘢𝘤𝘪𝘰𝘯, 𝘨𝘶𝘴𝘵𝘰𝘴 𝘰 𝘴𝘦𝘹𝘶𝘢𝘭𝘦𝘴.`})
            .addFields({ name: `RESPETO A LOS CANALES`, value: `𝘊𝘰𝘮𝘰 𝘴𝘦 𝘥𝘪𝘦𝘳𝘰𝘯 𝘤𝘶𝘦𝘯𝘵𝘢, 𝘩𝘢𝘺 𝘮𝘶𝘤𝘩𝘰𝘴 𝘤𝘢𝘯𝘢𝘭𝘦𝘴 𝘺 𝘤𝘰𝘯𝘴𝘵𝘢𝘯𝘵𝘦𝘮𝘦𝘯𝘵𝘦 𝘴𝘦 𝘢𝘨𝘳𝘦𝘨𝘢𝘯 𝘮𝘢𝘴 𝘤𝘢𝘯𝘢𝘭𝘦𝘴, 𝘴𝘰𝘭𝘰 𝘴𝘦 𝘭𝘦𝘴 𝘷𝘢 𝘢 𝘱𝘦𝘥𝘪𝘳 𝘲𝘶𝘦 𝘳𝘦𝘴𝘱𝘦𝘵𝘦𝘯 𝘦𝘴𝘵𝘰𝘴 𝘤𝘢𝘯𝘢𝘭𝘦𝘴, 𝘶𝘴𝘦𝘯 𝘭𝘰𝘴 𝘤𝘢𝘯𝘢𝘭𝘦𝘴 𝘤𝘰𝘯 𝘦𝘭 𝘤𝘰𝘯𝘵𝘦𝘯𝘪𝘥𝘰 𝘲𝘶𝘦 𝘴𝘰𝘯. 𝘌𝘫𝘦𝘮𝘱𝘭𝘰: 𝘊𝘢𝘯𝘢𝘭 𝘤𝘰𝘯 𝘤𝘰𝘯𝘵𝘦𝘯𝘪𝘥𝘰 𝘛𝘰𝘭𝘭, 𝘢𝘩𝘪 𝘴𝘦 𝘱𝘶𝘣𝘭𝘪𝘤𝘢𝘯 𝘭𝘢𝘴 𝘧𝘰𝘵𝘰𝘴, 𝘵𝘦𝘰𝘳𝘪𝘢𝘴 𝘰 𝘭𝘰 𝘲𝘶𝘦 𝘦𝘴𝘵𝘦 𝘳𝘦𝘭𝘢𝘤𝘪𝘰𝘯𝘢𝘥𝘰 𝘢𝘭 𝘵𝘦𝘮𝘢, 𝘯𝘰 𝘦𝘯 𝘰𝘵𝘳𝘰 𝘤𝘢𝘯𝘢𝘭.`})
            .addFields({ name: `TEMA INCLUSIÓN`, value: `𝘌𝘴 𝘪𝘮𝘱𝘰𝘳𝘵𝘢𝘯𝘵𝘦 𝘲𝘶𝘦 𝘦𝘯 𝘶𝘯𝘢 𝘤𝘰𝘮𝘶𝘯𝘪𝘥𝘢𝘥 𝘩𝘢𝘺𝘢 𝘪𝘯𝘤𝘭𝘶𝘴𝘪𝘰𝘯, 𝘳𝘦𝘤𝘶𝘦𝘳𝘥𝘦𝘯 𝘲𝘶𝘦 𝘯𝘰 𝘵𝘰𝘥𝘢𝘴 𝘭𝘢𝘴 𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘴 𝘵𝘪𝘦𝘯𝘦𝘯 𝘭𝘢 𝘤𝘢𝘱𝘢𝘤𝘪𝘥𝘢𝘥 𝘥𝘦 𝘴𝘰𝘤𝘪𝘢𝘭𝘪𝘻𝘢𝘳, 𝘱𝘰𝘳 𝘭𝘰 𝘲𝘶𝘦 𝘴𝘦 𝘭𝘦𝘴 𝘱𝘪𝘥𝘦 𝘴𝘦𝘳 𝘢𝘮𝘢𝘣𝘭𝘦𝘴 𝘤𝘰𝘯 𝘭𝘢𝘴 𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘴 𝘯𝘶𝘦𝘷𝘢𝘴 𝘺 𝘭𝘢𝘴 𝘱𝘰𝘳𝘴𝘰𝘯𝘢𝘴 𝘪𝘯𝘵𝘳𝘰𝘷𝘦𝘳𝘵𝘪𝘥𝘢𝘴.`})
            .addFields({ name: `SPAM EN EL SERVIDOR`, value: `𝘌𝘭 𝘴𝘱𝘢𝘮 𝘦𝘯 𝘴𝘪 𝘯𝘰 𝘴𝘦 𝘷𝘢 𝘢 𝘱𝘳𝘰𝘩𝘪𝘣𝘪𝘳, 𝘩𝘢𝘺 𝘶𝘯 𝘢𝘱𝘢𝘳𝘵𝘢𝘥𝘰 𝘦𝘯 𝘱𝘳𝘰𝘤𝘦𝘴𝘰 𝘲𝘶𝘦 𝘦𝘴 𝘦𝘴𝘱𝘦𝘤𝘪𝘢𝘭 𝘱𝘢𝘳𝘢 𝘩𝘢𝘤𝘦𝘳 𝘴𝘱𝘢𝘮 𝘥𝘦 𝘰𝘵𝘳𝘰𝘴 𝘴𝘦𝘳𝘷𝘪𝘥𝘰𝘳𝘦𝘴 𝘰 𝘩𝘢𝘤𝘦𝘳 𝘢𝘭𝘪𝘢𝘯𝘻𝘢𝘴. 𝘗𝘦𝘳𝘰 𝘦𝘷𝘪𝘵𝘦𝘯 𝘩𝘢𝘤𝘦𝘳 𝘴𝘱𝘢𝘮 𝘮𝘶𝘭𝘵𝘪𝘱𝘭𝘦 𝘺 𝘭𝘭𝘦𝘯𝘢𝘳 𝘥𝘦 𝘮𝘦𝘯𝘴𝘢𝘫𝘦𝘴 𝘤𝘰𝘯 𝘹 𝘨𝘳𝘶𝘱𝘰 𝘰 𝘭𝘪𝘯𝘬.`})
            .addFields({ name: `ANTE CUALQUIER CONFLICTO DIRIGIRSE AL STAFF`, value: `𝘚𝘪 𝘱𝘰𝘳 𝘢𝘭𝘨𝘶𝘯 𝘮𝘰𝘵𝘪𝘷𝘰 𝘵𝘪𝘦𝘯𝘦𝘯 𝘶𝘯 𝘱𝘳𝘰𝘣𝘭𝘦𝘮𝘢 𝘤𝘰𝘯 𝘢𝘭𝘨𝘶𝘯 𝘶𝘴𝘶𝘢𝘳𝘪𝘰 𝘥𝘦𝘭 𝘥𝘪𝘴𝘤𝘰𝘳𝘥, 𝘱𝘶𝘦𝘥𝘦𝘯 𝘪𝘳 𝘢𝘭 𝘢𝘱𝘢𝘳𝘵𝘢𝘥𝘰 𝘥𝘦 𝘴𝘰𝘱𝘰𝘳𝘵𝘦, 𝘢𝘣𝘳𝘪𝘳 𝘶𝘯 𝘵𝘪𝘤𝘬𝘦𝘵 𝘺 𝘤𝘰𝘮𝘦𝘯𝘵𝘢𝘳𝘮𝘦 𝘤𝘶𝘢𝘭 𝘦𝘴 𝘦𝘭 𝘱𝘳𝘰𝘣𝘭𝘦𝘮𝘢 𝘺 𝘭𝘰𝘴 𝘪𝘯𝘷𝘰𝘭𝘶𝘤𝘳𝘢𝘥𝘰𝘴, 𝘵𝘰𝘥𝘰 𝘤𝘰𝘯 𝘦𝘭 𝘧𝘪𝘯 𝘥𝘦 𝘱𝘰𝘯𝘦𝘳 𝘶𝘯 𝘢𝘳𝘳𝘦𝘨𝘭𝘰 𝘺 𝘮𝘢𝘯𝘵𝘦𝘯𝘦𝘳 𝘶𝘯𝘢 𝘤𝘰𝘮𝘶𝘯𝘪𝘥𝘢𝘥 𝘭𝘪𝘣𝘳𝘦 𝘥𝘦 𝘱𝘦𝘭𝘦𝘢𝘴 𝘺 𝘤𝘰𝘯 𝘣𝘶𝘦𝘯𝘢𝘴 𝘦𝘯𝘦𝘳𝘨𝘪𝘢𝘴.`})
            .addFields({ name: `SIN ACOSO`, value: `𝘌𝘴𝘵𝘢 𝘤𝘰𝘮𝘱𝘭𝘦𝘵𝘢𝘮𝘦𝘯𝘵𝘦 𝘱𝘳𝘰𝘩𝘪𝘣𝘰 𝘦𝘭 𝘢𝘤𝘰𝘴𝘰 𝘢 𝘤𝘶𝘢𝘭 𝘮𝘪𝘦𝘮𝘣𝘳𝘰 𝘥𝘦 𝘭𝘢 𝘤𝘰𝘮𝘶𝘯𝘪𝘥𝘢𝘥. 𝘏𝘢𝘣𝘳𝘢 𝘵𝘰𝘭𝘦𝘳𝘢𝘯𝘤𝘪𝘢 𝘤𝘦𝘳𝘰 𝘤𝘰𝘯 𝘦𝘴𝘵𝘦 𝘵𝘪𝘱𝘰 𝘥𝘦 𝘢𝘤𝘵𝘰𝘴, 𝘴𝘪 𝘶𝘴𝘵𝘦𝘥𝘦𝘴 𝘤𝘰𝘮𝘰 𝘶𝘴𝘶𝘢𝘳𝘪𝘰𝘴 𝘴𝘦 𝘷𝘦𝘯 𝘦𝘯 𝘶𝘯𝘢 𝘴𝘪𝘵𝘶𝘢𝘤𝘪𝘰𝘯 𝘥𝘦 𝘢𝘤𝘰𝘴𝘰, 𝘱𝘶𝘦𝘥𝘦𝘯 𝘢𝘣𝘳𝘪𝘳 𝘶𝘯 𝘵𝘪𝘤𝘬𝘦𝘵 𝘰 𝘭𝘢 𝘮𝘦𝘫𝘰𝘳 𝘰𝘱𝘤𝘪𝘰𝘯 𝘩𝘢𝘣𝘭𝘢𝘳𝘮𝘦 𝘢𝘭 𝘱𝘳𝘪𝘷𝘢𝘥𝘰 𝘥𝘪𝘳𝘦𝘤𝘵𝘢𝘮𝘦𝘯𝘵𝘦 𝘤𝘰𝘯 𝘭𝘰𝘴 𝘥𝘦𝘵𝘢𝘭𝘭𝘦𝘴 𝘥𝘦𝘭 𝘩𝘦𝘤𝘩𝘰 𝘺 𝘦𝘭 𝘶𝘴𝘶𝘢𝘳𝘪𝘰, 𝘦𝘴𝘵𝘦 𝘴𝘦𝘳𝘢 𝘣𝘢𝘯𝘦𝘢𝘥𝘰 𝘱𝘦𝘳𝘮𝘢𝘯𝘦𝘯𝘵𝘦𝘮𝘦𝘯𝘵𝘦.`})
            .addFields({ name: `CERO CONTENIDO EXPLICITO`, value: `𝘚𝘦 𝘱𝘳𝘰𝘩𝘪𝘣𝘦 𝘵𝘰𝘵𝘢𝘭𝘮𝘦𝘯𝘵𝘦 𝘦𝘭 𝘤𝘰𝘯𝘵𝘦𝘯𝘪𝘥𝘰 +18 / 𝘕𝘚𝘍𝘞 / 𝘷𝘪𝘰𝘭𝘦𝘯𝘤𝘪𝘢 𝘰 𝘨𝘰𝘳𝘦. 𝘙𝘦𝘤𝘰𝘳𝘥𝘦𝘮𝘰𝘴 𝘲𝘶𝘦 𝘦𝘯 𝘦𝘭 𝘴𝘦𝘳𝘷𝘪𝘥𝘰𝘳 𝘩𝘢𝘺 𝘮𝘦𝘯𝘰𝘳𝘦𝘴 𝘥𝘦 𝘦𝘥𝘢𝘥 𝘺 𝘦𝘴 𝘪𝘮𝘱𝘰𝘳𝘵𝘢𝘯𝘵𝘦 𝘭𝘭𝘦𝘷𝘢𝘳 𝘶𝘯𝘢 𝘤𝘰𝘮𝘶𝘯𝘪𝘥𝘢𝘥 𝘢 𝘤𝘰𝘳𝘥𝘦 𝘢 𝘵𝘰𝘥𝘢𝘴 𝘭𝘢𝘴 𝘦𝘥𝘢𝘥𝘦𝘴.`})
            .addFields({ name: `CONTENIDO TOLL`, value: `𝘋𝘦𝘣𝘪𝘥𝘰 𝘢 𝘲𝘶𝘦 𝘩𝘢𝘺 𝘮𝘶𝘤𝘩𝘢𝘴 𝘢 𝘭𝘢𝘴 𝘲𝘶𝘦 𝘛𝘰𝘭𝘭 𝘯𝘰 𝘭𝘦𝘴 𝘢𝘨𝘳𝘢𝘥𝘢, 𝘴𝘦 𝘩𝘢𝘳𝘢 𝘶𝘯 𝘳𝘢𝘯𝘨𝘰 𝘛𝘰𝘭𝘭 𝘱𝘢𝘳𝘢 𝘲𝘶𝘦 𝘭𝘢𝘴 𝘲𝘶𝘦 𝘴𝘰𝘯 𝘧𝘢𝘯𝘴 𝘥𝘦 𝘛𝘰𝘭𝘭 𝘱𝘶𝘦𝘥𝘢𝘯 𝘱𝘦𝘥𝘪𝘳𝘭𝘰 𝘺 𝘴𝘰𝘭𝘰 𝘱𝘢𝘳𝘢 𝘦𝘴𝘢𝘴 𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘴 𝘴𝘦𝘳𝘢 𝘷𝘪𝘴𝘪𝘣𝘭𝘦 𝘦𝘭 𝘤𝘰𝘯𝘵𝘦𝘯𝘪𝘥𝘰 𝘥𝘦 𝘭𝘰𝘴 𝘤𝘢𝘯𝘢𝘭𝘦𝘴 𝘛𝘰𝘭𝘭.`})
            .addFields({ name: `PALABRAS BANEADAS`, value: `𝘓𝘢𝘴 𝘱𝘢𝘭𝘢𝘣𝘳𝘢𝘴 𝘝𝘪^𝘭𝘢𝘤𝘪𝘰𝘯, 𝘷𝘪^𝘭𝘢𝘳 𝘰 𝘤𝘶𝘢𝘭𝘲𝘶𝘪𝘦𝘳 𝘱𝘢𝘭𝘢𝘣𝘳𝘢 𝘳𝘦𝘭𝘢𝘤𝘪𝘰𝘯𝘢𝘥𝘢 𝘤𝘰𝘯 𝘦𝘭 𝘢𝘣𝘶𝘴𝘰 𝘴𝘦𝘹*𝘢𝘭. \n\n𝘚𝘪 𝘶𝘴𝘢𝘯 𝘦𝘴𝘢𝘴 𝘱𝘢𝘭𝘢𝘣𝘳𝘢𝘴 𝘭𝘦𝘴 𝘭𝘭𝘦𝘨𝘢𝘳𝘢 𝘶𝘯𝘢 𝘢𝘥𝘷𝘦𝘳𝘵𝘦𝘯𝘤𝘪𝘢 𝘥𝘦 𝘴𝘢𝘯𝘤𝘪𝘰𝘯. \n\n𝘌𝘯 𝘨𝘦𝘯𝘦𝘳𝘢𝘭 𝘵𝘰𝘥𝘢𝘴 𝘴𝘰𝘭𝘦𝘮𝘰𝘴 𝘶𝘴𝘢𝘳 𝘭𝘰𝘴 𝘪𝘯𝘴𝘶𝘭𝘵𝘰𝘴 𝘰 𝘨𝘳𝘰𝘴𝘦𝘳𝘪𝘢𝘴, 𝘯𝘰 𝘴𝘦𝘳𝘦𝘮𝘰𝘴 𝘶𝘯 𝘴𝘦𝘳𝘷𝘦𝘳 𝘲𝘶𝘦 𝘴𝘦 𝘭𝘰𝘴 𝘷𝘢 𝘢 𝘱𝘳𝘰𝘩𝘪𝘣𝘪𝘳, 𝘤𝘰𝘮𝘰 𝘥𝘪𝘤𝘦 𝘦𝘯 𝘭𝘢 𝘱𝘳𝘪𝘮𝘦𝘳𝘢 𝘳𝘦𝘨𝘭𝘢, 𝘴𝘪 𝘵𝘪𝘦𝘯𝘦𝘯 𝘤𝘰𝘯𝘧𝘪𝘢𝘯𝘻𝘢 𝘴𝘰𝘯 𝘭𝘪𝘣𝘳𝘦𝘴 𝘥𝘦 𝘶𝘴𝘢𝘳 𝘦𝘭 𝘷𝘰𝘤𝘢𝘣𝘶𝘭𝘢𝘳𝘪𝘰 𝘲𝘶𝘦 𝘥𝘦𝘴𝘦𝘦𝘯 𝘴𝘪 𝘦𝘴𝘵𝘦 𝘯𝘰 𝘰𝘧𝘦𝘯𝘥𝘦 𝘢 𝘰𝘵𝘳𝘰𝘴. `})
            .addFields({ name: `WARNS Y BANEOS`, value: `𝘌𝘯 𝘦𝘭 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘣𝘳𝘢 𝘶𝘯 𝘱𝘰𝘤𝘰 𝘥𝘦 𝘵𝘰𝘭𝘦𝘳𝘢𝘯𝘤𝘪𝘢 𝘤𝘰𝘯 𝘭𝘰𝘴 𝘣𝘢𝘯𝘦𝘰𝘴, 𝘥𝘦𝘱𝘦𝘯𝘥𝘪𝘦𝘯𝘥𝘰 𝘥𝘦𝘭 𝘵𝘪𝘱𝘰 𝘥𝘦 𝘴𝘪𝘵𝘶𝘢𝘤𝘪𝘰𝘯 𝘰 𝘥𝘦 𝘳𝘦𝘨𝘭𝘢 𝘲𝘶𝘦 𝘴𝘦 𝘪𝘯𝘤𝘶𝘮𝘱𝘭𝘢 𝘰𝘣𝘷𝘪𝘢𝘮𝘦𝘯𝘵𝘦. 𝘛𝘦𝘯𝘥𝘳𝘢𝘯 𝘤𝘶𝘢𝘵𝘳𝘰 𝘞𝘢𝘳𝘮𝘴, 𝘢𝘯𝘵𝘦 𝘤𝘶𝘢𝘭𝘲𝘶𝘪𝘦𝘳 𝘪𝘯𝘤𝘶𝘮𝘱𝘭𝘪𝘮𝘪𝘦𝘯𝘵𝘰 𝘴𝘦𝘳𝘢𝘯 𝘪𝘯𝘧𝘰𝘳𝘮𝘢𝘥𝘢𝘴 𝘦𝘯 𝘦𝘭 𝘤𝘢𝘯𝘢𝘭 𝘥𝘦 𝘢𝘭𝘦𝘳𝘵𝘢𝘴 𝘺 𝘭𝘢𝘴 𝘴𝘢𝘯𝘤𝘪𝘰𝘯𝘦𝘴 𝘴𝘦𝘳𝘢𝘯 𝘮𝘦𝘯𝘤𝘪𝘰𝘯𝘢𝘥𝘢𝘴 𝘦𝘯 𝘦𝘭 𝘤𝘢𝘯𝘢𝘭 𝘥𝘦 𝘴𝘢𝘯𝘤𝘪𝘰𝘯𝘦𝘴. 𝘛𝘦𝘯𝘥𝘳𝘢𝘯 𝘦𝘭 𝘣𝘦𝘯𝘦𝘧𝘪𝘤𝘪𝘰 𝘥𝘦 𝘭𝘢 𝘥𝘶𝘥𝘢 𝘦𝘯 𝘤𝘢𝘥𝘢 𝘞𝘢𝘳𝘮, 𝘴𝘪 𝘴𝘰𝘣𝘳𝘦𝘱𝘢𝘴𝘢𝘯 𝘭𝘰𝘴 𝘤𝘶𝘢𝘵𝘳𝘰 𝘴𝘦𝘳𝘢𝘯 𝘦𝘹𝘱𝘶𝘭𝘴𝘢𝘥𝘰𝘴 𝘰 𝘣𝘢𝘯𝘦𝘢𝘥𝘰𝘴 𝘱𝘦𝘳𝘮𝘢𝘯𝘦𝘯𝘵𝘦 𝘥𝘦𝘱𝘦𝘯𝘥𝘪𝘦𝘯𝘥𝘰 𝘥𝘦𝘭 𝘪𝘯𝘤𝘶𝘮𝘱𝘭𝘪𝘮𝘪𝘦𝘯𝘵𝘰.`})
            .addFields({ name: `NEKOTINA BOT`, value: `𝘘𝘶𝘦𝘥𝘢 𝘱𝘳𝘰𝘩𝘪𝘣𝘪𝘥𝘰 𝘦𝘭 𝘶𝘴𝘰 𝘥𝘦 𝘤𝘰𝘯𝘵𝘦𝘯𝘪𝘥𝘰 𝘦𝘹𝘱𝘭𝘪𝘤𝘪𝘵𝘰 𝘤𝘰𝘯 𝘦𝘭 𝘣𝘰𝘵 𝘥𝘦 𝘕𝘦𝘬𝘰𝘵𝘪𝘯𝘢, 𝘥𝘦 𝘶𝘴𝘢𝘳 𝘦𝘭 𝘣𝘰𝘵 𝘦𝘯 𝘮𝘰𝘥𝘰 𝘕𝘚𝘍𝘞, 𝘴𝘦𝘳𝘢𝘯 𝘴𝘢𝘯𝘤𝘪𝘰𝘯𝘢𝘥𝘢𝘴. 𝘙𝘦𝘤𝘶𝘦𝘳𝘥𝘦𝘯 𝘲𝘶𝘦 𝘦𝘯 𝘦𝘭 𝘴𝘦𝘳𝘷𝘦𝘳 𝘩𝘢𝘺 𝘮𝘦𝘯𝘰𝘳𝘦𝘴 𝘥𝘦 𝘦𝘥𝘢𝘥.`})

            interaction.reply({embeds: [embed], ephemeral: true})
        }

        if (interaction.customId === 'tokio_roles') {
            const embed = new Discord.EmbedBuilder()
                .setTitle('> AutoRoles')
                .setColor("#800080")
                .setTimestamp()
                .setDescription('Estos son nuestros AutoRoles que puedes conseguir')

            const buttons = new Discord.ActionRowBuilder()
                .addComponents(
                    new Discord.ButtonBuilder().setCustomId('tokio_auto_genero').setLabel('Género').setEmoji('♀️').setStyle(Discord.ButtonStyle.Secondary),
                    new Discord.ButtonBuilder().setCustomId('tokio_auto_edad').setLabel('Edad').setEmoji('🔞').setStyle(Discord.ButtonStyle.Secondary),
                    new Discord.ButtonBuilder().setCustomId('tokio_auto_color').setLabel('Color').setEmoji('🎨').setStyle(Discord.ButtonStyle.Secondary),
                    new Discord.ButtonBuilder().setCustomId('tokio_auto_DM').setLabel('Estado DM').setEmoji('🔐').setStyle(Discord.ButtonStyle.Secondary),
                )
            
            interaction.reply({embeds: [embed], components: [buttons], ephemeral: true})
        }

        if (interaction.customId === 'tokio_auto_edad') {
            const embed = new Discord.EmbedBuilder()
                .setTitle('> AutoRoles Edad')
                .setColor("#800080")
                .setTimestamp()
                .setImage('https://media.discordapp.net/attachments/1120353006764965989/1129963920627597442/standard_30.gif')
                .setDescription('Estos son los roles para asignar tu Edad en el servidor')

                const roles = new Discord.ActionRowBuilder()
                .addComponents(
                    new Discord.StringSelectMenuBuilder()
                        .setCustomId('tokio_roles_edad')
                        .setPlaceholder('❌ ┆ Nada Seleccionado')
                        .addOptions([
                            {
                                label: ' ┆ -13',
                                description: 'Menor de 13 años o 13 años',
                                emoji: "🐣",
                                value: "tokio_roles_13",
                            },
                            {
                                label: ' ┆ 14-17',
                                description: 'Entre 14 y 17 años',
                                emoji: "🐥",
                                value: "tokio_roles_14",
                            },
                            {
                                label: ' ┆ +18',
                                description: '18 años o más',
                                emoji: "🐤",
                                value: "tokio_rolex_18",
                            }
                        ])
                );

            interaction.reply({embeds: [embed], components: [roles], ephemeral: true})
        }
        
        if (interaction.customId === 'tokio_auto_genero') {
            const embed = new Discord.EmbedBuilder()
                .setTitle('> AutoRoles Género')
                .setColor("#800080")
                .setTimestamp()
                .setImage('https://media.discordapp.net/attachments/1120353006764965989/1129963920254312478/standard_31.gif')
                .setDescription('Estos son los roles para asignar tu género en el servidor')

                const roles = new Discord.ActionRowBuilder()
                .addComponents(
                    new Discord.StringSelectMenuBuilder()
                        .setCustomId('tokio_roles_genero')
                        .setPlaceholder('❌ ┆ Nada Seleccionado')
                        .addOptions([
                            {
                                label: ' ┆ Masculino',
                                emoji: "♂️",
                                value: "tokio_roles_he",
                            },
                            {
                                label: ' ┆ Femenino',
                                emoji: "♀️",
                                value: "tokio_roles_she",
                            },
                            {
                                label: ' ┆ Otro',
                                emoji: "🌈",
                                value: "tokio_rolex_it",
                            }
                        ])
                );

            interaction.reply({embeds: [embed], components: [roles], ephemeral: true})
        }

        if (interaction.customId === 'tokio_auto_DM') {
            const embed = new Discord.EmbedBuilder()
                .setTitle('> AutoRoles Estado DM')
                .setColor("#800080")
                .setTimestamp()
                .setImage('https://media.discordapp.net/attachments/1120353006764965989/1129963919851663480/standard_32.gif')
                .setDescription('Estos son los roles para asignar tu estado de los mensajes privados.\n\nEsto permitirá saber a los miembros del servidor si pueden hablarte al privado, si deben preguntarte antes de hablarte, o si no puede hablarte al DM')

                const roles = new Discord.ActionRowBuilder()
                .addComponents(
                    new Discord.StringSelectMenuBuilder()
                        .setCustomId('tokio_roles_DM')
                        .setPlaceholder('❌ ┆ Nada Seleccionado')
                        .addOptions([
                            {
                                label: ' ┆ DM Abierto',
                                emoji: "🔓",
                                value: "tokio_roles_abierto",
                            },
                            {
                                label: ' ┆ DM Cerrado',
                                emoji: "🔒",
                                value: "tokio_roles_cerrado",
                            },
                            {
                                label: ' ┆ Preguntar Antes',
                                emoji: "🔐",
                                value: "tokio_rolex_preguntar",
                            }
                        ])
                );
        
            interaction.reply({embeds: [embed], components: [roles], ephemeral: true})
        }

        if (interaction.customId === 'tokio_auto_color') {
            const embed = new Discord.EmbedBuilder()
                .setTitle('> AutoRoles Colores')
                .setColor("#800080")
                .setTimestamp()
                .setImage('https://media.discordapp.net/attachments/1120353006764965989/1129963920988319774/standard_29.gif')
                .setDescription('# Estamos creandolo aun\n\nEstos son los roles para asignar tu Color de nombre en el Servidor')

                const roles = new Discord.ActionRowBuilder()
                .addComponents(
                    new Discord.StringSelectMenuBuilder()
                        .setCustomId('tokio_roles_color')
                        .setPlaceholder('❌ ┆ Nada Seleccionado')
                        .addOptions([
                            {
                                label: ' ┆ Rojo',
                                emoji: "🔴",
                                value: "tokio_roles_rojo",
                            },
                            {
                                label: ' ┆ Naranja',
                                emoji: "🟠",
                                value: "tokio_rolex_naranja",
                            },
                            {
                                label: ' ┆ Amarillo',
                                emoji: "🟡",
                                value: "tokio_rolex_amarillo",
                            },
                            {
                                label: ' ┆ Verde',
                                emoji: "🟢",
                                value: "tokio_roles_verde",
                            },
                            {
                                label: ' ┆ Azul',
                                emoji: "🔵",
                                value: "tokio_rolex_azul",
                            },
                            {
                                label: ' ┆ Morado',
                                emoji: "🟣",
                                value: "tokio_rolex_morado",
                            },
                            {
                                label: ' ┆ Marrón',
                                emoji: "🟤",
                                value: "tokio_rolex_marron",
                            },
                            {
                                label: ' ┆ Negro',
                                emoji: "⚫",
                                value: "tokio_rolex_negro",
                            },
                            {
                                label: ' ┆ Blanco',
                                emoji: "⚪",
                                value: "tokio_rolex_blanco",
                            },
                        ])
                );
        
            interaction.reply({embeds: [embed], components: [roles], ephemeral: true})
        }

        if (interaction.customId === 'tokio_redes') {
            const embed = new Discord.EmbedBuilder()
            .setTitle('> Redes Sociales')
            .setColor("#800080")
            .setDescription(`𝙍𝙚𝙙𝙚𝙨 𝙨𝙤𝙘𝙞𝙖𝙡𝙚𝙨 𝙙𝙚 𝙡𝙖 𝙘𝙤𝙢𝙪𝙣𝙞𝙙𝙖𝙙: \n\n𝙏𝙬𝙞𝙩𝙩𝙚𝙧: https://twitter.com/TokioHotelCMMTY\n\n𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢: https://www.instagram.com/tokiohotelfam/\n\n𝙍𝙚𝙙𝙙𝙞𝙩: https://www.reddit.com/user/TokioHotelFam`)
            .setTimestamp()

            interaction.reply({embeds: [embed], ephemeral: true})
        }
    })
}