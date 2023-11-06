const discord = require('discord.js');

const roleSchema = require("../../database/models/joinRole");

module.exports = async (client, member) => {
    const data = await roleSchema.findOne({ Guild: member.guild.id })
    if (data) {
        const autoRoles = data.Roles
        autoRoles.forEach((role) => {
          member.guild.roles.cache.get((r) => r.id === role);
          member.roles.add(role).catch(( undefined ));
        });
    }
};