const Discord = require('discord.js');
const Schema = require('../../database/models/functions')
module.exports = async (client) => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();

client.on(Discord.Events.InteractionCreate, async (interaction) => {
    
        if (!interaction.isStringSelectMenu()) return;

        if (interaction.customId == "Help-menu") {
            if (interaction.values == "commands-Bothelp") {
                const settings = await Schema.findOne({ Guild: interaction.guild.id });
                const getMessage = global.i18n.getLocale(settings.Locale);
                
    const fields = [
        {
            name: getMessage(`message.command.commands.fields.f1.name`),
            value: getMessage(`message.command.commands.fields.f1.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f2.name`),
            value: getMessage(`message.command.commands.fields.f2.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f3.name`),
            value: getMessage(`message.command.commands.fields.f3.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f4.name`),
            value: getMessage(`message.command.commands.fields.f4.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f5.name`),
            value: getMessage(`message.command.commands.fields.f5.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f6.name`),
            value: getMessage(`message.command.commands.fields.f6.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f7.name`),
            value: getMessage(`message.command.commands.fields.f7.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f8.name`),
            value: getMessage(`message.command.commands.fields.f8.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f9.name`),
            value: getMessage(`message.command.commands.fields.f9.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f10.name`),
            value: getMessage(`message.command.commands.fields.f10.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f12.name`),
            value: getMessage(`message.command.commands.fields.f12.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f13.name`),
            value: getMessage(`message.command.commands.fields.f13.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f14.name`),
            value: getMessage(`message.command.commands.fields.f14.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f15.name`),
            value: getMessage(`message.command.commands.fields.f15.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f16.name`),
            value: getMessage(`message.command.commands.fields.f16.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f17.name`),
            value: getMessage(`message.command.commands.fields.f17.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f18.name`),
            value: getMessage(`message.command.commands.fields.f18.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f19.name`),
            value: getMessage(`message.command.commands.fields.f19.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f20.name`),
            value: getMessage(`message.command.commands.fields.f20.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f21.name`),
            value: getMessage(`message.command.commands.fields.f21.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f22.name`),
            value: getMessage(`message.command.commands.fields.f22.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f24.name`),
            value: getMessage(`message.command.commands.fields.f24.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f25.name`),
            value: getMessage(`message.command.commands.fields.f25.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f27.name`),
            value: getMessage(`message.command.commands.fields.f27.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f28.name`),
            value: getMessage(`message.command.commands.fields.f28.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f29.name`),
            value: getMessage(`message.command.commands.fields.f29.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f30.name`),
            value: getMessage(`message.command.commands.fields.f30.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f31.name`),
            value: getMessage(`message.command.commands.fields.f31.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f32.name`),
            value: getMessage(`message.command.commands.fields.f32.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f33.name`),
            value: getMessage(`message.command.commands.fields.f33.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f34.name`),
            value: getMessage(`message.command.commands.fields.f34.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f35.name`),
            value: getMessage(`message.command.commands.fields.f35.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f36.name`),
            value: getMessage(`message.command.commands.fields.f36.value`),
            inline: true
        },
        {
            name: getMessage(`message.command.commands.fields.f37.name`),
            value: getMessage(`message.command.commands.fields.f37.value`),
            inline: true
        }
    ];
                let page = 1;
                const row = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.ButtonBuilder()
                            .setCustomId('helpPrev')
                            .setEmoji('⬅️')
                            .setStyle(Discord.ButtonStyle.Secondary)
                            .setDisabled(true),

                        new Discord.ButtonBuilder()
                            .setCustomId('helpNext')
                            .setEmoji('➡️')
                            .setStyle(Discord.ButtonStyle.Secondary),

                        new Discord.ButtonBuilder()
                            .setLabel(getMessage(`message.command.commands.buttons.b1`))
                            .setURL(client.config.discord.botInvite)
                            .setStyle(Discord.ButtonStyle.Link),

                        new Discord.ButtonBuilder()
                            .setLabel(getMessage(`message.command.commands.buttons.b2`))
                            .setURL(client.config.discord.serverInvite)
                            .setStyle(Discord.ButtonStyle.Link),
                    );

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

                    const embed = new Discord.EmbedBuilder()
                    .setTitle(getMessage(`message.command.help.embed.title`))
                    .setDescription(getMessage(`message.command.help.embed.description2`))
                    .setImage("https://media.discordapp.net/attachments/1112453766294290653/1128539761414516747/standard_19.gif")
                    .addFields(fields.slice(0, 24))
                    .setColor('#'+randomColor)

                    interaction.update({embeds: [embed], components: [row2, row]}).then(msg => {
                    const filter = i => i.user.id === interaction.user.id;

                    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 100000 });

                    collector.on('collect', async i => {
                        if (i.customId == "helpNext") {
                            const buttons = new Discord.ActionRowBuilder()
                    .addComponents(
                        new Discord.ButtonBuilder()
                            .setCustomId('helpPrev')
                            .setEmoji('⬅️')
                            .setStyle(Discord.ButtonStyle.Secondary),

                        new Discord.ButtonBuilder()
                            .setCustomId('helpNext')
                            .setEmoji('➡️')
                            .setDisabled(true)
                            .setStyle(Discord.ButtonStyle.Secondary),

                        new Discord.ButtonBuilder()
                            .setLabel(getMessage(`message.command.commands.buttons.b1`))
                            .setURL(client.config.discord.botInvite)
                            .setStyle(Discord.ButtonStyle.Link),

                        new Discord.ButtonBuilder()
                            .setLabel(getMessage(`message.command.commands.buttons.b2`))
                            .setURL(client.config.discord.serverInvite)
                            .setStyle(Discord.ButtonStyle.Link),
                    );
                            if (page == 1) {
                                const embed = new Discord.EmbedBuilder()
                                .setTitle(getMessage(`message.command.help.embed.title`))
                                .setDescription(getMessage(`message.command.help.embed.description2`))
                                .setImage("https://media.discordapp.net/attachments/1112453766294290653/1128539761414516747/standard_19.gif")
                                .addFields(fields.slice(25, 49))
                                .setColor('#'+randomColor)

                                i.update({embeds: [embed], components: [row2, buttons]})
                                page += 1;
                            }
                        }

                        else if (i.customId == "helpPrev") {
                            if (page == 2) {
                                const buttons = new Discord.ActionRowBuilder()
                                .addComponents(
                                    new Discord.ButtonBuilder()
                                        .setCustomId('helpPrev')
                                        .setEmoji('⬅️')
                                        .setDisabled(true)
                                        .setStyle(Discord.ButtonStyle.Secondary),
            
                                    new Discord.ButtonBuilder()
                                        .setCustomId('helpNext')
                                        .setEmoji('➡️')
                                        .setStyle(Discord.ButtonStyle.Secondary),
            
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
                                .setTitle(getMessage(`message.command.help.embed.title`))
                                .setDescription(getMessage(`message.command.help.embed.description2`))
                                .setImage("https://media.discordapp.net/attachments/1112453766294290653/1128539761414516747/standard_19.gif")
                                .addFields(fields.slice(0, 24))
                                .setColor('#'+randomColor)

                                i.update({embeds: [embed], components: [row2, buttons]})
                                page -= 1;
                            }
                        }
                    });
                })
            }
        }
    }).setMaxListeners(0);
}

 