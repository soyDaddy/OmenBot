const Discord = require('discord.js');
const Schema = require("../../database/models/functions");

module.exports = (client) => {
    client.templateEmbed = function () {
        return new Discord.EmbedBuilder()
            .setAuthor({
                name: client.user.username,
                iconURL: client.user.avatarURL({ size: 1024 })
            })
            .setColor(client.config.colors.normal)
            .setFooter({
                text: client.config.discord.footer,
                iconURL: client.user.avatarURL({ size: 1024 })
            })
            .setTimestamp();
    }

    client.errNormal = async function ({
        embed: embed = client.templateEmbed(),
        error: error,
        type: type,
        content: content,
        components: components
    }, interaction) {
        embed.setTitle(`${client.emotes.normal.error}・Error!`)
        embed.setDescription(`Algo salió mal!`)
        embed.addFields( 
            { name: "💬┆Error", value: `\`\`\`${error}\`\`\``},
        )
        embed.setColor(client.config.colors.error)

        return client.sendEmbed({
            embeds: [embed],
            content: content,
            components: components,
            type: type
        }, interaction)
    }

    // Missing args
    client.errUsage = async function ({
        embed: embed = client.templateEmbed(),
        usage: usage,
        type: type,
        content: content,
        components: components
    }, interaction) {
        embed.setTitle(`${client.emotes.normal.error}・Error!`)
        embed.setDescription(`No has usado bien el comando`)
        embed.addFields(
            { name: "💬┆Argumentos necesarios", value: `\`\`\`${usage}\`\`\``},    
        )
        embed.setColor(client.config.colors.error)

        return client.sendEmbed({
            embeds: [embed],
            content: content,
            components: components,
            type: type
        }, interaction)
    }

    // Missing perms

    client.errMissingPerms = async function ({
        embed: embed = client.templateEmbed(),
        perms: perms,
        type: type,
        content: content,
        components: components
    }, interaction) {
        embed.setTitle(`${client.emotes.normal.error}・Error!`)
        embed.setDescription(`No tienes los permisos correctos`)
        embed.addFields(
            { name: "🔑┆Permisos Necesarios", value: `\`\`\`${perms}\`\`\``},
        )
        embed.setColor(client.config.colors.error)

        return client.sendEmbed({
            embeds: [embed],
            content: content,
            components: components,
            type: type
        }, interaction)
    }

    // No bot perms

    client.errNoPerms = async function ({
        embed: embed = client.templateEmbed(),
        perms: perms,
        type: type,
        content: content,
        components: components
    }, interaction) {
        embed.setTitle(`${client.emotes.normal.error}・Error!`)
        embed.setDescription(`No tengo los permisos necesarios`)
        embed.addFields(
            { name: "🔑┆Permisos Necesarios", value: `\`\`\`${perms}\`\`\``},
        )
        embed.setColor(client.config.colors.error)

        return client.sendEmbed({
            embeds: [embed],
            content: content,
            components: components,
            type: type
        }, interaction)
    }

    // Wait error

    client.errWait = async function ({
        embed: embed = client.templateEmbed(),
        time: time,
        type: type,
        content: content,
        components: components
    }, interaction) {
        embed.setTitle(`${client.emotes.normal.error}・Error!`)
        embed.setDescription(`Ya has hecho esto una vez`)
        embed.addFields(
            { name: "⏰┆Vuelvelo a intentar en", value: `<t:${time}:f>`},
        )
        embed.setColor(client.config.colors.error)

        return client.sendEmbed({
            embeds: [embed],
            content: content,
            components: components,
            type: type
        }, interaction)
    }

    //----------------------------------------------------------------//
    //                        SUCCES MESSAGES                         //
    //----------------------------------------------------------------//

    // Normal succes
    client.succNormal = async function ({
        embed: embed = client.templateEmbed(),
        text: text,
        fields: fields,
        type: type,
        content: content,
        components: components
    }, interaction) {
        embed.setTitle(`${client.emotes.normal.check}・Success!`)
        embed.setDescription(`${text}`)
        embed.setColor(client.config.colors.succes)

        if (fields) embed.addFields(fields);

        return client.sendEmbed({
            embeds: [embed],
            content: content,
            components: components,
            type: type
        }, interaction)
    }

    //----------------------------------------------------------------//
    //                        BASIC MESSAGES                          //
    //----------------------------------------------------------------//

    // Default
    client.embed = async function ({
        embed: embed = client.templateEmbed(),
        title: title,
        desc: desc,
        color: color,
        image: image,
        author: author,
        url: url,
        footer: footer,
        thumbnail: thumbnail,
        fields: fields,
        content: content,
        components: components,
        type: type
    }, interaction) {
        if (interaction.guild == undefined) interaction.guild = { id: "0" };
        const functiondata = await Schema.findOne({ Guild: interaction.guild.id })

        if (title) embed.setTitle(title);
        if (desc && desc.length >= 2048) embed.setDescription(desc.substr(0, 2044) + "...");
        else if (desc) embed.setDescription(desc);
        if (image) embed.setImage(image);
        if (thumbnail) embed.setThumbnail(thumbnail);
        if (fields) embed.addFields(fields);
        if (author) embed.setAuthor(author);
        if (url) embed.setURL(url);
        if (footer) embed.setFooter({ text: footer });
        if (color) embed.setColor(color);
        if (functiondata && functiondata.Color && !color) embed.setColor(functiondata.Color)
        return client.sendEmbed({
            embeds: [embed],
            content: content,
            components: components,
            type: type
        }, interaction)
    }

    client.simpleEmbed = async function ({
        title: title,
        desc: desc,
        color: color,
        image: image,
        author: author,
        thumbnail: thumbnail,
        fields: fields,
        url: url,
        content: content,
        components: components,
        type: type
    }, interaction) {
        const functiondata = await Schema.findOne({ Guild: interaction.guild.id })

        let embed = new Discord.EmbedBuilder()
            .setColor(client.config.colors.normal)

        if (title) embed.setTitle(title);
        if (desc && desc.length >= 2048) embed.setDescription(desc.substr(0, 2044) + "...");
        else if (desc) embed.setDescription(desc);
        if (image) embed.setImage(image);
        if (thumbnail) embed.setThumbnail(thumbnail);
        if (fields) embed.addFields(fields);
        if (author) embed.setAuthor(author[0], author[1]);
        if (url) embed.setURL(url);
        if (color) embed.setColor(color);
        if (functiondata && functiondata.Color && !color) embed.setColor(functiondata.Color)

        return client.sendEmbed({
            embeds: [embed],
            content: content,
            components: components,
            type: type
        }, interaction)
    }

    client.sendEmbed = async function ({
        embeds: embeds,
        content: content,
        components: components,
        type: type
    }, interaction) {
        if (type && type.toLowerCase() == "edit") {
            return await interaction.edit({
                embeds: embeds,
                content: content,
                components: components,
                fetchReply: true
            }).catch(e => { });
        }
        else if (type && type.toLowerCase() == "editreply") {
            return await interaction.editReply({
                embeds: embeds,
                content: content,
                components: components,
                fetchReply: true
            }).catch(e => { });
        }
        else if (type && type.toLowerCase() == "reply") {
            return await interaction.reply({
                embeds: embeds,
                content: content,
                components: components,
                fetchReply: true
            }).catch(e => { });
        }
        else if (type && type.toLowerCase() == "update") {
            return await interaction.update({
                embeds: embeds,
                content: content,
                components: components,
                fetchReply: true
            }).catch(e => { });
        }
        else if (type && type.toLowerCase() == "ephemeraledit") {
            return await interaction.editReply({
                embeds: embeds,
                content: content,
                components: components,
                fetchReply: true,
                ephemeral: true
            }).catch(e => { });
        }
        else if (type && type.toLowerCase() == "ephemeral") {
            return await interaction.reply({
                embeds: embeds,
                content: content,
                components: components,
                fetchReply: true,
                ephemeral: true
            }).catch(e => { });
        }
        else {
            return await interaction.send({
                embeds: embeds,
                content: content,
                components: components,
                fetchReply: true
            }).catch(e => { });
        }
    }
}

 