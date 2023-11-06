const Discord = require('discord.js');
const Schema = require("../../database/models/verify");
const Locales = require('../../database/models/functions')

module.exports = async (client, interaction, args) => {
    const perms = await client.checkUserPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageMessages],
        perms: [Discord.PermissionsBitField.Flags.ManageMessages]
    }, interaction)

    if (perms == false) return;
    const settings = await Locales.findOne({ Guild: interaction.guild.id });
    const getMessage = global.i18n.getLocale(settings.Locale);
    const boolean = interaction.options.getBoolean('enable');
    const channel = interaction.options.getChannel('channel');
    const role = interaction.options.getRole('role');
    const image = interaction.options.getString('image') || 'https://media.discordapp.net/attachments/1120353006764965989/1129963967075319848/standard_26.gif';


    if (boolean == true) {
        const data = await Schema.findOne({ Guild: interaction.guild.id });
        if (data) {
            data.Channel = channel.id;
            data.Role = role.id
            data.save();
        }
        else {
            new Schema({
                Guild: interaction.guild.id,
                Channel: channel.id,
                Role: role.id
            }).save();
        }
 
        client.succNormal({
            text: `Verify panel has been successfully created`,
            fields: [
                {
                    name: `📘┆Channel`,
                    value: `${channel} (${channel.name})`,
                    inline: true
                },
                {
                    name: `📛┆Role`,
                    value: `${role} (${role.name})`,
                    inline: true
                }
            ],
            type: 'editreply'
        }, interaction);

        const row = new Discord.ActionRowBuilder()
            .addComponents(
                new Discord.ButtonBuilder()
                    .setCustomId('Bot_verify')
                    .setEmoji('✅')
                    .setStyle(Discord.ButtonStyle.Success),
            );

        client.embed({
            title: `${interaction.guild.name}`+getMessage(`message.command.setverify.embed.title`),
            desc: getMessage(`message.command.setverify.embed.desc`),
            image: image,
            color: '#800080',
            components: [row]
        }, channel)
    }
}

 