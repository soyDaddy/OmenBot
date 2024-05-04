const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const moment = require("moment");
const Code = require("../../database/models/premiumcode");
const User = require('../../database/models/user');
const soycanvas = require('soycanvas')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('redeem')
        .setDescription('Redeem your Premium Code')
        .addStringOption(option =>
            option.setName('code')
                .setDescription('Introduce your Premium Code')
                .setRequired(true)),

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        const imput = interaction.options.getString('code');
        const user = await User.findOne({ Id: interaction.user.id });
        const code = await Code.findOne({ code: imput.toUpperCase() });
        const premiumID = soycanvas.Util.captchaKey(12)
        if (user && user.isPremium) {
            const embed = new EmbedBuilder().setColor('#ff0000').setDescription(`\`❌\` | You already a premium user.`);
            return interaction.editReply({ embeds: [embed] });
        }
        if (code) {
            if (code.plan === "minutely") {
                if (user) {
                    user.isPremium = true
                    user.PremID = premiumID
                    user.redeemedAt = Date.now();
                    user.expiresAt = Date.now() + 300000;
                    user.plan = code.plan;
                    user.save()
                }
                else {
                    new User({
                        Id: interaction.user.id,
                        isPremium: true,
                        PremID: premiumID,
                        redeemedAt: Date.now(),
                        expiresAt: Date.now() + 300000,
                        plan: code.plan
                    }).save()
                }               
                await code.delete();
            }

            if (code.plan === "daily") {
                if (user) {
                    user.isPremium = true
                    user.PremID = premiumID
                    user.redeemedAt = Date.now();
                    user.expiresAt = Date.now() + 86400000;
                    user.plan = code.plan;
                    user.save()
                }
                else {
                    new User({
                        Id: interaction.user.id,
                        isPremium: true,
                        PremID: premiumID,
                        redeemedAt: Date.now(),
                        expiresAt: Date.now() + 86400000,
                        plan: code.plan
                    }).save()
                }
                await code.delete();
            }

            if (code.plan === "weekly") {
                if (user) {
                    user.isPremium = true
                    user.PremID = premiumID
                    user.redeemedAt = Date.now();
                    user.expiresAt = Date.now() + 86400000 * 7;
                    user.plan = code.plan;
                    user.save()
                }
                else {
                    new User({
                        Id: interaction.user.id,
                        isPremium: true,
                        PremID: premiumID,
                        redeemedAt: Date.now(),
                        expiresAt: Date.now() + 86400000 * 7,
                        plan: code.plan
                    }).save()
                }
                await code.delete();
            }

            if (code.plan === "monthly") {
                if (user) {
                    user.isPremium = true
                    user.PremID = premiumID
                    user.redeemedAt = Date.now();
                    user.expiresAt = Date.now() + 86400000 * 30;
                    user.plan = code.plan;
                    user.save()
                }
                else {
                    new User({
                        Id: interaction.user.id,
                        isPremium: true,
                        PremID: premiumID,
                        redeemedAt: Date.now(),
                        expiresAt: Date.now() + 86400000 * 30,
                        plan: code.plan
                    }).save()
                }
                await code.delete();
            }

            if (code.plan === "yearly") {
                if (user) {
                    user.isPremium = true
                    user.PremID = premiumID
                    user.redeemedAt = Date.now();
                    user.expiresAt = Date.now() + 86400000 * 365;
                    user.plan = code.plan;
                    user.save()
                }
                else {
                    new User({
                        Id: interaction.user.id,
                        isPremium: true,
                        PremID: premiumID,
                        redeemedAt: Date.now(),
                        expiresAt: Date.now() + 86400000 * 365,
                        plan: code.plan
                    }).save()
                }
                await code.delete();
            }

            if (code.plan === "lifetime") {
                if (user) {
                    user.isPremium = true
                    user.PremID = premiumID
                    user.redeemedAt = Date.now();
                    user.expiresAt = Date.now() + 86400000 * 365 * 100;
                    user.plan = code.plan;
                    user.save()
                }
                else {
                    new User({
                        Id: interaction.user.id,
                        isPremium: true,
                        PremID: premiumID,
                        redeemedAt: Date.now(),
                        expiresAt: Date.now() + 86400000 * 365 * 100,
                        plan: code.plan
                    }).save()
                }
                await code.delete();
            }
            
            const time = await User.findOne({ Id: interaction.user.id });

            const expires = moment(time.expiresAt).format("dddd, MMMM Do YYYY HH:mm:ss");

            const embed = new EmbedBuilder()
                .setAuthor({ name: `Premium Redeemed!`, iconURL: client.user.displayAvatarURL() })
                .setDescription(`Conratulations ${interaction.member}. You've successfully redeem premium code with the following details.`)
                .setThumbnail(interaction.user.displayAvatarURL())
                .setColor('#800080')
                .setTimestamp();

            if (time.plan === "lifetime") {
                embed.addFields([
                    { name: `\`👥\` • Redeemed By`, value: `\`\`\`${interaction.member.displayName}\`\`\``, inline: true },
                    { name: `\`💠\` • Plan Type`, value: `\`\`\`${time.plan}\`\`\``, inline: true },
                    { name: `\`🕓\` • Expired Time`, value: `\`\`\`Never\`\`\``, inline: false },
                    { name: `\`🆔\` • Premium ID`, value: `\`\`\`${time.PremID}\`\`\``, inline: false },
                ]);
            } else {
                embed.addFields([
                    { name: `\`👥\` • Redeemed By`, value: `\`\`\`${interaction.member.displayName}\`\`\``, inline: true },
                    { name: `\`💠\` • Plan Type`, value: `\`\`\`${time.plan}\`\`\``, inline: true },
                    { name: `\`🕓\` • Expired Time`, value: `\`\`\`${expires}\`\`\``, inline: false },
                    { name: `\`🆔\` • Premium ID`, value: `\`\`\`${time.PremID}\`\`\``, inline: false },
                ]);
            }

            return interaction.editReply({ embeds: [embed] });
        } else {
            const embed = new EmbedBuilder()
                .setColor('#800080')
                .setDescription(`\`❌\` | The provided code was invalid, please use a valid one.`);

            return interaction.editReply({ embeds: [embed] });
        }
    }
}
