const Discord = require('discord.js')
const Schema = require('../../database/models/functions');

module.exports = async (client, interaction, guild) => {
const randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
const idiomas = new Discord.ActionRowBuilder().addComponents(
    new Discord.StringSelectMenuBuilder()
      .setCustomId("idioma")
      .setPlaceholder("Select your Language")
      .addOptions([
        {
          emoji: "🇪🇸",
          label: "Spanish",
          value: "es-ES",
        },
        {
          emoji: "🇺🇸",
          label: "English",
          value: "en-US",
        },
        {
          emoji: "🇩🇪",
          label: "Deutsch",
          value: "de",
        },
        {
          emoji: "🇷🇺",
          label: "Russian (Not Trnslated)",
          value: "ru",
        }]));
        const embed = new Discord.EmbedBuilder()
        .setTitle('Language System')
        .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ size: 1024 }) })
        .setColor('#'+randomColor)
        .setDescription(`You can configure your Language on your guild to undertand all the commands and everything ♥`);
      
          interaction.editReply({ embeds: [embed], components: [idiomas] });
      
    const collector = interaction.channel.createMessageComponentCollector({componentType: Discord.ComponentType.idiomas});

    collector.on("collect", async (i) => {
        if (i.customId === "idioma") {
            if (i.values == "es-ES") {
                embed.setDescription(`Has configurado el idioma a Español en ${interaction.guild.name}`);
                  await interaction.editReply({ embeds: [embed], components: [] });
                  Schema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
                    if (data) {
                        data.Locale = 'es-ES'
                        data.save();
                    } else {
                          new Schema.create({
                              Locale: 'es-ES',
                              Guild: interaction.guild.id
                          }).save()
                    }
                })
            } else if (i.values == "en-US") {
                embed.setDescription(`You set the Language to English on ${interaction.guild.name}`);
                  await interaction.editReply({ embeds: [embed], components: [] });
                  Schema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
                    if (data) {
                        data.Locale = 'en-US'
                        data.save();
                    } else {
                          new Schema.create({
                              Locale: 'en-US',
                              Guild: interaction.guild.id
                          }).save()
                    }
                })
            } else if (i.values == "de") {
              embed.setDescription(`Sie stellen die Sprache auf Deutsch ein ${interaction.guild.name}`);
                await interaction.editReply({ embeds: [embed], components: [] });
                Schema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
                  if (data) {
                      data.Locale = 'de'
                      data.save();
                  } else {
                        new Schema.create({
                            Locale: 'de',
                            Guild: interaction.guild.id
                        }).save()
                  }
              })
          }
        }
    })  
}