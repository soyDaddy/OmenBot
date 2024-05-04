const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js')
const Schema = require('../../database/models/profile');

module.exports = async (client, interaction, args) => {
    
    Schema.findOne({ User: interaction.user.id }, async (err, data) => {

        if (data) {
            const embed = new EmbedBuilder()
                .setTitle('🛑 You can edit your Profile here 🛑')
                .setDescription('Edit whatever you want there.')
                .setColor('#800080')
    
            const buttons1 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder().setCustomId('profile_age').setLabel('Age').setEmoji('🔢').setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder().setCustomId('profile_gender').setLabel('Gender').setEmoji('👨‍👩‍👦').setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder().setCustomId('profile_birthday').setLabel('BirthDay').setEmoji('🎂').setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder().setCustomId('profile_favoritecolor').setLabel('Favorite Color').setEmoji('🎨').setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder().setCustomId('profile_favoritepet').setLabel('Favorite Pet').setEmoji('🐶').setStyle(ButtonStyle.Secondary),
                )
            const buttons2 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder().setCustomId('profile_food').setLabel('Favorite Food').setEmoji('🍕').setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder().setCustomId('profile_song').setLabel('Favorite Song').setEmoji('🎶').setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder().setCustomId('profile_artist').setLabel('Favorite Artist').setEmoji('🎤').setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder().setCustomId('profile_movie').setLabel('Favorite Movie').setEmoji('🎬').setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder().setCustomId('profile_actors').setLabel('Favorite Actors').setEmoji('👨‍🎤').setStyle(ButtonStyle.Secondary),
                )
            const buttons3 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder().setCustomId('profile_origin').setLabel('Origin').setEmoji('🏴').setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder().setCustomId('profile_hobies').setLabel('Hobby\'s').setEmoji('🎮').setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder().setCustomId('profile_status').setLabel('Status').setEmoji('😛').setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder().setCustomId('profile_aboutme').setLabel('About Me').setEmoji('ℹ️').setStyle(ButtonStyle.Secondary),
                    new ButtonBuilder().setCustomId('profile_background').setLabel('Background (PREMIUM)').setEmoji('🖼️').setStyle(ButtonStyle.Secondary),
                )
            const buttons5 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder().setCustomId('profile_nickname').setLabel('Change NickName (PREMIUM)').setEmoji('🏴').setStyle(ButtonStyle.Secondary),
                )
            const buttons4 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder().setCustomId('profile_delete').setLabel('Delete').setEmoji('⚠️').setStyle(ButtonStyle.Danger),
                    new ButtonBuilder().setCustomId('profile_done').setLabel('Save').setEmoji('✅').setStyle(ButtonStyle.Success),
                )
            interaction.editReply({embeds: [embed], components: [buttons1, buttons2, buttons3, buttons5, buttons4]})
        } else {
            return client.errNormal({ error: "No profile found! Open a profile with </profile create:1148392150762000415>", type:'editreply' }, interaction);
        }
    })    
} 