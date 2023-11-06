const { ContextMenuInteraction, ContextMenuCommandBuilder, ApplicationCommandType, PermissionsBitField, EmbedBuilder } = require("discord.js");
const translate = require("@iamtraction/google-translate");

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName("• Translate")  
        .setNameLocalizations(global.i18n.getAllMessages(`commands.content.translate`))
        .setType(ApplicationCommandType.Message),
    run: async (client, interaction, args) => {
        let message = await interaction.channel.messages.fetch(interaction.targetId);
        const translated = await translate(message, { to: `en` });

        const embed = new EmbedBuilder()
            .setTitle(`• Translation Successful`)
            .setColor('#800080')
            .addFields({ name: `Old Text: `, value: `\`\`\` ${message}\`\`\``, inline: false })
            .addFields({ name: `Translated Text: `, value: `\`\`\` ${translated.text}\`\`\``, inline: false })

        await interaction.reply({ embeds: [embed], ephemeral: true });
    }
}