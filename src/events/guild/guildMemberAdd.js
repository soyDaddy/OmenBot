const discord = require('discord.js');
const roleSchema = require("../../database/models/joinRole");

module.exports = async (client, member) => {
    
    if (member.guild.id === "1154501005036240997") {
    	if (member.user.id === "591691338941202435") {
	        member.roles.add('1229942741061074984')
    	}
    }
    
    if(member.guild.id === "1109913004079853621") {
        if (member.user.bot) {
            member.roles.add('1109913004079853624')
        }
    }
    
    const data = await roleSchema.findOne({ Guild: member.guild.id })
    if (data) {
        const autoRoles = data.Roles
        autoRoles.forEach((role) => {
          member.guild.roles.cache.get((r) => r.id === role);
          member.roles.add(role).catch(( undefined ));
        });
    }
};