const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const Discord = require('discord.js')
const Guild = require(`../../database/models/boosttracker`);
const Language = require('../../database/models/functions')

module.exports = async (client) => {
    client.on(Discord.Events.GuildMemberUpdate, async (oldMember, newMember) => {
    try {
    const guildConfig = await Guild.findOne({ Guild: newMember.guild.id });
    if (!guildConfig) return;
    const settings = Language.findOne({ Guild: newMember.guild.id });
  	const getMessage = global.i18n.getLocale(settings.Locale || 'en-US');
    const boostAnnounceChannel = client.channels.cache.get(guildConfig.Channel);
    const boostAnnouceLogChannel = client.channels.cache.get(guildConfig.Logs);
    const format = {
      0: getMessage(`message.boosttracker.levels.0`),
      1: getMessage(`message.boosttracker.levels.1`),
      2: getMessage(`message.boosttracker.levels.2`),
      3: getMessage(`message.boosttracker.levels.3`),
    };

    const boostLevel = format[newMember.guild.premiumTier];

    if (oldMember.roles.cache.size !== newMember.roles.cache.size) {
      const premiumSubscriberRole = newMember.guild.roles.premiumSubscriberRole;
      if (
        premiumSubscriberRole &&
        !oldMember.roles.cache.has(premiumSubscriberRole.id) &&
        newMember.roles.cache.has(premiumSubscriberRole.id)
      ) {
          const boostImageUrl = "https://i.pinimg.com/originals/0e/32/68/0e3268c284ed94a5acd0943877f6cd9b.gif";

        const boostAnnounceEmbed = new EmbedBuilder()
          .setAuthor({
            name: `> <@${newMember.user.id}> ${getMessage(`message.boosttracker.announce.author`)}`,
            iconURL: newMember.guild.iconURL({ size: 1024 }),
          })
          .setDescription(getMessage(`message.boosttracker.announce.desc`))
          .addFields({
            name: getMessage(`message.boosttracker.announce.field`),
            value: `${newMember.guild.premiumSubscriptionCount} Boosts | ${boostLevel}`,
            inline: false,
          })
          .setImage(boostImageUrl)
          .setColor("#231d2b")
          .setFooter({
            text: `OmenBot || BoostTracker`,
            iconURL: newMember.user.displayAvatarURL({ size: 1024 }),
          })
          .setTimestamp();
        const boostAnnounceRow = new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setLabel(`${newMember.user.tag}`)
            .setEmoji("<a:party:1159742705522446386>")
            .setCustomId("BoostDetection")
            .setStyle(ButtonStyle.Danger)
            .setDisabled(true)
        );

        const msg = await boostAnnounceChannel.send({
          content: `${newMember} \`<@${newMember.user.id}>\``,
          embeds: [boostAnnounceEmbed],
          components: [boostAnnounceRow],
        });
        msg.react("<a:party:1159742705522446386>");

        newMember.send({
          content: `Hi ${newMember.user.tag} You'r Increible, Thanks for boosting the server: **__${newMember.guild.name}__**🎉`,
          components: [boostAnnounceRow],
        });

        const boostLogEmbed = new EmbedBuilder()
          .addFields(
            {
              name: "💎 Booster",
              value: `${newMember.user} | ${newMember.user.tag}`,
            },
            {
              name: "🎉 Server Boosted At:",
              value: `<t:${Math.round(newMember.premiumSinceTimestamp / 1000)}:f> | <t:${Math.round(newMember.premiumSinceTimestamp / 1000)}:R>`,
              inline: true,
            },
            {
              name: "⏰ Account Created At:",
              value: `<t:${Math.round(newMember.user.createdTimestamp / 1000)}:f> | <t:${Math.round(newMember.user.createdTimestamp / 1000)}:R>`,
              inline: true,
            },
            {
              name: "📆 Joined Server At:",
              value: `<t:${Math.round(newMember.joinedTimestamp / 1000)}:f> | <t:${Math.round(newMember.joinedTimestamp / 1000)}:R>`,
              inline: true,
            },
            {
              name: "💜 Total Boosts",
              value: `${newMember.guild.premiumSubscriptionCount} Boost | ${boostLevel}`,
              inline: false,
            },
            {
              name: "✅ Rol Assigned:",
              value: `${premiumSubscriberRole} | ${premiumSubscriberRole.name} | ${premiumSubscriberRole.id}`,
              inline: false,
            }
          )
          .setThumbnail(newMember.user.displayAvatarURL({ size: 1024 }))
          .setColor(newMember.guild.members.me.displayHexColor)
          .setFooter({
            text: `ID: ${newMember.user.id} (All Actions Were Passed)`,
            iconURL: newMember.guild.iconURL({ size: 1024 }),
          })
          .setTimestamp();
        const boostLogChannel = client.channels.cache.get(guildConfig.Logs);
    if (boostLogChannel) {
      const boostLogMessage = await boostLogChannel.send({
        embeds: [boostLogEmbed],
        components: [boostAnnounceRow],
      });

           boostLogMessage.pin();
    } else {
      console.error("Boost Log Channel not found.");
    }

    if (
      oldMember.roles.cache.has(premiumSubscriberRole.id) &&
      !newMember.roles.cache.has(premiumSubscriberRole.id)
    ) {
      const unboostEmbedLog = new EmbedBuilder()
        .setAuthor({
          name: `UnBoost detectado`,
          iconURL: client.user.displayAvatarURL(),
        })
        .addFields(
          {
            name: "📌 Dejó de Boostear:",
            value: `${oldMember.user} | ${oldMember.user.tag}`,
          },
          {
            name: "⏰ Cuenta creada el:",
            value: `<t:${Math.round(oldMember.user.createdTimestamp / 1000)}:f> | <t:${Math.round(oldMember.user.createdTimestamp / 1000)}:R>`,
            inline: true,
          },
          {
            name: "📆 Se unió al servidor el:",
            value: `<t:${Math.round(oldMember.joinedTimestamp / 1000)}:f> | <t:${Math.round(oldMember.joinedTimestamp / 1000)}:R>`,
            inline: true,
          },
          {
            name: "💜 Boosteos totales:",
            value: `${oldMember.guild.premiumSubscriptionCount} Boost | ${boostLevel}`,
            inline: false,
          },
          {
            name: "❌ Rol eliminado:",
            value: `${premiumSubscriberRole} | ${premiumSubscriberRole.name} | ${premiumSubscriberRole.id}`,
            inline: false,
          }
        )
        .setThumbnail(oldMember.user.displayAvatarURL({ size: 1024 }))
        .setColor(oldMember.guild.members.me.displayHexColor)
        .setFooter({
          text: `ID: ${oldMember.user.id}`,
          iconURL: oldMember.guild.iconURL({ size: 1024 }),
        })
        .setTimestamp();
      const unboostLogMessage = await boostAnnouceLogChannel.send({
        embeds: [unboostEmbedLog],
      });

      unboostLogMessage.pin();

      oldMember.send({
        content: `> **Mensaje del BoostTracker**\n\n> Hola ${oldMember.user.tag}, desafortunadamente, tu Boosteo de Nitro para el servidor **__${oldMember.guild.name}__**`,
      });
    }
  }
}
    
    } catch (error) {
    console.error(error);
  }
},
)};
