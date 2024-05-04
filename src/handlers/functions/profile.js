const { ModalBuilder, Events, TextInputBuilder, TextInputStyle, StringSelectMenuBuilder, ActionRowBuilder, BaseSelectMenuBuilder, TextInputComponent, BaseSelectMenuComponent, EmbedBuilder } = require('discord.js');
const Schema = require('../../database/models/profile');
const User = require('../../database/models/user');
const isHexcolor = require('is-hexcolor');

module.exports = async (client) => {
client.on(Events.InteractionCreate, async (interaction) => {

    if (interaction.customId == "profile_age") {
        const data = await Schema.findOne({ User: interaction.user.id })
        const modal = new ModalBuilder()
        .setCustomId('profile_ageedit')
        .setTitle(`Your cuurent age: ${data.Age}`);

        const age = new TextInputBuilder()
        .setCustomId('modal_age')
        .setLabel("Enter Your Age Here")
        .setStyle(TextInputStyle.Short)
        .setRequired(true)
        .setMinLength(1)
        .setMaxLength(2);

        const modalage = new ActionRowBuilder().addComponents(age);

        modal.addComponents(modalage);
        await interaction.showModal(modal);
    }

    if (interaction.customId === 'profile_ageedit') {
        const age = interaction.fields.getTextInputValue('modal_age');
        const data = await Schema.findOne({ User: interaction.user.id });
        
        data.Age = age;
        data.save();
        interaction.reply({content: 'You set the age to: ' + data.Age, ephemeral: true})
    }

    if (interaction.customId == "profile_status") {
        const data = await Schema.findOne({ User: interaction.user.id })
        const modal = new ModalBuilder()
        .setCustomId('profile_statusedit')
        .setTitle(`Set Your Status`);

        const status = new TextInputBuilder()
        .setCustomId('modal_status')
        .setLabel("Enter Your Status Here")
        .setStyle(TextInputStyle.Short)
        .setRequired(true)
        .setMinLength(1);

        const modalstatus = new ActionRowBuilder().addComponents(status);

        modal.addComponents(modalstatus);
        await interaction.showModal(modal);
    }

    if (interaction.customId === 'profile_statusedit') {
        const status = interaction.fields.getTextInputValue('modal_status');
        const data = await Schema.findOne({ User: interaction.user.id });
        if (status.length > 30) return client.errNormal({ error: "Your status cannot be longer than 30 characters", type: 'ephemeral' }, interaction);
        data.Status = status;
        data.save();
        interaction.reply({content: 'You set your Status to: ' + data.Status, ephemeral: true})
    }

    if (interaction.customId == "profile_nickname") {
        const user = await User.findOne({ Id: interaction.user.id });
        if (user && user.isPremium) {
        const modal = new ModalBuilder()
        .setCustomId('profile_nicknameedit')
        .setTitle(`Set Your NickName`);

        const nickname = new TextInputBuilder()
        .setCustomId('modal_nickname')
        .setLabel("Enter Your Status Here")
        .setStyle(TextInputStyle.Short)
        .setRequired(true)
        .setMinLength(1);

        const modalnickname = new ActionRowBuilder().addComponents(nickname);

        modal.addComponents(modalnickname);
        await interaction.showModal(modal);
        } else {
            const embed = new EmbedBuilder().setColor('#ff0000').setDescription(`\`❌\` | You'r not Premium User.`);
            return interaction.reply({ embeds: [embed], ephemeral: true});
        }
    }

    if (interaction.customId === 'profile_nicknameedit') {
        const nickname = interaction.fields.getTextInputValue('modal_nickname');
        interaction.member.setNickname(nickname)
        interaction.reply({content: 'You NickName is: ' + nickname, ephemeral: true})
    }

    if (interaction.customId == "profile_hobies") {
        const data = await Schema.findOne({ User: interaction.user.id })
        const modal = new ModalBuilder()
        .setCustomId('profile_hobiesedit')
        .setTitle(`Set Your Hobbys`);

        const hobies = new TextInputBuilder()
        .setCustomId('modal_hobies')
        .setLabel("Enter Your Hobbys")
        .setStyle(TextInputStyle.Short)
        .setRequired(true)
        .setMinLength(1);

        const modalhobies = new ActionRowBuilder().addComponents(hobies);

        modal.addComponents(modalhobies);
        await interaction.showModal(modal);
    }

    if (interaction.customId === 'profile_hobiesedit') {
        const hobby = interaction.fields.getTextInputValue('modal_hobies');
        const data = await Schema.findOne({ User: interaction.user.id });
        if (data && data.Hobbys) {
            if (data.Hobbys.includes(hobby)) {
                return client.errNormal({ error: `That hobby is already exists in your database!`, type: 'ephemeral' }, interaction);
            }
            data.Hobbys.push(hobby);
            data.save();
        }
        else {
            data.Hobbys = hobby;
            data.save();
        }
        interaction.reply({content: 'You set your Hobbies to: ' + data.Hobbys, ephemeral: true})
    }

    if (interaction.customId == "profile_origin") {
        const data = await Schema.findOne({ User: interaction.user.id })
        const modal = new ModalBuilder()
        .setCustomId('profile_originedit')
        .setTitle(`Your cuurent Origin: ${data.Orgin}`);

        const origin = new TextInputBuilder()
        .setCustomId('modal_origin')
        .setLabel("Enter Your Age Here")
        .setStyle(TextInputStyle.Short)
        .setRequired(true)
        .setMinLength(1);

        const modalorigin = new ActionRowBuilder().addComponents(origin);

        modal.addComponents(modalorigin);
        await interaction.showModal(modal);
    }

    if (interaction.customId === 'profile_originedit') {
        const origin = interaction.fields.getTextInputValue('modal_origin');
        const data = await Schema.findOne({ User: interaction.user.id });
        if (origin.length > 50) return client.errNormal({ error: "Your origin cannot be longer than 50 characters", type: 'ephemeral' }, interaction);
        data.Orgin = origin;
        data.save();
        interaction.reply({content: 'You set your Country to: ' + data.Orgin, ephemeral: true})
    }

    if (interaction.customId == "profile_actors") {
        const data = await Schema.findOne({ User: interaction.user.id })
        const modal = new ModalBuilder()
        .setCustomId('profile_actorsedit')
        .setTitle(`Set your favorite actors`);

        const actors = new TextInputBuilder()
        .setCustomId('modal_actors')
        .setLabel("Enter Your Actors")
        .setStyle(TextInputStyle.Short)
        .setRequired(true)
        .setMinLength(1);

        const modalactors = new ActionRowBuilder().addComponents(actors);

        modal.addComponents(modalactors);
        await interaction.showModal(modal);
    }

    if (interaction.customId === 'profile_actorsedit') {
        const actor = interaction.fields.getTextInputValue('modal_actors');
        const data = await Schema.findOne({ User: interaction.user.id });
       if (data && data.Actors) {
        if (data.Actors.includes(actor)) {
            return client.errNormal({ error: `That actor is already exists in your database!`, type: 'ephemeral' }, interaction);
        }
        data.Actors.push(actor);
        data.save();
    }
    else {
        data.Actors = actor;
        data.save();
    }
        interaction.reply({content: 'You set your favorite actors to: ' + data.Actors, ephemeral: true})
    }

    if (interaction.customId == "profile_movie") {
        const data = await Schema.findOne({ User: interaction.user.id })
        const modal = new ModalBuilder()
        .setCustomId('profile_movieedit')
        .setTitle(`Set your favoirte Movie`);

        const movie = new TextInputBuilder()
        .setCustomId('modal_movie')
        .setLabel("Enter Your Movie Here")
        .setStyle(TextInputStyle.Short)
        .setRequired(true)
        .setMinLength(1);

        const modalmovie = new ActionRowBuilder().addComponents(movie);

        modal.addComponents(modalmovie);
        await interaction.showModal(modal);
    }

    if (interaction.customId === 'profile_movieedit') {
        const movie = interaction.fields.getTextInputValue('modal_movie');
        const data = await Schema.findOne({ User: interaction.user.id });
        
        if (data && data.Movies) {
            if (data.Movies.includes(movie)) {
                return client.errNormal({ error: `That movie is already exists in your database!`, type: 'ephemeral' }, interaction);
            }
            data.Movies.push(movie);
            data.save();
        }
        else {
            data.Movies = movie;
            data.save();
        }
        interaction.reply({content: 'You set your favorite movie to: ' + data.Movies, ephemeral: true})
    }

    if (interaction.customId == "profile_artist") {
        const data = await Schema.findOne({ User: interaction.user.id })
        const modal = new ModalBuilder()
        .setCustomId('profile_artistedit')
        .setTitle(`Set your favorite Artist`);

        const artist = new TextInputBuilder()
        .setCustomId('modal_artist')
        .setLabel("Enter your artists here")
        .setStyle(TextInputStyle.Short)
        .setRequired(true)
        .setMinLength(1);

        const modalartist = new ActionRowBuilder().addComponents(artist);

        modal.addComponents(modalartist);
        await interaction.showModal(modal);
    }

    if (interaction.customId === 'profile_artistedit') {
        const artist = interaction.fields.getTextInputValue('modal_artist');
        const data = await Schema.findOne({ User: interaction.user.id });
        
        if (data && data.Artists) {
            if (data.Artists.includes(artist)) {
                return client.errNormal({ error: `That artist is already exists in your database!`, type: 'ephemeral' }, interaction);
            }
            data.Artists.push(artist);
            data.save();
        }
        else {
            data.Artists = artist;
            data.save();
        }
        interaction.reply({content: 'You set your favorite artists to: ' + data.Artists, ephemeral: true})
    }

    if (interaction.customId == "profile_song") {
        const data = await Schema.findOne({ User: interaction.user.id })
        const modal = new ModalBuilder()
        .setCustomId('profile_songedit')
        .setTitle(`Set your Favorite Songs`);

        const song = new TextInputBuilder()
        .setCustomId('modal_song')
        .setLabel("Enter your songs")
        .setStyle(TextInputStyle.Short)
        .setRequired(true)
        .setMinLength(1);

        const modalsong = new ActionRowBuilder().addComponents(song);

        modal.addComponents(modalsong);
        await interaction.showModal(modal);
    }

    if (interaction.customId === 'profile_songedit') {
        const song = interaction.fields.getTextInputValue('modal_song');
        const data = await Schema.findOne({ User: interaction.user.id });
        if (data && data.Songs) {
            if (data.Songs.includes(song)) {
                return client.errNormal({ error: `That song is already exists in your database!`, type: 'ephemeral' }, interaction);
            }
            data.Songs.push(song);
            data.save();
        }
        else {
            data.Songs = song;
            data.save();
        }
        interaction.reply({content: 'You set your favorite songs to: ' + data.Songs, ephemeral: true})
    }

    if (interaction.customId == "profile_food") {
        const data = await Schema.findOne({ User: interaction.user.id })
        const modal = new ModalBuilder()
        .setCustomId('profile_foodedit')
        .setTitle(`Set your Favorite Food`);

        const food = new TextInputBuilder()
        .setCustomId('modal_food')
        .setLabel("Enter Your Favorite Food")
        .setStyle(TextInputStyle.Short)
        .setRequired(true)
        .setMinLength(1);

        const modalfood = new ActionRowBuilder().addComponents(food);

        modal.addComponents(modalfood);
        await interaction.showModal(modal);
    }

    if (interaction.customId === 'profile_foodedit') {
        const food = interaction.fields.getTextInputValue('modal_food');
        const data = await Schema.findOne({ User: interaction.user.id });
        if (data && data.Food) {
            if (data.Food.includes(food)) {
                return client.errNormal({ error: `That food is already exists in your database!`, type: 'ephemeral' }, interaction);
            }
            data.Food.push(food);
            data.save();
        }
        else {
            data.Food = food;
            data.save();
        }
        interaction.reply({content: 'You set your favorite food to: ' + data.Food, ephemeral: true})
    }

    if (interaction.customId == "profile_favoritepet") {
        const data = await Schema.findOne({ User: interaction.user.id })
        const modal = new ModalBuilder()
        .setCustomId('profile_petedit')
        .setTitle(`Set your Favorite Pets`);

        const pet = new TextInputBuilder()
        .setCustomId('modal_pet')
        .setLabel("Enter Your Favoirte Pets")
        .setStyle(TextInputStyle.Short)
        .setRequired(true)
        .setMinLength(1);

        const modalpet = new ActionRowBuilder().addComponents(pet);

        modal.addComponents(modalpet);
        await interaction.showModal(modal);
    }

    if (interaction.customId === 'profile_petedit') {
        const pet = interaction.fields.getTextInputValue('modal_pet');
        const data = await Schema.findOne({ User: interaction.user.id });
        if (data && data.Pets) {
            if (data.Pets.includes(pet)) {
                return client.errNormal({ error: `That pet is already exists in your database!`, type: 'ephemeral' }, interaction);
            }
            data.Pets.push(pet);
            data.save();
        }
        else {
            data.Pets = pet;
            data.save();
        }
        interaction.reply({content: 'You set Your favorite pet to: ' + data.Pets, ephemeral: true})
    }

    if (interaction.customId == "profile_aboutme") {
        const modal = new ModalBuilder()
        .setCustomId('profile_aboutmeedit')
        .setTitle(`Set your About Me`);

        const aboutme = new TextInputBuilder()
        .setCustomId('modal_aboutme')
        .setLabel("Enter The Text Here")
        .setStyle(TextInputStyle.Paragraph)
        .setRequired(true)
        .setMinLength(1)
        .setMaxLength(1024);

        const modalaboutme = new ActionRowBuilder().addComponents(aboutme);

        modal.addComponents(modalaboutme);
        await interaction.showModal(modal);
    }

    if (interaction.customId === 'profile_aboutmeedit') {
        const aboutme = interaction.fields.getTextInputValue('modal_aboutme');
        const data = await Schema.findOne({ User: interaction.user.id });
        data.Aboutme = aboutme;
        data.save();
        interaction.reply({content: 'You set the About me to: ' + data.Aboutme, ephemeral: true})
    }

    if (interaction.customId == "profile_gender") {
        const data = await Schema.findOne({ User: interaction.user.id })
        const modal = new ModalBuilder()
        .setCustomId('profile_genderedit')
        .setTitle(`Your cuurent Gender is: ${data.Gender}`);

        const gender = new TextInputBuilder()
        .setCustomId('modal_gender')
        .setLabel("Enter Your Gender Here")
        .setStyle(TextInputStyle.Short)
        .setRequired(true)
        .setMinLength(1);

        const modalgender = new ActionRowBuilder().addComponents(gender);

        modal.addComponents(modalgender);
        await interaction.showModal(modal);
    }

    if (interaction.customId === 'profile_genderedit') {
        const gender = interaction.fields.getTextInputValue('modal_gender');
        const data = await Schema.findOne({ User: interaction.user.id });
        data.Gender = gender;
        data.save();
        interaction.reply({content: 'You set your gender to: ' + data.Gender, ephemeral: true})
    }

    if (interaction.customId == "profile_favoritecolor") {
        const data = await Schema.findOne({ User: interaction.user.id })
        const modal = new ModalBuilder()
        .setCustomId('profile_coloredit')
        .setTitle(`Your cuurent Color is: ${data.Color}`);

        const color = new TextInputBuilder()
        .setCustomId('modal_color')
        .setLabel("EX: #800080")
        .setStyle(TextInputStyle.Short)
        .setRequired(true)
        .setMinLength(1);

        const modalcolor = new ActionRowBuilder().addComponents(color);

        modal.addComponents(modalcolor);
        await interaction.showModal(modal);
    }

    if (interaction.customId === 'profile_coloredit') {
        const color = interaction.fields.getTextInputValue('modal_color');
        const data = await Schema.findOne({ User: interaction.user.id });
        if (!isHexcolor(color)) return client.errNormal({ error: "You did not specify an hex color! Example: #ff0000", type: 'ephemeral' }, interaction);
        data.Color = color;
        data.save();
        interaction.reply({content: 'You set your favorite color to: ' + data.Color, ephemeral: true})
    }
    
    if (interaction.customId == "profile_birthday") {
        const data = await Schema.findOne({ User: interaction.user.id })
        const modal = new ModalBuilder()
        .setCustomId('profile_birthdayedit')
        .setTitle(`Set Your BirthDay`);

        const birthday = new TextInputBuilder()
        .setCustomId('modal_birthday')
        .setLabel("Enter Here Your BirthDay")
        .setStyle(TextInputStyle.Short)
        .setRequired(true)
        .setMinLength(1);

        const modalbirthday = new ActionRowBuilder().addComponents(birthday);

        modal.addComponents(modalbirthday);
        await interaction.showModal(modal);
    }

    if (interaction.customId === 'profile_birthdayedit') {
        const birthday = interaction.fields.getTextInputValue('modal_birthday');
        const data = await Schema.findOne({ User: interaction.user.id });
        const split = birthday.trim().split("/");

    let [day, month] = split;

    if (!day || !month) return client.errUsage({ usage: "setbday [day]/[month]", type: 'ephemeral' }, interaction);

    if (isNaN(day) || isNaN(month)) {
        return client.errNormal({ error: "The date you gave is not a valid number", type: 'ephemeral' }, interaction);
    }

    day = parseInt(day);
    month = parseInt(month);

    if (!day || day > 31) return client.errNormal({ error: "Wrong day format!", type: 'ephemeral' }, interaction);
    if (!month || month > 12) return client.errNormal({ error: "Wrong month format!", type: 'ephemeral' }, interaction);

    const bday = `${day}/${month}`;

        data.Birthday = bday;
        data.save();
        interaction.reply({content: 'You set your birthday to: ' + data.Birthday, ephemeral: true})
    }

    if (interaction.customId == "profile_background") {
        const data = await Schema.findOne({ User: interaction.user.id })
        const modal = new ModalBuilder()
        .setCustomId('profile_backgroundedit')
        .setTitle(`Set Your Profile Background`);

        const age = new TextInputBuilder()
        .setCustomId('modal_background')
        .setLabel("Enter There The URL")
        .setStyle(TextInputStyle.Short)
        .setRequired(true)
        .setMinLength(1);

        const modalage = new ActionRowBuilder().addComponents(age);

        modal.addComponents(modalage);
        await interaction.showModal(modal);
    }

    if (interaction.customId === 'profile_backgroundedit') {
        const image = interaction.fields.getTextInputValue('modal_background');
        const user = await User.findOne({ Id: interaction.user.id });
        if (user && user.isPremium) {
        const data = await Schema.findOne({ User: interaction.user.id });
    const isUrlCorrect = new URL(image);
    if (!isUrlCorrect) return client.errNormal({ error: "You send a wrong URL type", type: 'ephemeral' }, interaction);
            data.Background = image;
            data.save();
            const embed = new EmbedBuilder()
            .setTitle('New Background')
            .setDescription('You set this background for your personalizated commands')
            .setImage(image)
        interaction.reply({embeds: [embed], ephemeral: true})
        } else {
            const embed = new EmbedBuilder().setColor('#ff0000').setDescription(`\`❌\` | You'r not Premium User.`);
            return interaction.reply({ embeds: [embed], ephemeral: true});
        }
    }
    
    if (interaction.customId === 'profile_delete') {
        Schema.findOneAndDelete({ User: interaction.user.id }).then(() => {
            interaction.update({components: [], embeds: [], content: 'Your Profile was deleted!'})
        })
    }
    if (interaction.customId === 'profile_done') {
        interaction.update({components: [], embeds: [], content: 'Your Profile was Saved Successfuly!'})
    }
    })
}