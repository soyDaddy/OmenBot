const { SlashCommandBuilder, EmbedBuilder } = require("@discordjs/builders")
const toowake = require("toowake-about");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("soydaddy")
		.setDescription("Test soy ")
		,
    run: async (client, interaction, args) => {
		const newAbt = new toowake()
			.setAge(22)
			.setBirthday({ 
		    	day: 16,
    			month: 9,
    			year: 2001
			})
			.setCountry("Spain")
			.setDescription("Suck my dick bitch")
			.setPet("Dog (haskey) and cat")

		const html = newAbt.generateHTML()
		console.log(html)
	}
};