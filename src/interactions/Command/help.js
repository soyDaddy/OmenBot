const { SlashCommandBuilder, StringSelectMenuBuilder, EmbedBuilder, ActionRowBuilder } = require('discord.js');
const Schema = require('../../database/models/functions')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription(global.i18n.getMessage(null, `commands.slash.help.description`))
        .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.help.name`))
        .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.help.description`))
        ,
        run: async (client, interaction, args) => {
            const settings = await Schema.findOne({ Guild: interaction.guild.id });
            const getMessage = global.i18n.getLocale(settings.Locale || 'en-US');
            const randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase(); 
            const helprow1 = new ActionRowBuilder()
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
     
            const centerembed = new EmbedBuilder()
                .setColor('#'+randomColor)
                .setTimestamp()
                .setTitle(getMessage(`help.menu.options.helpCenter.embed.title`))
                .setFooter({ text: getMessage(`help.menu.options.helpCenter.embed.footer`) })
                .addFields({ name: getMessage(`help.menu.options.helpCenter.embed.fields.f1.name`), value: getMessage(`help.menu.options.helpCenter.embed.fields.f1.value`) })
                .addFields({ name: getMessage(`help.menu.options.helpCenter.embed.fields.f2.name`), value: getMessage(`help.menu.options.helpCenter.embed.fields.f2.value`) })
                .addFields({ name: getMessage(`help.menu.options.helpCenter.embed.fields.f3.name`), value: getMessage(`help.menu.options.helpCenter.embed.fields.f3.value`) })
                .setImage(getMessage(`banner`));
     
            await interaction.reply({ embeds: [centerembed], components: [helprow1] });
        }
    }
    