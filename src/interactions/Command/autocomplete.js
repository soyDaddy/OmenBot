const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('autocomplete')
        .setDescription('Autocomplete test')
        .addStringOption(option => option.setName('query').setDescription('AutoComplete Example').setRequired(true).setAutocomplete(true)),
    async autocomplete (interaction, client){
        const focusedValue = interaction.options.getFocused();
		let choices = []
        await client.guilds.cache.map(guild =>  choices.push(guild.name));
        const guilds = choices.slice(0,25)
		const filtered = guilds.filter(choice => choice.startsWith(focusedValue));
		await interaction.respond(
			filtered.map(choice => ({ name: choice, value: choice })),
		);
    },
    async run (client, interaction, args) {
        const query = interaction.options.getString('query');
        await interaction.reply({ content: `You selected: **${query}** guild`, ephemeral: true})
    },
};
