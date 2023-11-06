const { Events } = require('discord.js')

module.exports = async (client) => {
client.on(Events.InteractionCreate, interaction => {
	if (!interaction.isAutocomplete()) return;
	const command = interaction.client.commands.get(interaction.commandName);
		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}
			command.autocomplete(interaction, client);
});

}