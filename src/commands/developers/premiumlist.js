const { EmbedBuilder } = require("discord.js");
const moment = require("moment");
const User = require('../../database/models/user');

module.exports = async (client, interaction, args) => {
    const users = await User.find();

    let usersData = users.filter((user) => user.isPremium === true);
    let premium = usersData.map(
        (x, index) =>
            `${index + 1}. <@${x.Id}> \`\`\`ID: ${x.Id} | Plan: ${x.plan} | Expire At: ${x.plan === 'lifetime' ? 'Never' : moment(x.expiresAt).format("dddd, MMMM Do YYYY",)}\`\`\``,
    );

    const embed = new EmbedBuilder()
        .setAuthor({ name: `${client.user.username} Premium List`, iconURL: client.user.avatarURL({ dynamic: true }) })
        .setColor('#800080')
        .setDescription(premium.join("\n") || "```No Premium User Found```");

    return interaction.editReply({ embeds: [embed] });
}