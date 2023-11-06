const Discord = require('discord.js');
const generator = require('generate-password');
const Schema = require('../../database/models/functions')

module.exports = (client, err, command, interaction) => {
    const settings = Schema.findOne({ Guild: interaction.guild.id });
	const getMessage = global.i18n.getLocale(settings.Locale);
    console.log(err);
    const password = generator.generate({
        length: 10,
        numbers: true
    });
 
    const errorlog = new Discord.WebhookClient({
        id: client.webhooks.errorLogs.id,
        token: client.webhooks.errorLogs.token,
    });

    let embed = new Discord.EmbedBuilder()
        .setTitle(`🚨・${password}`)
        .addFields(
            { name: "✅┇Servidor", value: `${interaction.guild.name} (${interaction.guild.id})`},
            { name: `💻┇Comando`, value: `${command}`},
            { name: `Codigo de error`, value: password},
            { name: `💬┇Error`, value: `\`\`\`${err}\`\`\``},
            { name: `📃┇Nombre del Error`, value: `\`\`\`${err.stack.substr(0, 1018)}\`\`\``},
        )
        .setColor(client.config.colors.normal)
    errorlog.send({
        username: `OmenBot Errors`,
        embeds: [embed],

    }).catch(error => { console.log(error) })

    let row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.ButtonBuilder()
                .setLabel("Servidor de Soporte")
                .setURL(client.config.discord.serverInvite)
                .setStyle(Discord.ButtonStyle.Link),
        );

    client.embed({
        title: `${client.emotes.normal.error}・Error`,
        desc: getMessage(`message.error.embed.des`),
        image: "https://cdn.discordapp.com/attachments/1112743789782638602/1129160485070188584/standard_20.gif",
        color: client.config.colors.error,
        fields: [
            {
                name: getMessage(`message.error.embed.fields.f1.name`),
                value: `\`${password}\``,
                inline: true,
            },
            {
                name: getMessage(`message.error.embed.fields.f2.name`),
                value: getMessage(`message.error.embed.fields.f2.value`),
                inline: true,
            }
        ],
        components: [row],
        type: 'editreply'
    }, interaction).catch(() => {
        client.embed({
            title: `${client.emotes.normal.error}・Error`,
            desc: getMessage(`message.error.embed.des`),
            image: "https://cdn.discordapp.com/attachments/1112743789782638602/1129160485070188584/standard_20.gif",
            color: client.config.colors.error,
            fields: [
                {
                    name: getMessage(`message.error.embed.fields.f1.name`),
                    value: `\`${password}\``,
                    inline: true,
                },{
                    name: getMessage(`message.error.embed.fields.f2.name`),
                    value: getMessage(`message.error.embed.fields.f2.value`),
                    inline: true,
                }
            ],
            components: [row],
            type: 'editreply'
        }, interaction)
    })
};