const Discord = require('discord.js');
const Canvas = require('canvas')
const invites = require("../../database/models/invites");
const invitedBy = require("../../database/models/inviteBy");
const welcomeSchema = require("../../database/models/welcomeChannels");
const messages = require("../../database/models/inviteMessages");
const rewards = require("../../database/models/inviteRewards");

module.exports = async (client, member, invite, inviter) => {
    const messageData = await messages.findOne({ Guild: member.guild.id });

    Canvas.registerFont(require("@canvas-fonts/arial-bold-italic"), { family: "Arial Bold Italic" });

    // Create Canvas
    const canvas = Canvas.createCanvas(1024, 450);
    const ctx = canvas.getContext("2d");

    // Draw background
    ctx.fillStyle = '#9b9b9b';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    let background = await Canvas.loadImage(messageData.inviteImage);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    // img 
    let b = await Canvas.loadImage('https://cdn.discordapp.com/attachments/1109913006294442085/1149020654646067292/image.png');
    ctx.drawImage(b, 0, 0, canvas.width, canvas.height);

    // Draw username
    ctx.globalAlpha = 1;
    ctx.font = "45px Arial Bold Italic";
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff';
    const userName = member.user.username.length > 13 ? member.user.username.substring(0, 10) + "..." : member.user.username;
    ctx.fillText(userName, canvas.width - 870, canvas.height - 60);
    
    // Draw guild name
    ctx.globalAlpha = 1;
    ctx.font = "45px Arial Bold Italic";
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff';
    const guildName = member.guild.name.length > 15 ? member.guild.name.substring(0, 10) + "..." : member.guild.name;
    ctx.fillText(guildName, canvas.width - 225, canvas.height - 44);

    // Draw membercount
    ctx.fillStyle = '#ffffff';
    ctx.font = "22px Arial Bold Italic";
    ctx.fillText(`Member nº ${member.guild.memberCount}`, 90, canvas.height - 15);

    // Draw guild circle
    ctx.save()
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#23272a';
    ctx.arc(canvas.width - 150, canvas.height - 200, 80, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.closePath();
    ctx.clip();
    const guildIco = await Canvas.loadImage(member.guild.iconURL({ extension: "png" }));
    ctx.drawImage(guildIco, canvas.width - 230, canvas.height - 280, 160, 160);
    ctx.restore();

    // Draw avatar circle
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#23272a';
    ctx.arc(180, 160, 110, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.closePath();
    ctx.clip();
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ extension: "png" }));
    ctx.drawImage(avatar, 45, 40, 270, 270);
    ctx.restore();

const welcomeImage = new Discord.AttachmentBuilder(canvas.toBuffer(), { name: 'welcome.png'});

    if (!invite || !inviter) {
        if (messageData && messageData.inviteJoin) {
            var joinMessage = messageData.inviteJoin;
            joinMessage = joinMessage.replace(`{user:username}`, member.user.username)
            joinMessage = joinMessage.replace(`{user:discriminator}`, member.user.discriminator)
            joinMessage = joinMessage.replace(`{user:tag}`, member.user.tag)
            joinMessage = joinMessage.replace(`{user:mention}`, member)
            joinMessage = joinMessage.replace(`{user:mention2}`, member)
            joinMessage = joinMessage.replace(`{inviter:username}`, "System")
            joinMessage = joinMessage.replace(`{inviter:discriminator}`, "#0000")
            joinMessage = joinMessage.replace(`{inviter:tag}`, "System#0000")
            joinMessage = joinMessage.replace(`{inviter:mention}`, "System")
            joinMessage = joinMessage.replace(`{inviter:invites}`, "∞")
            joinMessage = joinMessage.replace(`{inviter:invites:left}`, "∞")
            joinMessage = joinMessage.replace(`{guild:name}`, member.guild.name)
            joinMessage = joinMessage.replace(`{guild:members}`, member.guild.memberCount)

            welcomeSchema.findOne({ Guild: member.guild.id }, async (err, channelData) => {
                if (channelData) {

                    var channel = member.guild.channels.cache.get(channelData.Channel)

                    await channel.send({ content: joinMessage, files: [welcomeImage] }).catch(() => { })
                }
            })
        } else {
            welcomeSchema.findOne({ Guild: member.guild.id }, async (err, channelData) => {
                if (channelData) {

                    var channel = member.guild.channels.cache.get(channelData.Channel)

                    client.embed({
                        title: `👋・Welcome`,
                        desc: `I cannot trace how **${member} | ${member.user.tag}** has been joined`,
                    }, channel).catch(() => { })
                }
            })
        }
    }
    else {
        const data = await invites.findOne({ Guild: member.guild.id, User: inviter.id });

        if (data) {
            data.Invites += 1;
            data.Total += 1;
            data.save();

            if (messageData) {
                var joinMessage = messageData.inviteJoin;
                joinMessage = joinMessage.replace(`{user:username}`, member.user.username)
                joinMessage = joinMessage.replace(`{user:discriminator}`, member.user.discriminator)
                joinMessage = joinMessage.replace(`{user:tag}`, member.user.tag)
                joinMessage = joinMessage.replace(`{user:mention}`, member)
                joinMessage = joinMessage.replace(`{user:mention2}`, member)
                joinMessage = joinMessage.replace(`{inviter:username}`, inviter.username)
                joinMessage = joinMessage.replace(`{inviter:discriminator}`, inviter.discriminator)
                joinMessage = joinMessage.replace(`{inviter:tag}`, inviter.tag)
                joinMessage = joinMessage.replace(`{inviter:mention}`, inviter)
                joinMessage = joinMessage.replace(`{inviter:invites}`, data.Invites)
                joinMessage = joinMessage.replace(`{inviter:invites:left}`, data.Left)
                joinMessage = joinMessage.replace(`{guild:name}`, member.guild.name)
                joinMessage = joinMessage.replace(`{guild:members}`, member.guild.memberCount)

                welcomeSchema.findOne({ Guild: member.guild.id }, async (err, channelData) => {
                    if (channelData) {

                        var channel = member.guild.channels.cache.get(channelData.Channel)
    
                        await channel.send({ content: joinMessage, files: [welcomeImage] }).catch(() => { })
                    }
                })
            }
            else {
                welcomeSchema.findOne({ Guild: member.guild.id }, async (err, channelData) => {
                    if (channelData) {

                        var channel = member.guild.channels.cache.get(channelData.Channel)

                        client.embed({
                            title: `👋・Welcome`,
                            desc: `**${member} | ${member.user.tag}** was invited by ${inviter.tag} **(${data.Invites} invites)**`
                        }, channel)
                    }
                })
            }

            rewards.findOne({ Guild: member.guild.id, Invites: data.Invites }, async (err, data) => {
                if (data) {
                    try {
                        var role = member.guild.roles.cache.get(data.Role);
                        member.roles.add(role);
                    }
                    catch { }
                }
            })
        }
        else {
            new invites({
                Guild: member.guild.id,
                User: inviter.id,
                Invites: 1,
                Total: 1,
                Left: 0
            }).save();

            if (messageData) {
                var joinMessage = messageData.inviteJoin;
                joinMessage = joinMessage.replace(`{user:username}`, member.user.username)
                joinMessage = joinMessage.replace(`{user:discriminator}`, member.user.discriminator)
                joinMessage = joinMessage.replace(`{user:tag}`, member.user.tag)
                joinMessage = joinMessage.replace(`{user:mention}`, member)
                joinMessage = joinMessage.replace(`{user:mention2}`, member)
                joinMessage = joinMessage.replace(`{inviter:username}`, inviter.username)
                joinMessage = joinMessage.replace(`{inviter:discriminator}`, inviter.discriminator)
                joinMessage = joinMessage.replace(`{inviter:tag}`, inviter.tag)
                joinMessage = joinMessage.replace(`{inviter:mention}`, inviter)
                joinMessage = joinMessage.replace(`{inviter:invites}`, "1")
                joinMessage = joinMessage.replace(`{inviter:invites:left}`, "0")
                joinMessage = joinMessage.replace(`{guild:name}`, member.guild.name)
                joinMessage = joinMessage.replace(`{guild:members}`, member.guild.memberCount)

                welcomeSchema.findOne({ Guild: member.guild.id }, async (err, channelData) => {
                    if (channelData) {

                        var channel = member.guild.channels.cache.get(channelData.Channel)

                        await channel.send({ content: joinMessage, files: [welcomeImage] }).catch(() => { })
                    }
                })
            }
            else {
                welcomeSchema.findOne({ Guild: member.guild.id }, async (err, channelData) => {
                    if (channelData) {

                        var channel = member.guild.channels.cache.get(channelData.Channel)

                        await client.embed({
                            title: `👋・Welcome`,
                            desc: `**${member} | ${member.user.tag}** was invited by ${inviter.tag} **(1 invites)**`,
                        }, channel).catch(() => { })
                    }
                })
            }
        }

        invitedBy.findOne({ Guild: member.guild.id }, async (err, data2) => {
            if (data2) {
                data2.inviteUser = inviter.id,
                    data2.User = member.id
                data2.save();
            }
            else {
                new invitedBy({
                    Guild: member.guild.id,
                    inviteUser: inviter.id,
                    User: member.id
                }).save();
            }
        })
    }
};