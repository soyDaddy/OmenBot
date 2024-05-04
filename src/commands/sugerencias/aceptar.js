const Discord = require('discord.js');

const Schema = require("../../database/models/sugerenciasChannels");

module.exports = async (client, interaction, args) => {
    const perms = await client.checkUserPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageMessages],
        perms: [Discord.PermissionsBitField.Flags.ManageMessages]
    }, interaction)

    if (perms == false) return;

    const messageID = interaction.options.getString('id');

    const data = await Schema.findOne({ Guild: interaction.guild.id });
    if (data) {
        const suggestionchannel = interaction.guild.channels.cache.get(data.Channel);
        const suggestEmbed = await suggestionchannel.messages.fetch(messageID);
        const embedData = suggestEmbed.embeds[0];

        client.embed({
            title: `${client.emotes.normal.check}・Sugerencia aceptada`,
            desc: `\`\`\`${embedData.description}\`\`\``,
            color: client.config.colors.succes,
            author: {
                name: embedData.author.name,
                iconURL: embedData.author.iconURL
            },
            type: 'edit'
        }, suggestEmbed)

        try {
            const user = await client.users.cache.find((u) => u.tag === embedData.author.name);

            if (user) {
                client.embed({
                    title: `${client.emotes.normal.check}・Sugerencia aceptada`,
                    desc: `Tu sugerencia enviada en ${interaction.guild.name} a sido aceptada por un moderador!`,
                    fields: [
                        {
                            name: `💬┆Sugerencia`,
                            value: `${embedData.description}`
                        }
                    ],
                }, user).catch({})
            }
        }
        catch { }

        client.succNormal({
            text: "Sugerencia aprobada correctamente",
            fields: [
                {
                    name: `💬┆Sugerencia`,
                    value: `${embedData.description}`
                }
            ],
            type: 'editreply'
        }, interaction);
    }
    else {
        client.errNormal({
            error: `No suggestion channel set! Please do the setup`,
            type: 'editreply'
        }, interaction);
    }
}

 