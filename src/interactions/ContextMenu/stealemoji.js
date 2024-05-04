const { ContextMenuInteraction, ContextMenuCommandBuilder, ApplicationCommandType, PermissionsBitField, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName("• Steal emoji")  
        .setNameLocalizations(global.i18n.getAllMessages(`commands.content.steal`))
        .setType(ApplicationCommandType.Message)
    .setDefaultMemberPermissions(PermissionsBitField.Flags.ManageGuildExpressions),
    run: async (client, interaction, args) => {

        let message = await interaction.channel.messages.fetch(interaction.targetId);
 
        let emojiRegex = /<(a?):(\w{2,}):(\d{10,})>/;
        let emoji = message.content.match(emojiRegex);
        
        if (!emoji) {
            return await interaction.reply({ content: "Invalid emoji. Please use this command on a message containing a custom emoji.", ephemeral: true });
        }
        
        let id = emoji.pop();
        let name = emoji.pop();
        let animated = emoji.pop() === 'a' 
 
        let url = `https://cdn.discordapp.com/emojis/${id}.${animated ? "gif" : "png"}`
 
        try {
            let newEmoji = await interaction.guild.emojis.create({ attachment: url, name: name })
            let embed = new EmbedBuilder()
                .setColor("Blue")
                .setDescription(`Added ${newEmoji}, with the name ${name}`)
            return interaction.reply({ embeds: [embed] });            
        } catch (error) {
            console.log(error.stack);
            interaction.reply({ content: "You cannot add this emoji because you have reached your server emoji limit", ephemeral: true})
        }
    }
}