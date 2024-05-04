const model = require('../../database/models/badge');
const Schema = require('../../database/models/profile');
const CreditsSchema = require("../../database/models/votecredits");
const { EmbedBuilder, AttachmentBuilder } = require('discord.js')
const User = require('../../database/models/user');
const moment = require("moment");
const { profileImage } = require('discord-arts');

module.exports = async (client, interaction, args) => {
    
    const badgeFlags = {
        DEVELOPER: client.emotes.badges.developer + '・Developer',
        EVENT: client.emotes.badges.event + '・Event Manager',
        BOOSTER: client.emotes.badges.booster + '・Bot Booster',
        BUGS: client.emotes.badges.bug + '・Bug Manager',
        MANAGEMENT: client.emotes.badges.management + '・Manager',
        PREMIUM: client.emotes.badges.premium + '・Premium User',
        SUPPORTER: client.emotes.badges.supporter + '・Supporter',
        TEAM: client.emotes.badges.team + '・Dev Team',
        PARTNER: client.emotes.badges.partner + '・Partner',
        VOTER: client.emotes.badges.voter + '・Voter',
        SUPPORT: client.emotes.badges.support + '・Support Manager',
        MODERATOR: client.emotes.badges.moderator + '・Moderator',
        DESIGNER: client.emotes.badges.designer + '・Designer',
        MARKETING: client.emotes.badges.marketing + '・Marketing',
        ACTIVE: client.emotes.badges.active + '・Active',
        VIP: client.emotes.badges.vip + '・VIP User'
    }

    const flags = {
        ActiveDeveloper: "👨‍💻・Active Developer",
        BugHunterLevel1: "🐛・Discord Bug Hunter",
        BugHunterLevel2: "🐛・Discord Bug Hunter",
        CertifiedModerator: "👮‍♂️・Certified Moderator",
        HypeSquadOnlineHouse1: "🏠・House Bravery Member",
        HypeSquadOnlineHouse2: "🏠・House Brilliance Member",
        HypeSquadOnlineHouse3: "🏠・House Balance Member",
        HypeSquadEvents: "🏠・HypeSquad Events",
        PremiumEarlySupporter: "👑・Early Supporter",
        Partner: "👑・Partner",
        Quarantined: "🔒・Quarantined", 
        Spammer: "🔒・Spammer", 
        Staff: "👨‍💼・Discord Staff",
        TeamPseudoUser: "👨‍💼・Discord Team",
        VerifiedBot: "🤖・Verified Bot",
        VerifiedDeveloper: "👨‍💻・(early)Verified Bot Developer",
    }

    const user = interaction.options.getUser('user') || interaction.user;
    const userP = await User.findOne({ Id: user.id });
    let Badges = await model.findOne({ User: user.id });

    Schema.findOne({ User: user.id }, async (err, data) => {
        if (data) {
            const buffer = await profileImage(user.id, {
                customBackground: data.Background,
                overwriteBadges: true,
                badgesFrame: true,
                presenceStatus: client.guilds.cache.get(interaction.guild.id).members.cache.get(user.id).presence?.status ?? 'offline'
            });
            const attachment = new AttachmentBuilder(buffer, { name: 'profile.png' });

            let credits = 0;
            const creditData = await CreditsSchema.findOne({ User: user.id });

            if (Badges && Badges.FLAGS.includes("DEVELOPER" || "VIP")) {
                credits = "∞";
            }
            else if (creditData) {
                credits = creditData.Credits;
            }

            if (!Badges) Badges = { User: user.id };
            const timeLeft = moment(user.expiresAt).format("dddd, MMMM Do YYYY HH:mm:ss");

            const userFlags = user.flags ? user.flags.toArray() : [];
            const randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
            const embed = new EmbedBuilder()
            .setTitle(`${client.user.username}・Profile`)
            .setDescription('----------------')
            .setColor(data.Color || '#800080')
            .setThumbnail(user.avatarURL({ dynamic: true }))
            .setImage('attachment://profile.png')
            .addFields({
                name: "👤┆User",
                value: user.username,
                inline: true
            },{
                name: "🆔┆ID",
                value: user.id,
                inline: true
            },{
                name: "👨‍👩‍👦┆Gender",
                value: `${data.Gender || 'Not set'}`,
                inline: true
            },{
                name: "🔢┆Age",
                value: `${data.Age || 'Not set'}`,
                inline: true
            },{
                name: "🎂┆Birthday",
                value: `${data.Birthday || 'Not set'}`,
                inline: true
            },{
                name: "🎨┆Favorite color",
                value: `${data.Color || 'Not set'}`,
                inline: true
            },{
                name: "🐶┆Favorite pets",
                value: `${data.Pets.join(', ') || 'Not set'}`,
                inline: true
            },{
                name: "🍕┆Favorite food",
                value: `${data.Food.join(', ') || 'Not set'}`,
                inline: true
            },{
                name: "🎶┆Favorite songs",
                value: `${data.Songs.join(', ') || 'Not set'}`,
                inline: true
            },{
                name: "🎤┆Favorite artists",
                value: `${data.Artists.join(', ') || 'Not set'}`,
                inline: true
            },{
                name: "🎬┆Favorite movies",
                value: `${data.Movies.join(', ') || 'Not set'}`,
                inline: true
            },{
                name: "👨‍🎤┆Favorite actors",
                value: `${data.Actors.join(', ') || 'Not set'}`,
                inline: true
            },{
                name: "🏴┆Origin",
                value: `${data.Orgin || 'Not set'}`,
                inline: true
            },{
                name: "🎮┆Hobby's",
                value: `${data.Hobbys.join(', ') || 'Not set'}`,
                inline: true
            },{
                name: "😛┆Status",
                value: `${data.Status || 'Not set'}`,
                inline: true
            },{
                name: "📛┆Bot Badges",
                value: `${Badges.FLAGS ? Badges.FLAGS.map(flag => badgeFlags[flag]).join('\n') : 'None'}`,
                inline: true
            },{
                name: "🏷️┆Discord Badges",
                value: `${userFlags.length ? userFlags.map(flag => flags[flag]).join('\n') : 'None' || 'None'}`,
                inline: true
            },{
                name: "💳┆OCredits",
                value: `${credits || 'None'}`,
                inline: true
            },{
                name: `${client.emotes.badges.premium}┆Premium`,
                value: ` `,
                inline: false
            })
            if (userP.plan === "lifetime") {
                embed.addFields([
                    { name: `\`💠\` • Plan:`, value: `\`\`\`${toOppositeCase(userP.plan)}\`\`\``, inline: true },
                    { name: `\`💎\` • Features:`, value: `\`\`\`Unlocked\`\`\``, inline: true },
                    { name: `\`🕓\` • Expired:`, value: `\`\`\`Never\`\`\``, inline: false },
                    { name: "ℹ️┆About me", value: `${data.Aboutme || 'Not set'}`, inline: false }
                ]);
            } else {
                embed.addFields([
                    { name: `\`💠\` • Plan:`, value: `\`\`\`${toOppositeCase(userP.plan || "Free")}\`\`\``, inline: true },
                ]);
    
            if (userP.expiresAt < Date.now()) {
                embed.addFields([
                    { name: `\`💎\` • Features:`, value: `\`\`\`Locked\`\`\``, inline: true },
                    { name: `\`🕓\` • Expired:`, value: `\`\`\`Never\`\`\``, inline: false },
                    { name: "ℹ️┆About me", value: `${data.Aboutme || 'Not set'}`, inline: false }
                ]);
                } else {
                embed.addFields([
                    { name: `\`💎\` • Features:`, value: `\`\`\`Unlocked\`\`\``, inline: true },
                    { name: `\`🕓\` • Expired:`, value: `\`\`\`${timeLeft}\`\`\``, inline: false },
                    { name: "ℹ️┆About me", value: `${data.Aboutme || 'Not set'}`, inline: false }
                ]);
            }
        }
        interaction.editReply({embeds: [embed], files: [attachment]})
        } else {
            return client.errNormal({ error: "No profile found! Open a profile with /profile create", type:'editreply' }, interaction);
        }
    })
}

function toOppositeCase(char) {
    return char.charAt(0).toUpperCase() + char.slice(1);
}