const { SlashCommandBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("test")
		.setDescription("Just a test")
        .addStringOption(option => option.setName('query').setDescription('Test').setRequired(true))
        .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator),
     run: async (client, interaction, args) => {
        const query = interaction.options.getString('query');

        // Make a GET request to the api with the query you entered
        const response = await fetch(`https://tenor.googleapis.com/v2/search?q=${query}&key=${process.env.TENOR_APIKEY}`); 

        // Convert the response to JSON structure
        const data = await response.json(); 

        // Random choice betwen all result on the GET request
        let choice = Math.floor(Math.random() * data.results.length);

        // Embed Structure
        const embed = new Discord.EmbedBuilder()
            .setTitle('Just a test')
            .setImage(data.results[choice].media_formats.tinygif.url);

        // Reply the embed to the interaction
        interaction.reply({ embeds: [embed] })
    }
};