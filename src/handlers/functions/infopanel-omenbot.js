const Discord = require('discord.js');

module.exports = async (client) => {
client.on(Discord.Events.InteractionCreate, async (interaction) => {

        if (interaction.customId === 'omenbot_info_es') {
            const embed = new Discord.EmbedBuilder()
                .setTitle('> Español')
                .setColor("#800080")
                .setDescription('Esta es toda la información que puedes encontrar de OmenBot y de este servidor de Soporte')
                .setImage('https://cdn.discordapp.com/attachments/1120353006764965989/1156917318413193306/espanol.png?ex=6516b6b7&is=65156537&hm=a806ef2e55f94a76496eb342fd87057b7e68d39395443e6f3be3c1778d8f6a62&')
                .setTimestamp()

            const menu = new Discord.ActionRowBuilder()
            .addComponents(
                new Discord.StringSelectMenuBuilder()
                .setCustomId('omenbot_info_es')
                .setPlaceholder('Nada Seleccionado')
                .addOptions([
                    {
                        label: 'Información',
                        description: 'Muestra la información del servidor',
                        emoji: '1156921040572784690',
                        value: 'omenbot_info_es_info'
                    },{
                        label: 'Info Bot',
                        description: 'Muestra la información del Bot',
                        emoji: '1156921038861512805',
                        value: 'omenbot_info_es_infobot'
                    },{
                        label: 'Normas',
                        description: 'Muestra las normas del servidor de Discord',
                        emoji: '1156921036110049341',
                        value: 'omenbot_info_es_rules'
                    },{
                        label: 'Insignias',
                        description: 'Muestra la información sobre las insignias del bot',
                        emoji: '1156921034579116032',
                        value: 'omenbot_info_es_badgets'
                    },{
                        label: 'Beta',
                        description: 'Muestra la información sobre las betas de OmenBot',
                        emoji: '1156921030573576192',
                        value: 'omenbot_info_es_beta'
                    },{
                        label: 'Premium',
                        description: 'Muestra la información sobre el Premium en OmenBot',
                        emoji: '1156921032310014002',
                        value: 'omenbot_info_es_premium'
                    },{
                        label: 'Cambios',
                        description: 'Muestra la información de los cambios en OmenBot',
                        emoji: '1156921027423641610',
                        value: 'omenbot_info_es_changelog'
                    }
                ])
            )
            interaction.reply({embeds: [embed], components: [menu], ephemeral: true})
        }

        if (interaction.customId === 'omenbot_info_en') {
            const embed = new Discord.EmbedBuilder()
            .setTitle('> English')
            .setColor("#800080")
            .setDescription('This is all info you can find of OmenBot and this server Support')
            .setImage('https://cdn.discordapp.com/attachments/1120353006764965989/1156917317905690624/english.png?ex=6516b6b7&is=65156537&hm=45f5d0b39dca4a0c025279fa7ccb1ddb33ce1d66cc6589b3cf43a8331601c0ce&')
            .setTimestamp()
            
            const menu = new Discord.ActionRowBuilder()
            .addComponents(
                new Discord.StringSelectMenuBuilder()
                .setCustomId('omenbot_info_en')
                .setPlaceholder('Nothing Selected')
                .addOptions([
                    {
                        label: 'Info',
                        description: 'Show Server Info',
                        emoji: '1156921040572784690',
                        value: 'omenbot_info_en_info'
                    },{
                        label: 'Bot Info',
                        description: 'Show The Bot Info',
                        emoji: '1156921038861512805',
                        value: 'omenbot_info_en_infobot'
                    },{
                        label: 'Rules',
                        description: 'Show the Rules of Discord Server',
                        emoji: '1156921036110049341',
                        value: 'omenbot_info_en_rules'
                    },{
                        label: 'Badgets',
                        description: 'Show the info of our badgets',
                        emoji: '1156921034579116032',
                        value: 'omenbot_info_en_badgets'
                    },{
                        label: 'Beta',
                        description: 'Show info of OmenBot Beta',
                        emoji: '1156921030573576192',
                        value: 'omenbot_info_en_beta'
                    },{
                        label: 'Premium',
                        description: 'Show the info about premium',
                        emoji: '1156921032310014002',
                        value: 'omenbot_info_en_premium'
                    },{
                        label: 'ChangeLogs',
                        description: 'Show The ChangeLogs',
                        emoji: '1156921027423641610',
                        value: 'omenbot_info_en_changelog'
                    }
                ])
            )
            interaction.reply({embeds: [embed], components: [menu], ephemeral: true})
        }

    })
}