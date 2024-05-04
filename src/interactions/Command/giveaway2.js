const { SlashCommandBuilder } = require('discord.js');
const Giveaway = require('../../database/models/giveaway2.js')
const { updateGiveawayMessage } = require('../../functions/giveaway2')
module.exports = {
    data: new SlashCommandBuilder()
  		.setName('modificar_sorteo')
  		.setDescription('Modifica los detalles de un sorteo existente.')
  		.addStringOption(option => option
        	.setName('id_mensaje')
      		.setDescription('El ID del mensaje del sorteo.')
      		.setRequired(true))
  		.addStringOption(option => option
        	.setName('premio')
      		.setDescription('El nuevo premio del sorteo.')
      		.setRequired(false))
  		.addIntegerOption(option => option.
        	setName('ganadores')
      		.setDescription('La nueva cantidad de ganadores.')
  	    	.setRequired(false))
  		.addStringOption(option => option
        	.setName('fecha_finalizacion')
      		.setDescription('La nueva fecha de finalización del sorteo (YYYY-MM-DD).')
      		.setRequired(false))
    ,

    run: async (client, interaction, args) => {
        const messageId = interaction.options.getString('id_mensaje');
  		const newPrize = interaction.options.getString('premio');
  		const newWinnerCount = interaction.options.getInteger('ganadores');
  		const newEndDate = interaction.options.getString('fecha_finalizacion');
  		const giveaway = await Giveaway.findOne({ guildId: interaction.guild.id, messageId: messageId });
  		
        if (!giveaway) {
    		await interaction.reply({ content: 'Sorteo no encontrado.', ephemeral: true });
    		return;
  		}

  		if (newPrize) giveaway.prize = newPrize;
  		if (newWinnerCount) giveaway.winnerCount = newWinnerCount;
  		if (newEndDate) giveaway.endAt = new Date(newEndDate);
  		await giveaway.save();
  		await updateGiveawayMessage(giveaway, client);
  		await interaction.reply({ content: 'Sorteo actualizado con éxito.', ephemeral: true });
    },
};