const CommandStats = require('../../database/models/web-stats/commandstats')

module.exports = (client) => {
	client.on('interactionCreate', async (interaction) => {
  		if (!interaction.isCommand()) return;
  		const { commandName, guildId } = interaction;
  		await CommandStats.findOneAndUpdate(
    		{ commandName, guildId },
    		{ $inc: { count: 1 } },
    		{ upsert: true }
  		);
	});
}