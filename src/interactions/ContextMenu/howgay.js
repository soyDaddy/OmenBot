const { ContextMenuCommandBuilder } = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('• How Gay')
        .setNameLocalizations(global.i18n.getAllMessages(`commands.content.gay`))
        .setType(2),

    run: async (client, interaction, args) => {
        await interaction.deferReply({ ephemeral: false });
        var result = Math.ceil(Math.random() * 100);

    client.embed({  
        title: `🏳️‍🌈・Gay rate`,
        desc: `<@${interaction.targetId}> is ${result}% gay!`,
        type: 'editreply'
    }, interaction)
    },
};

 