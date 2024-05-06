const fs = require('fs');
const Discord = require('discord.js');
const { textColored } = require('../../lib/function');

module.exports = (client) => {

    fs.readdirSync('./src/events').forEach(dirs => {
        const events = fs.readdirSync(`./src/events/${dirs}`).filter(files => files.endsWith('.js'));
        console.log(textColored(`⋆⦿ ⋆ Event `, "#00FFFF"), textColored(`${toOppositeCase(dirs)}`, "#00ff00" ), textColored(` Loaded: `,'#00FFFF'), textColored(events.length+ ' Events', '#00ff00'));
        for (const file of events) {
            const event = require(`../../events/${dirs}/${file}`);
            const eventName = file.split(".")[0];
            const eventUpperCase = eventName.charAt(0).toUpperCase() + eventName.slice(1);
            if(Discord.Events[eventUpperCase] === undefined){
                client.on(eventName, event.bind(null, client)).setMaxListeners(0);
            }else {
            client.on(Discord.Events[eventUpperCase], event.bind(null, client)).setMaxListeners(0);
            }
        };
    });
    console.log(textColored("════════════════ ⋆★⋆ ════════════════", '#800080'))
}

function toOppositeCase(char) {
    return char.charAt(0).toUpperCase() + char.slice(1);
}