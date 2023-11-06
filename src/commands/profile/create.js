const Schema = require('../../database/models/profile');
const User = require('../../database/models/user');
const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js')
module.exports = async (client, interaction, args) => {
    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {
            return client.errNormal({ error: "You already have a Bot profile", type: "editreply" }, interaction);
        }
        else {
            new Schema({
                User: interaction.user.id
            }).save();
            
            new User({
                Id: interaction.user.id
            }).save();

            const embed = new EmbedBuilder()
            .setTitle('🛑 You new Profile is created 🛑')
            .setDescription('You can set all the stuff there or use </profile edit:1148392150762000415> to change something.')
            .setColor('#800080')
    
        const buttons1 = new ActionRowBuilder()
            .addComponents(
        new ButtonBuilder()
            .setCustomId('profile_age')
            .setLabel('Age')
            .setEmoji('🔢')
            .setStyle(ButtonStyle.Secondary),
         new ButtonBuilder()
            .setCustomId('profile_gender')
            .setLabel('Gender')
            .setEmoji('👨‍👩‍👦')
            .setStyle(ButtonStyle.Secondary),
        new ButtonBuilder()
            .setCustomId('profile_birthday')
            .setLabel('BirthDay')
            .setEmoji('🎂')
            .setStyle(ButtonStyle.Secondary),
        new ButtonBuilder()
            .setCustomId('profile_favoritecolor')
            .setLabel('Favorite Color')
            .setEmoji('🎨')
            .setStyle(ButtonStyle.Secondary),
        new ButtonBuilder()
            .setCustomId('profile_favoritepet')
            .setLabel('Favorite Pet')
            .setEmoji('🐶')
            .setStyle(ButtonStyle.Secondary),
            )

        const buttons2 = new ActionRowBuilder()
            .addComponents(
        new ButtonBuilder()
            .setCustomId('profile_food')
            .setLabel('Favorite Food')
            .setEmoji('🍕')
            .setStyle(ButtonStyle.Secondary),
         new ButtonBuilder()
            .setCustomId('profile_song')
            .setLabel('Favorite Song')
            .setEmoji('🎶')
            .setStyle(ButtonStyle.Secondary),
        new ButtonBuilder()
            .setCustomId('profile_artist')
            .setLabel('Favorite Artist')
            .setEmoji('🎤')
            .setStyle(ButtonStyle.Secondary),
        new ButtonBuilder()
            .setCustomId('profile_movie')
            .setLabel('Favorite Movie')
            .setEmoji('🎬')
            .setStyle(ButtonStyle.Secondary),
        new ButtonBuilder()
            .setCustomId('profile_actors')
            .setLabel('Favorite Actors')
            .setEmoji('👨‍🎤')
            .setStyle(ButtonStyle.Secondary),
            )
        
        const buttons3 = new ActionRowBuilder()
            .addComponents(
        new ButtonBuilder()
            .setCustomId('profile_origin')
            .setLabel('Origin')
            .setEmoji('🏴')
            .setStyle(ButtonStyle.Secondary),
         new ButtonBuilder()
            .setCustomId('profile_hobies')
            .setLabel('Hobby\'s')
            .setEmoji('🎮')
            .setStyle(ButtonStyle.Secondary),
        new ButtonBuilder()
            .setCustomId('profile_status')
            .setLabel('Status')
            .setEmoji('😛')
            .setStyle(ButtonStyle.Secondary),
        new ButtonBuilder()
            .setCustomId('profile_aboutme')
            .setLabel('About Me')
            .setEmoji('ℹ️')
            .setStyle(ButtonStyle.Secondary),
        new ButtonBuilder()
            .setCustomId('profile_background')
            .setLabel('Background (PREMIUM)')
            .setEmoji('🖼️')
            .setStyle(ButtonStyle.Secondary),
            )
    const buttons4 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder().setCustomId('profile_done').setLabel('Save').setEmoji('✅').setStyle(ButtonStyle.Success),
        )

    interaction.editReply({embeds: [embed], components: [buttons1, buttons2, buttons3, buttons4]})
        }
    })
}

 