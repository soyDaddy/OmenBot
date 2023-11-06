const { SlashCommandBuilder, PermissionsBitField, ChannelType } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('setup')
    .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.name`))
    .setDescription(global.i18n.getMessage(null, `commands.slash.setup.description`))
    .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.description`))
        .addSubcommand(subcommand => subcommand
            .setName('help')
            .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.help.name`))
            .setDescription(global.i18n.getMessage(null, `commands.slash.setup.help.description`))
            .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.help.description`))
        )
        .addSubcommand(subcommand => subcommand
            .setName('tickets')
            .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.tickets.name`))
            .setDescription(global.i18n.getMessage(null, `commands.slash.setup.tickets.description`))
            .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.tickets.description`))
            .addChannelOption(option => option
                .setName('category')
                .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.tickets.options.category.name`))
                .setDescription(global.i18n.getMessage(null, `commands.slash.setup.tickets.options.category.description`))
                .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.tickets.options.category.description`))
                .setRequired(true)
                .addChannelTypes(ChannelType.GuildCategory))
            .addRoleOption(option => option
                .setName('role')
                .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.tickets.options.role.name`))
                .setDescription(global.i18n.getMessage(null, `commands.slash.setup.tickets.options.role.description`))
                .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.tickets.options.role.description`))
                .setRequired(true))
            .addChannelOption(option => option
                .setName('channel')
                .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.tickets.options.channel.name`))
                .setDescription(global.i18n.getMessage(null, `commands.slash.setup.tickets.options.channel.description`))
                .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.tickets.options.channel.description`))
                .setRequired(true)
                .addChannelTypes(ChannelType.GuildText))
            .addChannelOption(option => option
                .setName('logs')
                .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.tickets.options.logs.name`))
                .setDescription(global.i18n.getMessage(null, `commands.slash.setup.tickets.options.logs.description`))
                .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.tickets.options.logs.description`))
                .setRequired(true)
                .addChannelTypes(ChannelType.GuildText))
        )
        .addSubcommand(subcommand => subcommand
            .setName('votacion')
            .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.suggestion.name`))
            .setDescription(global.i18n.getMessage(null, `commands.slash.setup.suggestion.description`))
            .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.suggestion.description`))
            .addChannelOption(option => option
                .setName('channel')
                .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.suggestion.options.channel.name`))
                .setDescription(global.i18n.getMessage(null, `commands.slash.setup.suggestion.options.channel.description`))
                .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.suggestion.options.channel.description`))
                .setRequired(true)
                .addChannelTypes(ChannelType.GuildAnnouncement, ChannelType.GuildText))
        )
        .addSubcommand(subcommand => subcommand
            .setName('normas-tokio')
            .setDescription('Normas para el servidor de TokioHotel.')
            .addChannelOption(option => option
                .setName('channel')
                .setDescription('Especifica el canal de Votos.')
                .setRequired(true)
                .addChannelTypes(ChannelType.GuildAnnouncement, ChannelType.GuildText))
        )
        .addSubcommand(subcommand => subcommand
            .setName('custom-status')
            .setDescription('Setup the custom status role.')
            .addStringOption(option => option
                .setName(`status`)
                .setDescription('What status you want to detect?')
                .setRequired(true))
            .addRoleOption(option => option
                .setName('role')
                .setDescription('Select the role to give.')
                .setRequired(true)
            )
        )
        .addSubcommand(subcommand => subcommand
            .setName('normas-omenbot')
            .setDescription('Normas para el servidor de OmenBot Support.')
            .addChannelOption(option => option
                .setName('channel')
                .setDescription('Especifica el canal de Votos.')
                .setRequired(true)
                .addChannelTypes(ChannelType.GuildAnnouncement, ChannelType.GuildText))
        )
        .addSubcommand(subcommand => subcommand
            .setName('normas-omen')
            .setDescription('Normas para el servidor de soyOmen.')
            .addChannelOption(option => option
                .setName('channel')
                .setDescription('Especifica el canal de Votos.')
                .setRequired(true)
                .addChannelTypes(ChannelType.GuildAnnouncement, ChannelType.GuildText))
        )
        .addSubcommand(subcommand => subcommand
            .setName('statusmgs')
            .setDescription('Test.')
            .addChannelOption(option => option
                .setName('channel')
                .setDescription('Especifica el canal de Votos.')
                .setRequired(true)
                .addChannelTypes(ChannelType.GuildAnnouncement, ChannelType.GuildText))
        )
        .addSubcommand(subcommand => subcommand
            .setName('customvoice')
            .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.customvoice.name`))
            .setDescription(global.i18n.getMessage(null, `commands.slash.setup.customvoice.description`))
            .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.customvoice.description`))
            .addChannelOption(option => option
                .setName('category')
                .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.customvoice.options.category.name`))
                .setDescription(global.i18n.getMessage(null, `commands.slash.setup.customvoice.options.category.description`))
                .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.customvoice.options.category.description`))
                .setRequired(true)
                .addChannelTypes(ChannelType.GuildCategory))
            .addStringOption(option => option
                .setName('channelname')
                .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.customvoice.options.channelname.name`))
                .setDescription(global.i18n.getMessage(null, `commands.slash.setup.customvoice.options.channelname.description`))
                .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.customvoice.options.channelname.description`))
                .setRequired(true))
        )
        .addSubcommand(subcommand => subcommand
            .setName('logs')
            .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.logs.name`))
            .setDescription(global.i18n.getMessage(null, `commands.slash.setup.logs.description`))
            .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.logs.description`))
            .addStringOption(option => option
                .setName('setup')
                .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.logs.options.setup.name`))
                .setDescription(global.i18n.getMessage(null, `commands.slash.setup.logs.options.setup.description`))
                .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.logs.options.setup.description`))
                .setRequired(true)
                .addChoices({ 
                    name: 'Server Logs', 
                    name_localizations: global.i18n.getAllMessages(`commands.slash.setup.logs.options.setup.choices.sl`), 
                    value: 'serverLogs' 
                },{ 
                    name: 'Level Logs', 
                    name_localizations: global.i18n.getAllMessages(`commands.slash.setup.logs.options.setup.choices.ll`), 
                    value: 'levelLogs'
                },{ 
                    name: 'Boost Logs', 
                    name_localizations: global.i18n.getAllMessages(`commands.slash.setup.logs.options.setup.choices.bl`), 
                    value: 'boostLogs' 
                }))
            .addChannelOption(option => option
                .setName('channel')
                .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.logs.options.channel.name`))
                .setDescription(global.i18n.getMessage(null, `commands.slash.setup.logs.options.channel.description`))
                .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.logs.options.channel.description`))
                .setRequired(true)
                .addChannelTypes(ChannelType.GuildText))
        )
        .addSubcommand(subcommand => subcommand
            .setName('fun')
            .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.fun.name`))
            .setDescription(global.i18n.getMessage(null, `commands.slash.setup.fun.description`))
            .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.fun.description`))
            .addStringOption(option => option
                .setName('setup')
                .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.fun.options.setup.name`))
                .setDescription(global.i18n.getMessage(null, `commands.slash.setup.fun.options.setup.description`))
                .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.fun.options.setup.description`))
                .setRequired(true)
                .addChoices({ 
                    name: 'Birthdays', 
                    name_localizations: global.i18n.getAllMessages(`commands.slash.setup.fun.options.setup.choices.bd`), 
                    value: 'birthdays'
                },{ 
                    name: 'Chat Bot', 
                    name_localizations: global.i18n.getAllMessages(`commands.slash.setup.fun.options.setup.choices.cb`), 
                    value: 'chatbot' 
                },{ 
                    name: 'Reviews', 
                    name_localizations: global.i18n.getAllMessages(`commands.slash.setup.fun.options.setup.choices.rw`), 
                    value: 'reviews' 
                },{ 
                    name: 'Starboard', 
                    name_localizations: global.i18n.getAllMessages(`commands.slash.setup.fun.options.setup.choices.sb`), 
                    value: 'starboard' 
                }))
            .addChannelOption(option => option
                .setName('channel')
                .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.fun.options.channel.name`))
                .setDescription(global.i18n.getMessage(null, `commands.slash.setup.fun.options.channel.description`))
                .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.fun.options.channel.description`))
                .setRequired(true)
                .addChannelTypes(ChannelType.GuildText))
        )
        .addSubcommand(subcommand => subcommand
            .setName('games')
            .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.games.name`))
            .setDescription(global.i18n.getMessage(null, `commands.slash.setup.games.description`))
            .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.games.description`))
            .addStringOption(option => option
                .setName('setup')
                .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.games.options.setup.name`))
                .setDescription(global.i18n.getMessage(null, `commands.slash.setup.games.options.setup.description`))
                .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.games.options.setup.description`))
                .setRequired(true)
                .addChoices({ 
                    name: 'Counting', 
                    name_localizations: global.i18n.getAllMessages(`commands.slash.setup.games.options.setup.choices.cg`), 
                    value: 'counting' 
                },{ 
                    name: 'Guess The Number', 
                    name_localizations: global.i18n.getAllMessages(`commands.slash.setup.games.options.setup.choices.gtn`), 
                    value: 'gtn'
                },{ 
                    name: 'Guess The Word', 
                    name_localizations: global.i18n.getAllMessages(`commands.slash.setup.games.options.setup.choices.gtw`), 
                    value: 'gtw' 
                },{ 
                    name: 'Word Snake', 
                    name_localizations: global.i18n.getAllMessages(`commands.slash.setup.games.options.setup.choices.ws`), 
                    value: 'wordsnake' 
                }))
            .addChannelOption(option => option
                .setName('channel')
                .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.games.options.channel.name`))
                .setDescription(global.i18n.getMessage(null, `commands.slash.setup.games.options.channel.description`))
                .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.games.options.channel.description`))
                .setRequired(true)
                .addChannelTypes(ChannelType.GuildText))
        )
        .addSubcommand(subcommand => subcommand
            .setName('welcomechannels')
            .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.welcomechannels.name`))
            .setDescription(global.i18n.getMessage(null, `commands.slash.setup.welcomechannels.description`))
            .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.welcomechannels.description`))
            .addStringOption(option => option
                .setName('setup')
                .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.welcomechannels.options.setup.name`))
                .setDescription(global.i18n.getMessage(null, `commands.slash.setup.welcomechannels.options.setup.description`))
                .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.welcomechannels.options.setup.description`))
                .setRequired(true)
                .addChoices({ 
                    name: 'Welcome', 
                    name_localizations: global.i18n.getAllMessages(`commands.slash.setup.welcomechannels.options.setup.choices.welcome`), 
                    value: 'welcomechannel' 
                },{ 
                    name: 'Leave', 
                    name_localizations: global.i18n.getAllMessages(`commands.slash.setup.welcomechannels.options.setup.choices.leave`), 
                    value: 'leavechannel' 
                }))
            .addChannelOption(option => option
                .setName('channel')
                .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.welcomechannels.options.channel.name`))
                .setDescription(global.i18n.getMessage(null, `commands.slash.setup.welcomechannels.options.channel.description`))
                .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.welcomechannels.options.channel.description`))
                .setRequired(true)
                .addChannelTypes(ChannelType.GuildText))
        )
        .addSubcommand(subcommand => subcommand
            .setName('welcomerole')
            .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.welcomerole.name`))
            .setDescription(global.i18n.getMessage(null, `commands.slash.setup.welcomerole.description`))
            .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.welcomerole.description`))
            .addRoleOption(option => option
                .setName('role')
                .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.welcomerole.options.role.name`))
                .setDescription(global.i18n.getMessage(null, `commands.slash.setup.welcomerole.options.role.description`))
                .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.welcomerole.options.role.description`))
                .setRequired(true))
        )
        .addSubcommand(subcommand => subcommand
            .setName('ticketpanel')
            .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.ticketpanel.name`))
            .setDescription(global.i18n.getMessage(null, `commands.slash.setup.ticketpanel.description`))
            .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.ticketpanel.description`))
            .addStringOption(option => option
                .setName('name')
                .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.ticketpanel.options.name.name`))
                .setDescription(global.i18n.getMessage(null, `commands.slash.setup.ticketpanel.options.name.description`))
                .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.ticketpanel.options.name.description`))
                .setRequired(true))
            .addStringOption(option => option
                .setName('description')
                .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.ticketpanel.options.description.name`))
                .setDescription(global.i18n.getMessage(null, `commands.slash.setup.ticketpanel.options.description.description`))
                .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.ticketpanel.options.description.description`))
                .setRequired(true))
        )
        .addSubcommand(subcommand => subcommand
            .setName('language')
            .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.language.name`))
            .setDescription(global.i18n.getMessage(null, `commands.slash.setup.language.description`))
            .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.language.description`))
        )
        .addSubcommand(subcommand => subcommand
            .setName('deletesetup')
            .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.deletesetup.name`))
            .setDescription(global.i18n.getMessage(null, `commands.slash.setup.deletesetup.description`))
            .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.deletesetup.description`))
            .addStringOption(option => option
                .setName('setup')
                .setNameLocalizations(global.i18n.getAllMessages(`commands.slash.setup.deletesetup.options.setup.name`))
                .setDescription(global.i18n.getMessage(null, `commands.slash.setup.deletesetup.options.setup.description`))
                .setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.setup.deletesetup.options.setup.description`))
                .setRequired(true)
                .addChoices({ 
                    name: 'Tickets', 
                    name_localizations: global.i18n.getAllMessages(`commands.slash.setup.deletesetup.options.setup.choices.t`), 
                    value: 'tickets' 
                },{ 
                    name: 'Suggestions', 
                    name_localizations: global.i18n.getAllMessages(`commands.slash.setup.deletesetup.options.setup.choices.ss`), 
                    value: 'votaciones' 
                },{ 
                    name: 'Custom Voice', 
                    name_localizations: global.i18n.getAllMessages(`commands.slash.setup.deletesetup.options.setup.choices.cv`), 
                    value: 'customvoice' 
                },{ 
                    name: 'Server Logs', 
                    name_localizations: global.i18n.getAllMessages(`commands.slash.setup.deletesetup.options.setup.choices.sl`), 
                    value: 'serverlogs' 
                },{ 
                    name: 'Level Logs', 
                    name_localizations: global.i18n.getAllMessages(`commands.slash.setup.deletesetup.options.setup.choices.ll`), 
                    value: 'levellogs' 
                },{ 
                    name: 'Boost Logs', 
                    name_localizations: global.i18n.getAllMessages(`commands.slash.setup.deletesetup.options.setup.choices.bl`), 
                    value: 'boostlogs' 
                },{ 
                    name: 'Birthdays', 
                    name_localizations: global.i18n.getAllMessages(`commands.slash.setup.deletesetup.options.setup.choices.bd`), 
                    value: 'birthdays' 
                },{ 
                    name: 'Chat Bot', 
                    name_localizations: global.i18n.getAllMessages(`commands.slash.setup.deletesetup.options.setup.choices.cb`), 
                    value: 'chatbot' 
                },{ 
                    name: 'Reviews', 
                    name_localizations: global.i18n.getAllMessages(`commands.slash.setup.deletesetup.options.setup.choices.rw`), 
                    value: 'reviews' 
                },{ 
                    name: 'Counting',
                    name_localizations: global.i18n.getAllMessages(`commands.slash.setup.deletesetup.options.setup.choices.ct`), 
                    value: 'counting' 
                },{ 
                    name: 'Guess The Number', 
                    name_localizations: global.i18n.getAllMessages(`commands.slash.setup.deletesetup.options.setup.choices.gtn`), 
                    value: 'gtn' 
                },{ 
                    name: 'Guess The Word', 
                    name_localizations: global.i18n.getAllMessages(`commands.slash.setup.deletesetup.options.setup.choices.gtw`), 
                    value: 'gtw' 
                },{ 
                    name: 'Welcome Channel', 
                    name_localizations: global.i18n.getAllMessages(`commands.slash.setup.deletesetup.options.setup.choices.wc`), 
                    value: 'welcomechannel' 
                },{ 
                    name: 'Leave Channel', 
                    name_localizations: global.i18n.getAllMessages(`commands.slash.setup.deletesetup.options.setup.choices.lc`), 
                    value: 'leavechannel' 
                },{ 
                    name: 'Welcome Roles', 
                    name_localizations: global.i18n.getAllMessages(`commands.slash.setup.deletesetup.options.setup.choices.wr`), 
                    value: 'welcomerole' 
                },{ 
                    name: 'Word Snake', 
                    name_localizations: global.i18n.getAllMessages(`commands.slash.setup.deletesetup.options.setup.choices.ws`), 
                    value: 'wordsnake' 
                }))
        )
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator)
    ,

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        client.loadSubcommands(client, interaction, args);
    },
};

 