const Discord = require('discord.js');
const Schema = require('../../database/models/functions')
module.exports = async (client) => {
const randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();

client.on(Discord.Events.InteractionCreate, async (interaction) => {
    if (!interaction.isStringSelectMenu()) return;
    
    if (interaction.customId == "Help-menu") {
        if (interaction.values == "changelogs-help") {
            const settings = await Schema.findOne({ Guild: interaction.guild.id });
            const getMessage = global.i18n.getLocale(settings.Locale);

                const row2 = new Discord.ActionRowBuilder()
                    .addComponents( 
                        new Discord.StringSelectMenuBuilder()
                            .setCustomId('Help-menu')
                            .setPlaceholder(getMessage(`message.command.help.menu.placeholder`))
                            .addOptions([
                                {
                                    label: getMessage(`message.command.help.menu.options.commands.label`),
                                    description: getMessage(`message.command.help.menu.options.commands.description`),
                                    emoji: "💻",
                                    value: "commands-Bothelp",
                                },
                                {
                                    label: getMessage(`message.command.help.menu.options.invite.label`),
                                    description: getMessage(`message.command.help.menu.options.invite.description`),
                                    emoji: "📨",
                                    value: "invite-Bothelp",
                                },
                                {
                                    label: getMessage(`message.command.help.menu.options.support.label`),
                                    description: getMessage(`message.command.help.menu.options.support.description`),
                                    emoji: "❓",
                                    value: "support-Bothelp",
                                },
                                {
                                    label: getMessage(`message.command.help.menu.options.changelog.label`),
                                    description: getMessage(`message.command.help.menu.options.changelog.description`),
                                    emoji: "📃",
                                    value: "changelogs-help",
                                },
                            ]),
                    );

                const row = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.ButtonBuilder()
                            .setLabel(getMessage(`message.command.commands.buttons.b1`))
                            .setURL(client.config.discord.botInvite)
                            .setStyle(Discord.ButtonStyle.Link),

                        new Discord.ButtonBuilder()
                            .setLabel(getMessage(`message.command.commands.buttons.b2`))
                            .setURL(client.config.discord.serverInvite)
                            .setStyle(Discord.ButtonStyle.Link),
                    );

                const embed = new Discord.EmbedBuilder()
                        .setTitle(getMessage(`message.command.changelog.embed.title`))
                        .setDescription(getMessage(`message.command.changelog.embed.desc`))
                        .setThumbnail(client.user.avatarURL({ size: 1024 }))
                        .setColor('#'+randomColor)
                        .addFields({
                            name: getMessage(`message.command.changelog.embed.fields.f1.name`),
                            value: getMessage(`message.command.changelog.embed.fields.f1.value`),
                            inline: false,
                        },
                        {
                            name: getMessage(`message.command.changelog.embed.fields.f2.name`),
                            value: getMessage(`message.command.changelog.embed.fields.f2.value`),
                            inline: false,
                        })
                
                interaction.update({embeds: [embed], components: [row2, row]})
            }
        }
    }).setMaxListeners(0);
}

 