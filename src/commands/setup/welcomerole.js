const Discord = require('discord.js');
const welcomeRole = require("../../database/models/joinRole");

module.exports = async (client, interaction, args) => {

    const roleAR = interaction.options.getRole("role");
    welcomeRole.findOne({ Guild: interaction.guild.id }, async (err, data) => {
        if (data) {
            var autoroleArray = data.Roles
            autoroleArray.push(roleAR.id); 
            data.Roles = autoroleArray;
            await data.save();
            interaction.editReply({content: `You added ${roleAR} to the Join Members`})
        } else {
            new welcomeRole({
                Guild: interaction.guild.id,
                Role: roleAR.id
            }).save();
            interaction.editReply({content: `Your DataBase was created Succesfuly`})
        }
    })
}

 