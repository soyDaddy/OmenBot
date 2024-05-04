const Discord = require('discord.js');
const Schema = require('../../database/models/vcrole');

module.exports = async (client) => {
client.on(Discord.Events.VoiceStateUpdate, async (oldState, newState) => {
    const data = await Schema.findOne({Guild: oldState.guild.id});

    if (!data) return;
    else {
        const guild = newState.guild;
        const oldChannel = oldState.channel;
        const newChannel = newState.channel;
        const channel = data.Channel;
        const roleID= data.Role;

        if (newChannel && newChannel.id === channel) {
            const role = await guild.roles.cache.get(roleID);

            if (role && newState.member) {
                if (newState.member.roles.cache.has(roleID)) return;
                await newState.member.roles.add(role).catch(err => {})
            } else {
                return;
            }
        } else if (oldChannel && oldChannel.id === channel) {
            const role = await guild.roles.cache.get(roleID);

            if (role && oldState.member) {
                if (oldState.member.roles.cache.has(roleID)) 
                await oldState.member.roles.remove(role).catch(err => {})
            } else {
                return;
            }
        }
    }
})
}