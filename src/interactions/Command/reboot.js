const { SlashCommandBuilder } = require('discord.js');
const fs = require("node:fs");
const model = require('../../database/models/badge');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reboot')
        .setDescription('Reiniciar el bot'),

    run: async (client, interaction, args) => {
        model.findOne({ User: interaction.user.id }, async (err, data) => {
            if (data && data.FLAGS.includes("DEVELOPER")) {
                await interaction.deferReply({ fetchReply: true });
                const msg = await client.embed({
                    title: `・REINICIAR`,
                    desc: "Se está reiniciando el bot...",
                    image: `https://media.discordapp.net/attachments/1120353006764965989/1133859700555927572/standard_6.gif`,
                    color: "Red",
                    type: `editreply`
                }, interaction);
                
                client.destroy();
                fs.writeFileSync("./restart.json", JSON.stringify([msg.channel.id, msg.id]), "utf8");
                process.exit();
            } else {
                return client.errNormal({
                    error: 'Solo los propietarios del Bot pueden Reiniciarlo',
                    type: 'ephemeral'
                }, interaction)
            }
        })
    }
}