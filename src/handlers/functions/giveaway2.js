const { EmbedBuilder, ActionRowBuilder, ButtonStyle, ButtonBuilder } = require('discord.js');
const { updateGiveawayMessage, addParticipant, removeParticipant } = require('../../functions/giveaway2')
module.exports = async (client) => {
client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return;
  if (interaction.customId === 'participate') {
    const giveaway = await addParticipant(interaction.guild.id, interaction.message.id, interaction.user.id);
      if (giveaway.success) {
        const NewParticipant = new EmbedBuilder()
        .setAuthor({ name: 'Participante', iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
        .setDescription(`You entered the giveaway: **${giveaway.giveaway.prize}**
        Check the giveaway by clicking [HERE](https://discordapp.com/channels/${interaction.guild.id}/${giveaway.giveaway.channelId}/${giveaway.giveaway.messageId})`)
        .setTimestamp()
        .setColor('Green');
      await updateGiveawayMessage(giveaway.giveaway, client);
      await interaction.reply({ content: 'Details on your DM', ephemeral: true })
      await interaction.user.send({ embeds: [NewParticipant]})
    } else {
  const row = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
        .setCustomId(`withdraw_${giveaway.giveawayId}_${interaction.user.id}`)
        .setLabel('🎉 Leave 🎉')
        .setStyle(ButtonStyle.Danger),
    );
      await interaction.reply({ content: `You're already in the giveaway.`, components: [row], ephemeral: true });
    }
  } else if (interaction.customId.startsWith('withdraw')) {
      const [action, giveawayId, userId] = interaction.customId.split('_');
    	const giveaway = await removeParticipant(giveawayId, interaction.user.id);
    	if (giveaway) {
        	await updateGiveawayMessage(giveaway, client);
    	  	await interaction.reply({ content: 'You have left the giveaway.', ephemeral: true });
	    } else {
		    await interaction.reply({ content: `You're not in the giveaway.`, ephemeral: true });
    	}
  	}
});
}