const { REST, Routes } = require('discord.js');
const fs = require('fs');
const { textColored } = require('../../lib/function')

module.exports = (client) => {

    const commands = [];

    fs.readdirSync('./src/interactions').forEach(dirs => {
        const commandFiles = fs.readdirSync(`./src/interactions/${dirs}`).filter(files => files.endsWith('.js'));
        console.log(textColored(`⋆⦿ ⋆ ${dirs} Loaded: `,'#00FFFF'), textColored(commandFiles.length, '#00ff00'));
        for (const file of commandFiles) {
            const command = require(`${process.cwd()}/src/interactions/${dirs}/${file}`);
            client.commands.set(command.data.name, command);
            commands.push(command.data);
        };
    });

    const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN);

    (async () => {
        try {
            await rest.put(
                Routes.applicationCommands(process.env.DISCORD_ID),
                { body: commands },
            )
        } catch (error) {
            console.log(error);
        }
    })();
    console.log(textColored("════════════════ ⋆★⋆ ════════════════", '#800080'))
}