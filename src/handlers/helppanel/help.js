const { ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder, ComponentType, ButtonStyle, ButtonBuilder } = require('discord.js');
const axios = require('axios');
const Schema = require('../../database/models/functions')
module.exports = (client) => {
    client.on('interactionCreate', async interaction => {  
        const settings = await Schema.findOne({ Guild: interaction.guild.id });
        const getMessage = global.i18n.getLocale(settings.Locale || "en-US");
        const randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
        const helprow2 = new ActionRowBuilder()
            .addComponents(
                new StringSelectMenuBuilder()
                .setMinValues(1)
                .setMaxValues(1)
                .setCustomId('selecthelpTest')
                .setPlaceholder(getMessage(`help.menu.options.select`))
                .addOptions(
                    {
                        label: getMessage(`help.menu.options.helpCenter.label`),
                        description: getMessage(`help.menu.options.helpCenter.description`),
                        value: 'helpcenterTest',
                    },
                    {
                        label: getMessage(`help.menu.options.api.label`),
                        description: getMessage(`help.menu.options.api.description`),
                        value: 'apiTest',
                    },
                    {
                        label: getMessage(`help.menu.options.commands.label`),
                        description: getMessage(`help.menu.options.commands.description`),
                        value: 'commandsTest',
                    },
                ),
            );
     
        if (interaction.customId === 'selecthelpTest') {
            let choices = "";
     
            const centerembed = new EmbedBuilder()
                .setColor('#'+randomColor)
                .setTimestamp()
                .setTitle(getMessage(`help.menu.options.helpCenter.embed.title`))
                .setFooter({ text: getMessage(`help.menu.options.helpCenter.embed.footer`) })
                .addFields({ name: getMessage(`help.menu.options.helpCenter.embed.fields.f1.name`), value: getMessage(`help.menu.options.helpCenter.embed.fields.f1.value`) })
                .addFields({ name: getMessage(`help.menu.options.helpCenter.embed.fields.f2.name`), value: getMessage(`help.menu.options.helpCenter.embed.fields.f2.value`) })
                .addFields({ name: getMessage(`help.menu.options.helpCenter.embed.fields.f3.name`), value: getMessage(`help.menu.options.helpCenter.embed.fields.f3.value`) })
                .setImage(getMessage(`banner`));
     
            interaction.values.forEach(async (value) => {
                choices += `${value}`;
     
                if (value === 'helpcenterTest') {
     
                    await interaction.update({ embeds: [centerembed], components: [helprow2] });
                }
     
                if (value === 'apiTest') {
     
                    const apiembed = new EmbedBuilder()
                        .setColor('#'+randomColor)
                        .setTimestamp()
                        .setTitle(getMessage(`help.menu.options.api.embed.title`))
                        .setFooter({ text: getMessage(`help.menu.options.api.embed.footer`)})
                        .addFields({ name: getMessage(`help.menu.options.api.embed.fields.f1.name`), value: getMessage(`help.menu.options.api.embed.fields.f1.value`) })
                        .setImage(getMessage(`banner`));
     
                        try {
                            const { timeTaken, data } = await measureApiResponseTime('https://api.omenlist.xyz/');
                            const response = await fetch('https://api.omenlist.xyz/uptime');
                            const uptime = await response.json();
                            apiembed.addFields({ name: getMessage(`help.menu.options.api.embed.fields.f2.name`), value: getMessage(`help.menu.options.api.embed.fields.f2.value`, { ping: timeTaken, uptime: uptime.uptime }) });
                        } catch (error) {
                            apiembed.addFields({ name: getMessage(`help.menu.options.api.embed.fields.f2.name`), value: getMessage(`help.menu.options.api.embed.fields.f2.valueError`)});
                        }

                    await interaction.update({ embeds: [apiembed], components: [helprow2] });
                }
     
                if (value === 'commandsTest') {
                    const fields = [
                        {
                            name: getMessage(`message.command.commands.fields.f1.name`),
                            value: getMessage(`message.command.commands.fields.f1.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f2.name`),
                            value: getMessage(`message.command.commands.fields.f2.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f3.name`),
                            value: getMessage(`message.command.commands.fields.f3.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f4.name`),
                            value: getMessage(`message.command.commands.fields.f4.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f5.name`),
                            value: getMessage(`message.command.commands.fields.f5.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f6.name`),
                            value: getMessage(`message.command.commands.fields.f6.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f7.name`),
                            value: getMessage(`message.command.commands.fields.f7.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f8.name`),
                            value: getMessage(`message.command.commands.fields.f8.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f9.name`),
                            value: getMessage(`message.command.commands.fields.f9.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f10.name`),
                            value: getMessage(`message.command.commands.fields.f10.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f12.name`),
                            value: getMessage(`message.command.commands.fields.f12.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f13.name`),
                            value: getMessage(`message.command.commands.fields.f13.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f14.name`),
                            value: getMessage(`message.command.commands.fields.f14.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f15.name`),
                            value: getMessage(`message.command.commands.fields.f15.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f16.name`),
                            value: getMessage(`message.command.commands.fields.f16.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f17.name`),
                            value: getMessage(`message.command.commands.fields.f17.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f18.name`),
                            value: getMessage(`message.command.commands.fields.f18.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f19.name`),
                            value: getMessage(`message.command.commands.fields.f19.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f20.name`),
                            value: getMessage(`message.command.commands.fields.f20.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f21.name`),
                            value: getMessage(`message.command.commands.fields.f21.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f22.name`),
                            value: getMessage(`message.command.commands.fields.f22.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f24.name`),
                            value: getMessage(`message.command.commands.fields.f24.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f25.name`),
                            value: getMessage(`message.command.commands.fields.f25.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f27.name`),
                            value: getMessage(`message.command.commands.fields.f27.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f28.name`),
                            value: getMessage(`message.command.commands.fields.f28.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f29.name`),
                            value: getMessage(`message.command.commands.fields.f29.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f30.name`),
                            value: getMessage(`message.command.commands.fields.f30.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f31.name`),
                            value: getMessage(`message.command.commands.fields.f31.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f32.name`),
                            value: getMessage(`message.command.commands.fields.f32.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f33.name`),
                            value: getMessage(`message.command.commands.fields.f33.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f34.name`),
                            value: getMessage(`message.command.commands.fields.f34.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f35.name`),
                            value: getMessage(`message.command.commands.fields.f35.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f36.name`),
                            value: getMessage(`message.command.commands.fields.f36.value`),
                            inline: true
                        },{
                            name: getMessage(`message.command.commands.fields.f37.name`),
                            value: getMessage(`message.command.commands.fields.f37.value`),
                            inline: true
                        }
                    ];
                    let page = 1;
                    const row = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId('helpcenterbutton')
                                .setLabel('Help Center')
                                .setStyle(ButtonStyle.Success),
                                            
                            new ButtonBuilder()
                                .setCustomId('helpPrev')
                                .setEmoji('⬅️')
                                .setStyle(ButtonStyle.Secondary)
                                .setDisabled(true),
    
                            new ButtonBuilder()
                                .setCustomId('helpNext')
                                .setEmoji('➡️')
                                .setStyle(ButtonStyle.Success),
                        );
                    const row2 = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setLabel(getMessage(`message.command.commands.buttons.b1`))
                                .setURL(client.config.discord.botInvite)
                                .setStyle(ButtonStyle.Link),
    
                            new ButtonBuilder()
                                .setLabel(getMessage(`message.command.commands.buttons.b2`))
                                .setURL(client.config.discord.serverInvite)
                                .setStyle(ButtonStyle.Link),
                        );
    
                        const embed = new EmbedBuilder()
                        .setTitle(getMessage(`message.command.help.embed.title`))
                        .setDescription(getMessage(`message.command.help.embed.description2`))
                        .setImage(getMessage(`banner`))
                        .addFields(fields.slice(0, 24))
                        .setColor('#'+randomColor)
    
                        interaction.update({embeds: [embed], components: [helprow2, row, row2]}).then(msg => {
                        const filter = i => i.user.id === interaction.user.id;
    
                        const collector = interaction.channel.createMessageComponentCollector({ filter, time: 100000 });
    
                        collector.on('collect', async i => {
                            if (i.customId === 'helpcenterbutton') {
                                await i.update({ embeds: [centerembed], components: [helprow2] });
                            }
                            if (i.customId == "helpNext") {
                                const buttons = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId('helpcenterbutton')
                                .setLabel('Help Center')
                                .setStyle(ButtonStyle.Success),
                                            
                            new ButtonBuilder()
                                .setCustomId('helpPrev')
                                .setEmoji('⬅️')
                                .setStyle(ButtonStyle.Success),
    
                            new ButtonBuilder()
                                .setCustomId('helpNext')
                                .setEmoji('➡️')
                                .setDisabled(true)
                                .setStyle(ButtonStyle.Secondary),
                        );
                        const row2 = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setLabel(getMessage(`message.command.commands.buttons.b1`))
                                .setURL(client.config.discord.botInvite)
                                .setStyle(ButtonStyle.Link),
    
                            new ButtonBuilder()
                                .setLabel(getMessage(`message.command.commands.buttons.b2`))
                                .setURL(client.config.discord.serverInvite)
                                .setStyle(ButtonStyle.Link),
                        );
                                if (page == 1) {
                                    const embed = new EmbedBuilder()
                                    .setTitle(getMessage(`message.command.help.embed.title`))
                                    .setDescription(getMessage(`message.command.help.embed.description2`))
                                    .setImage(getMessage(`banner`))
                                    .addFields(fields.slice(25, 49))
                                    .setColor('#'+randomColor)
    
                                    i.update({embeds: [embed], components: [helprow2, buttons, row2]})
                                    page += 1;
                                }
                            }
    
                            else if (i.customId == "helpPrev") {
                                if (page == 2) {
                                    const buttons = new ActionRowBuilder()
                                    .addComponents(
                                        new ButtonBuilder()
                                            .setCustomId('helpcenterbutton')
                                            .setLabel('Help Center')
                                            .setStyle(ButtonStyle.Success),

                                        new ButtonBuilder()
                                            .setCustomId('helpPrev')
                                            .setEmoji('⬅️')
                                            .setDisabled(true)
                                            .setStyle(ButtonStyle.Secondary),
                
                                        new ButtonBuilder()
                                            .setCustomId('helpNext')
                                            .setEmoji('➡️')
                                            .setStyle(ButtonStyle.Secondary),
                                    );
                                    const row2 = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setLabel(getMessage(`message.command.commands.buttons.b1`))
                                .setURL(client.config.discord.botInvite)
                                .setStyle(ButtonStyle.Link),
    
                            new ButtonBuilder()
                                .setLabel(getMessage(`message.command.commands.buttons.b2`))
                                .setURL(client.config.discord.serverInvite)
                                .setStyle(ButtonStyle.Link),
                        );
                                    const embed = new EmbedBuilder()
                                    .setTitle(getMessage(`message.command.help.embed.title`))
                                    .setDescription(getMessage(`message.command.help.embed.description2`))
                                    .setImage(getMessage(`banner`))
                                    .addFields(fields.slice(0, 24))
                                    .setColor('#'+randomColor)
    
                                    i.update({embeds: [embed], components: [helprow2, buttons, row2]})
                                    page -= 1;
                                }
                            }
                        });
                    })
                }
            })
        }
    })
}
async function measureApiResponseTime(url) {
    const startTime = Date.now();
    const response = await axios.get(url);
    const endTime = Date.now(); 
    const timeTaken = endTime - startTime;
    return {
        timeTaken,
        data: response.data
    };
}

function formatSeconds(seconds) {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const formattedTime = `${days}d ${hours}h ${minutes}m`;
    return formattedTime;
}
