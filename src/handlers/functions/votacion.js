const Discord = require('discord.js');
const pollschema = require('../../database/models/vote');
const pollsetup = require('../../database/models/votesetup');
const Locales = require('../../database/models/functions')

module.exports = async (client) => {
client.on(Discord.Events.MessageCreate, async (message) => {
    if (!message.guild) return;
    const setupdata = await pollsetup.findOne({ Guild: message.guild.id });
    if (!setupdata) return;
    if (message.channel.id !== setupdata.Channel) return;
    if (message.author.bot) return;
    const settings = await Locales.findOne({ Guild: message.guild.id });
    const getMessage = global.i18n.getLocale(settings.Locale || 'es-ES');
    const embed = new Discord.EmbedBuilder()
    .setColor("#800080")
    .setAuthor({ name: message.author.username, iconURL: message.author.displayAvatarURL({ dynamic: true, size: 1024 })})
    .setTitle(getMessage(`message.command.suggestion.embed.title`))
    .setThumbnail('https://cdn.discordapp.com/attachments/1080219392337522718/1101856064045072505/largepink.png')
    .setDescription(`> ${message.content}`)
    .addFields({ name: getMessage(`message.command.suggestion.embed.fields.f1.name`), value: getMessage(`message.command.suggestion.embed.fields.f1.value`), inline: true})
    .addFields({ name: getMessage(`message.command.suggestion.embed.fields.f2.name`), value: getMessage(`message.command.suggestion.embed.fields.f2.value`), inline: true})
    .addFields({ name: getMessage(`message.command.suggestion.embed.fields.f3.name`), value: `> ${message.author}`})
    .setFooter({ text: getMessage(`message.command.suggestion.embed.footer`)})
    .setTimestamp()
 
    try {
        await message.delete();
    } catch (error) {
        console.log(error)
    }

    const buttons = new Discord.ActionRowBuilder()
    .addComponents(

        new Discord.ButtonBuilder()
        .setCustomId('up')
        .setLabel(' ')
        .setEmoji('<a:CHECK_CHECK:1136721352984899725>')
        .setStyle(Discord.ButtonStyle.Secondary),

        new Discord.ButtonBuilder()
        .setCustomId('down')
        .setLabel(' ')
        .setEmoji('<a:CHECK_CROSS:1136721458245152879>')
        .setStyle(Discord.ButtonStyle.Secondary),

        new Discord.ButtonBuilder()
        .setCustomId('votes')
        .setLabel(getMessage(`message.command.suggestion.embed.button`))
        .setEmoji('<a:X_dec_letter:1136725397300580372>')
        .setStyle(Discord.ButtonStyle.Secondary)
    )

    const msg = await message.channel.send({ embeds: [embed], components: [buttons] });
    msg.createMessageComponentCollector({componentType: Discord.ComponentType.Button});
    msg.startThread({
        name: `${getMessage(`message.command.suggestion.embed.thread`)} ${message.author.username}`,
        autoArchiveDuration: 60,
        type: 'GUILD_PUBLIC_THREAD',
        reason: 'Sugerencias'
    });

    await pollschema.create({
        Msg: msg.id,
        Upvote: 0,
        Downvote: 0,
        UpMembers: [],
        DownMembers: [],
        Guild: message.guild.id,
        Owner: message.author.id
    })
})

client.on(Discord.Events.InteractionCreate, async (interaction) => {
    if (!interaction.guild) return;
    if (!interaction.message) return;
    
    const data = await pollschema.findOne({ Guild: interaction.guild.id, Msg: interaction.message.id });
    const settings = await Locales.findOne({ Guild: interaction.guild.id });
    const getMessage = global.i18n.getLocale(settings.Locale || 'es-ES');

        if (interaction.customId === 'up') {
            const msg = await interaction.channel.messages.fetch(data.Msg)
            if (interaction.user.id === data.Owner) return await interaction.reply({ content: getMessage(`message.command.suggestion.vote.yourself`), ephemeral: true });
            if (data.UpMembers.includes(interaction.user.id)) return await interaction.reply({ content: getMessage(`message.command.suggestion.vote.again`), ephemeral: true});

            let downvotes = data.Downvote;
            if (data.DownMembers.includes(interaction.user.id)) {
                downvotes = downvotes - 1;
            }

            const newembed = Discord.EmbedBuilder.from(msg.embeds[0]).setFields({ name: getMessage(`message.command.suggestion.embed.fields.f1.name`), value: `> **${data.Upvote + 1}** ${getMessage(`message.command.suggestion.vote.name`)}`, inline: true}, { name: getMessage(`message.command.suggestion.embed.fields.f2.name`), value: `> **${downvotes}** ${getMessage(`message.command.suggestion.vote.name`)}`, inline: true}, { name: getMessage(`message.command.suggestion.embed.fields.f3.name`), value: `> <@${data.Owner}>`});

            const buttons = new Discord.ActionRowBuilder()
            .addComponents(
                new Discord.ButtonBuilder()
                .setCustomId('up')
                .setEmoji('<a:CHECK_CHECK:1136721352984899725>')
                .setLabel(`${data.Upvote + 1}`)
                .setStyle(Discord.ButtonStyle.Secondary),

                new Discord.ButtonBuilder()
                .setCustomId('down')
                .setEmoji('<a:CHECK_CROSS:1136721458245152879>')
                .setLabel(`${downvotes}`)
                .setStyle(Discord.ButtonStyle.Secondary),

                new Discord.ButtonBuilder()
                .setCustomId('votes')
                .setLabel(getMessage(`message.command.suggestion.embed.button`))
                .setEmoji('<a:X_dec_letter:1136725397300580372>')
                .setStyle(Discord.ButtonStyle.Secondary)
            )

            await interaction.update({ embeds: [newembed], components: [buttons] })

            data.Upvote++

            if (data.DownMembers.includes(interaction.user.id)) {
                data.Downvote = data.Downvote - 1;
            }

            data.UpMembers.push(interaction.user.id)
            data.DownMembers.pull(interaction.user.id)
            data.save();
            
        }

        if (interaction.customId === 'down') {
            const msg = await interaction.channel.messages.fetch(data.Msg)
            if (interaction.user.id === data.Owner) return await interaction.reply({ content: getMessage(`message.command.suggestion.vote.yourself`), ephemeral: true });
            if (data.DownMembers.includes(interaction.user.id)) return await interaction.reply({ content: getMessage(`message.command.suggestion.vote.again`), ephemeral: true});

            let upvotes = data.Upvote;
            if (data.UpMembers.includes(interaction.user.id)) {
                upvotes = upvotes - 1;
            }

            const newembed = Discord.EmbedBuilder.from(msg.embeds[0]).setFields({ name: getMessage(`message.command.suggestion.embed.fields.f1.name`), value: `> **${upvotes}** ${getMessage(`message.command.suggestion.vote.name`)}`, inline: true}, { name:getMessage(`message.command.suggestion.embed.fields.f2.name`), value: `> **${data.Downvote + 1}** ${getMessage(`message.command.suggestion.vote.name`)}`, inline: true}, { name: getMessage(`message.command.suggestion.embed.fields.f3.name`), value: `> <@${data.Owner}>`});

            const buttons = new Discord.ActionRowBuilder()
            .addComponents(

                new Discord.ButtonBuilder()
                .setCustomId('up')
                .setEmoji('<a:CHECK_CHECK:1136721352984899725>')
                .setLabel(`${upvotes}`)
                .setStyle(Discord.ButtonStyle.Secondary),

                new Discord.ButtonBuilder()
                .setCustomId('down')
                .setEmoji('<a:CHECK_CROSS:1136721458245152879>')
                .setLabel(`${data.Downvote + 1}`)
                .setStyle(Discord.ButtonStyle.Secondary),

                new Discord.ButtonBuilder()
                .setCustomId('votes')
                .setLabel(getMessage(`message.command.suggestion.embed.button`))
                .setEmoji('<a:X_dec_letter:1136725397300580372>')
                .setStyle(Discord.ButtonStyle.Secondary)
            )

            await interaction.update({ embeds: [newembed], components: [buttons] })

            data.Downvote++

            if (data.UpMembers.includes(interaction.user.id)) {
                data.Upvote = data.Upvote - 1;
            }

            data.DownMembers.push(interaction.user.id);
            data.UpMembers.pull(interaction.user.id);
            data.save();
            
        }

        if (interaction.customId === 'votes') {
            const msg = await interaction.channel.messages.fetch(data.Msg)
            let upvoters = [];
            await data.UpMembers.forEach(async member => {
                upvoters.push(`<@${member}>`)
            })

            let downvoters = [];
            await data.DownMembers.forEach(async member => {
                downvoters.push(`<@${member}>`)
            })

            const embed = new Discord.EmbedBuilder()
            .setTitle(getMessage(`message.command.suggestion.votes.embed.title`))
            .setColor("#800080")
            .setThumbnail('https://cdn.discordapp.com/attachments/1080219392337522718/1101856064045072505/largepink.png')
            .setAuthor({ name: getMessage(`message.command.suggestion.votes.embed.author`)})
            .setFooter({ text: getMessage(`message.command.suggestion.votes.embed.footer`)})
            .setTimestamp()
            .addFields({ name: `${getMessage(`message.command.suggestion.votes.embed.fields.f1.name`)} (${upvoters.length})`, value: `> ${upvoters.join(', ').slice(0, 1020) || getMessage(`message.command.suggestion.votes.embed.fields.f1.value`)}`, inline: true})
            .addFields({ name: `${getMessage(`message.command.suggestion.votes.embed.fields.f2.name`)} (${downvoters.length})`, value: `> ${downvoters.join(', ').slice(0, 1020) || getMessage(`message.command.suggestion.votes.embed.fields.f2.value`)}`, inline: true})

            await interaction.reply({ embeds: [embed], ephemeral: true })
        }
})
}