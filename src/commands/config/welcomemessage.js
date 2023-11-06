const Discord = require('discord.js');

const inviteMessages = require("../../database/models/inviteMessages");

module.exports = async (client, interaction, args) => {
    const perms = await client.checkUserPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageMessages],
        perms: [Discord.PermissionsBitField.Flags.ManageMessages]
    }, interaction)

    if (perms == false) return;

    const message = interaction.options.getString('message');
    const image = interaction.options.getString('image') || 'https://c4.wallpaperflare.com/wallpaper/465/1015/587/anime-darling-in-the-franxx-zero-two-darling-in-the-franxx-hd-wallpaper-preview.jpg'

    if (message.toUpperCase() == "HELP") {
        return client.embed({
            title: `ℹ️・Welcome message options`,
            desc: `Join message options: \n
            \`{user:username}\` - User's username
            \`{user:discriminator}\` - User's discriminator
            \`{user:tag}\` - User's tag
            \`{user:mention}\` - Mention a user

            \`{inviter:username}\` - inviter's username
            \`{inviter:discriminator}\` - inviter's discriminator
            \`{inviter:tag}\` - inviter's tag
            \`{inviter:mention}\` - inviter's mention
            \`{inviter:invites}\` - inviter's invites
            \`{inviter:invites:left}\` - inviter's left invites
                    
            \`{guild:name}\` - Server name
            \`{guild:members}\` - Server members count`,
            type: 'editreply'
        }, interaction)
    }

    if (message.toUpperCase() == "DEFAULT") {
        inviteMessages.findOne({ Guild: interaction.guild.id }, async (err, data) => {
            if (data) {
                data.inviteJoin = null;
                data.inviteImage = image;
                data.save();

                client.succNormal({
                    text: `Welcome message deleted!`,
                    type: 'editreply'
                }, interaction);
            }
        })
    }
    else {
        inviteMessages.findOne({ Guild: interaction.guild.id }, async (err, data) => {
            if (data) {
                data.inviteJoin = message;
                data.inviteImage = image;
                data.save();
            }
            else {
                new inviteMessages({
                    Guild: interaction.guild.id,
                    inviteJoin: message,
                    inviteImage: image
                }).save();
            }

            client.succNormal({
                text: `The welcome message has been set successfully`,
                fields: [
                    {
                        name: `💬┆Message`,
                        value: `${message}`,
                        inline: true
                    },
                ],
                image: image,
                type: 'editreply'
            }, interaction)
        })
    }
}

 