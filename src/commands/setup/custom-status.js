const Discord = require('discord.js');
const customStatusSchema = require(`../../database/models/customstatus`)

module.exports = async (client, interaction, args) => {
    const role = interaction.options.getRole('role');
    const status = interaction.options.getString('status');

    const embed = new Discord.EmbedBuilder()
        .setTitle('DONE')
        .setDescription(`You selected the role: ${role} for the custom status of: ${status}`)
        .setColor('#1eff00')

customStatusSchema.findOne({ Guild: interaction.guild.id }, async (err, data) => {

    if (data) {
        data.Role = role.id,
        data.Status = status
        data.save();
    }
    else {
        new customStatusSchema({
            Guild: interaction.guild.id, 
            Role: role.id,
            Status: status
        }).save();
    }
})
interaction.editReply({content: 'Done', ephemeral: true})
}