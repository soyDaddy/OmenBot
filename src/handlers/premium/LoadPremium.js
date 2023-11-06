const { EmbedBuilder } = require("discord.js");
const User = require("../../database/models/user");
const cron = require("node-cron");

module.exports = async (client) => {
    cron.schedule("*/60 * * * * *", async () => {
        const users = await User.find({ isPremium: true });

        if (!users || !users.length) return;

        await users.forEach(async (user) => {
            if (Date.now() >= user.expiresAt) {
                user.isPremium = false;
                user.PremID = null;
                user.redeemedAt = null;
                user.expiresAt = null;
                user.plan = null;
                user.save();
                const embed = new EmbedBuilder()
                .setAuthor({ name: `Premium Subscription!`, iconURL: client.user.displayAvatarURL() })
                .setDescription(`Hey <@${user.Id}>. Your Premium subscription is over.`)
                .setColor('#ff0000')
                .setTimestamp();
                client.users.fetch(user.Id).then((user) => {
                    user.send({embeds: [embed]});
                   });
                console.log(`[DEBUG] Premium Expired for (${user.Id})`);
            }
        });
    });
};
