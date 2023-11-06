const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const wait = require("node:timers/promises").setTimeout;
const { NekoBot, NekoLove, Nekos, HMtai } = require("hmfull");
const Booru = require("booru"), { BooruError } = require("booru");
const fetch = require("node-fetch");
const Nsfw = require("nsfw-images");
const KazeClient = new Nsfw.Client();
const premium = require('../../database/models/user')

module.exports = {
	data: new SlashCommandBuilder()
    .setNSFW(true)
	.setName('nsfw')
    .setDescription(global.i18n.getMessage(null, `commands.slash.nsfw.description`))
	.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.name`))
	.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.description`))
    .addSubcommandGroup(subcommandGroup => subcommandGroup
		.setName('hentai')
		.setDescription(global.i18n.getMessage(null, `commands.slash.nsfw.hentai.description`))
		.addSubcommand(subcommand => subcommand
			.setName("vanilla")
			.setDescription(global.i18n.getMessage(null, `commands.slash.nsfw.hentai.vanilla.description`))
			.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.hentai.vanilla.name`))
			.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.hentai.vanilla.description`))
			.addStringOption(option => option
				.setName("options")
				.setDescription(global.i18n.getMessage(null, `commands.slash.nsfw.hentai.vanilla.options.description`))
				.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.hentai.vanilla.options.description`))
				.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.hentai.vanilla.options.name`))
				.addChoices(
					{ name: "ahegao", value: "ahegao" },
					{ name: "anal", value: "anal" },
					{ name: "ass", value: "ass" },
					{ name: "boobs", value: "boobs" },
					{ name: "boobjob", value: "boobjob" },
					{ name: "blowjob", value: "blowjob" },
					{ name: "classic", value: "classic" },
					{ name: "creampie", value: "creampie" },
					{ name: "cum", value: "cum" },
					{ name: "gif", value: "gif" },
					{ name: "glasses", value: "glasses" },
					{ name: "handjob", value: "handjob" },
					{ name: "hentai", value: "hentai" },
					{ name: "mobileWallpaper", value: "mobilewallpaper" },
					{ name: "masturbation", value: "masturbation" },
					{ name: "nekos", value: "neko" },
					{ name: "pantsu", value: "pantsu" },
					{ name: "pussy", value: "pussy" },
					{ name: "thighs", value: "thighs" },
					{ name: "yuri", value: "yuri" }
				).setRequired(true)
			)
			.addNumberOption(option => option
				.setName("repeat")
				.setDescription(global.i18n.getMessage(null, 'commands.slash.nsfw.hentai.vanilla.repeat.description'))
				.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.hentai.vanilla.repeat.name`))
				.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.hentai.vanilla.repeat.description`))
				.setMinValue(1)
				.setMaxValue(30))
		)
		.addSubcommand(subcommand => subcommand
			.setName("lewd")
			.setDescription(global.i18n.getMessage(null, `commands.slash.nsfw.hentai.lewd.description`))
			.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.hentai.lewd.name`))
			.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.hentai.lewd.description`))
			.addStringOption(option => option
				.setName("options")
				.setDescription(global.i18n.getMessage(null, `commands.slash.nsfw.hentai.lewd.options.description`))
				.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.hentai.lewd.options.description`))
				.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.hentai.lewd.options.name`))
				.addChoices(
					{ name: "bdsm", value: "bdsm" },
					{ name: "cuckold", value: "cuckold" },
					{ name: "elves", value: "elves" },
					{ name: "ero", value: "ero" },
					{ name: "femdom", value: "femdom" },
					{ name: "footjob", value: "footjob" },
					{ name: "gangbang", value: "gangbang" },
					{ name: "incest", value: "incest" },
					{ name: "manga", value: "manga" },
					{ name: "orgy", value: "orgy" },
					{ name: "public", value: "public" },
					{ name: "tentacles", value: "tentacles" },
					{ name: "thighsSqueeze", value: "thigh" },
					{ name: "uniform", value: "uniform" }
				).setRequired(true)
			)
			.addNumberOption(option => option
				.setName("repeat")
				.setDescription(global.i18n.getMessage(null, 'commands.slash.nsfw.hentai.lewd.repeat.description'))
				.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.hentai.lewd.repeat.name`))
				.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.hentai.lewd.repeat.description`))
				.setMinValue(1)
				.setMaxValue(30))
	       )
    )
	.addSubcommand(subcommand => subcommand
		.setName("neko")
		.setDescription(global.i18n.getMessage(null, `commands.slash.nsfw.neko.description`))
		.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.neko.name`))
		.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.neko.description`))
		.addStringOption(option => option
			.setName("options")
			.setDescription(global.i18n.getMessage(null, `commands.slash.nsfw.neko.options.description`))
			.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.neko.options.description`))
			.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.neko.options.name`))
			.addChoices(
				{ name: "anal", value: "anal" },
				{ name: "ass", value: "ass" },
				{ name: "boobs", value: "boobs" },
				{ name: "nekogif", value: "nekogif" },
				{ name: "hentai", value: "hentai" },
				{ name: "lewdneko", value: "lewdneko" },
				{ name: "midriff", value: "midriff" },
				{ name: "neko", value: "neko" },
				{ name: "nekolewd", value: "nekolewd" },
				{ name: "paizuri", value: "paizuri" },
				{ name: "thigh", value: "thigh" },
				{ name: "tentacle", value: "tentacle" },
				{ name: "wallpaper", value: "wallpaper" },
				{ name: "yuri", value: "yuri" }
			).setRequired(true)
		)
		.addNumberOption(option => option
			.setName("repeat")
			.setDescription(global.i18n.getMessage(null, 'commands.slash.nsfw.neko.repeat.description'))
			.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.neko.repeat.name`))
			.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.neko.repeat.description`))
			.setMinValue(1)
			.setMaxValue(10)),
    )
    .addSubcommand(subcommand => subcommand
        .setName("booru")
        .setDescription(global.i18n.getMessage(null, `commands.slash.nsfw.booru.description`))
		.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.booru.name`))
		.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.booru.description`))
		.addStringOption(option => option
			.setName("sites")
			.setDescription(global.i18n.getMessage(null, `commands.slash.nsfw.booru.sites.description`))
			.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.booru.sites.description`))
			.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.booru.sites.name`))
			.addChoices(
				{ name: "derpibooru", value: "derpibooru" },
				{ name: "e621", value: "e621" },
				{ name: "gelbooru", value: "gelbooru" },
				{ name: "konachan", value: "konac" },
				{ name: "realbooru", value: "realbooru" },
				{ name: "rule34", value: "rule34" },
				{ name: "rule34 Paheal", value: "paheal" },
				{ name: "xbooru", value: "xbooru" },
				{ name: "yande", value: "yandere" }
			).setRequired(true)
		)
		.addStringOption(option => option
			.setName("tags")
			.setDescription(global.i18n.getMessage(null, 'commands.slash.nsfw.booru.tags.description'))
			.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.booru.tags.name`))
			.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.booru.tags.description`))
		.setRequired(true))
		.addNumberOption(option => option
			.setName("repeat")
			.setDescription(global.i18n.getMessage(null, 'commands.slash.nsfw.booru.repeat.description'))
			.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.booru.repeat.name`))
			.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.booru.repeat.description`))
			.setMinValue(1)
			.setMaxValue(30)),
    )
	.addSubcommand(subcommand => subcommand
        .setName("waifu")
        .setDescription(global.i18n.getMessage(null, `commands.slash.nsfw.waifu.description`))
		.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.waifu.name`))
		.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.waifu.description`))
		.addStringOption(option => option
			.setName("category")
			.setDescription(global.i18n.getMessage(null, `commands.slash.nsfw.waifu.category.description`))
			.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.waifu.category.description`))
			.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.waifu.category.name`))
			.addChoices(
				{ name: "BlowJob", value: "blowjob" },
				{ name: "Neko", value: "neko" },
				{ name: "Trap", value: "trap" },
				{ name: "Waifu", value: "waifu" }
			).setRequired(true)
		)
		.addNumberOption(option => option
			.setName("repeat")
			.setDescription(global.i18n.getMessage(null, 'commands.slash.nsfw.waifu.repeat.description'))
			.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.waifu.repeat.name`))
			.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.waifu.repeat.description`))
			.setMinValue(1)
			.setMaxValue(30)),
    )
	.addSubcommand(subcommand => subcommand
        .setName("waifu2")
        .setDescription(global.i18n.getMessage(null, `commands.slash.nsfw.waifu2.description`))
		.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.waifu2.name`))
		.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.waifu2.description`))
		.addStringOption(option => option
			.setName("category")
			.setDescription(global.i18n.getMessage(null, `commands.slash.nsfw.waifu2.category.description`))
			.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.waifu2.category.description`))
			.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.waifu2.category.name`))
			.addChoices(
				{ name: "Ass", value: "ass" },
				{ name: "Ecchi", value: "ecchi" },
				{ name: "Ero", value: "ero" },
				{ name: "Hentai", value: "hentai" },
				{ name: "Milf", value: "milf" },
				{ name: "Oral", value: "oral" },
				{ name: "Paizuri", value: "paizuri" }
			).setRequired(true)
		)
		.addNumberOption(option => option
			.setName("repeat")
			.setDescription(global.i18n.getMessage(null, 'commands.slash.nsfw.waifu2.repeat.description'))
			.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.waifu2.repeat.name`))
			.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.waifu2.repeat.description`))
			.setMinValue(1)
			.setMaxValue(30)),
    )
	.addSubcommand(subcommand => subcommand
        .setName("real")
        .setDescription(global.i18n.getMessage(null, `commands.slash.nsfw.real.description`))
		.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.real.name`))
		.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.real.description`))
		.addStringOption(option => option
			.setName("category")
			.setDescription(global.i18n.getMessage(null, `commands.slash.nsfw.real.category.description`))
			.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.real.category.description`))
			.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.real.category.name`))
			.addChoices(
				{ name: "Ass", value: "ass" },
				{ name: "thighs", value: "thighs" },
				{ name: "panties", value: "panties" },
				{ name: "random", value: "random" }
			).setRequired(true)
		)
		.addNumberOption(option => option
			.setName("repeat")
			.setDescription(global.i18n.getMessage(null, 'commands.slash.nsfw.real.repeat.description'))
			.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.real.repeat.name`))
			.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.real.repeat.description`))
			.setMinValue(1)
			.setMaxValue(30)),
    )
	.addSubcommand(subcommand => subcommand
        .setName("real2")
        .setDescription(global.i18n.getMessage(null, `commands.slash.nsfw.real2.description`))
		.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.real2.name`))
		.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.real2.description`))
		.addStringOption(option => option
			.setName("category")
			.setDescription(global.i18n.getMessage(null, `commands.slash.nsfw.real2.category.description`))
			.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.real2.category.description`))
			.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.real2.category.name`))
			.addChoices(
				{ name: "pgif", value: "pgif" },
				{ name: "4k", value: "4k" },
				{ name: "holo", value: "holo" },
				{ name: "anal", value: "anal" },
				{ name: "gonewild", value: "gonewild" },
				{ name: "ass", value: "ass" },
				{ name: "pussy", value: "pussy" },
				{ name: "thigh", value: "thigh" },
				{ name: "gah", value: "gah" },
				{ name: "coffee", value: "coffee" },
				{ name: "food", value: "food" },
				{ name: "paizuri", value: "paizuri" },
				{ name: "boobs", value: "boobs" }
			).setRequired(true)
		)
		.addNumberOption(option => option
			.setName("repeat")
			.setDescription(global.i18n.getMessage(null, `commands.slash.nsfw.real2.repeat.description`))
			.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.real2.repeat.description`))
			.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.real2.repeat.name`))
			.setMinValue(1)
			.setMaxValue(30)
		),
    )
	.addSubcommand(subcommand => subcommand
        .setName("hentai2")
        .setDescription(global.i18n.getMessage(null, `commands.slash.nsfw.hentai2.description`))
		.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.hentai2.name`))
		.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.hentai2.description`))
		.addStringOption(option => option
			.setName("category")
			.setDescription(global.i18n.getMessage(null, `commands.slash.nsfw.hentai2.category.description`))
			.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.hentai2.category.description`))
			.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.hentai2.category.name`))
			.addChoices(
				{ name: "hass", value: "hass" },
				{ name: "hmidriff", value: "hmidriff" },
				{ name: "hentai", value: "hentai" },
				{ name: "holo", value: "holo" },
				{ name: "hneko", value: "hneko" },
				{ name: "neko", value: "neko" },
				{ name: "hkitsune", value: "hkitsune" },
				{ name: "kemonomimi", value: "kemonomimi" },
				{ name: "hanal", value: "hanal" },
				{ name: "kanna", value: "kanna" },
				{ name: "hthigh", value: "hthigh" },
				{ name: "tentacle", value: "tentacle" },
				{ name: "yaoi", value: "yaoi" },
				{ name: "hboobs", value: "hboobs" }
			).setRequired(true)
		)
		.addNumberOption(option => option
			.setName("repeat")
			.setDescription(global.i18n.getMessage(null, 'commands.slash.nsfw.hentai2.repeat.description'))
			.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.hentai2.repeat.name`))
			.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.nsfw.hentai2.repeat.description`))
			.setMinValue(1)
			.setMaxValue(30)),
    )
,

    run: async (client, interaction, args) => {
		const user = premium.findOne({ Id: interaction.user.id, isPremium: true})
		if (user) {
		await interaction.deferReply({ fetchReply: true });	
		const randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
        if (interaction.options.getSubcommandGroup() === 'hentai') {
        	if (interaction.options.getSubcommand() === 'vanilla') {
				let amount = 1;
				if (interaction.options.getNumber("repeat")) { amount = Number(interaction.options.getNumber("repeat")) }
				let options = interaction.options.getString("options");
				const embed = new EmbedBuilder()
					.setTimestamp()
					.setTitle(options)
					.setColor('#'+ randomColor);
				for (let a = 0; a < amount; a++) {
					let link;
					switch (options) {
						case "ahegao": link = (await HMtai.nsfw.ahegao()).url; break;
						case "anal": link = (await HMtai.nsfw.anal()).url; break;
						case "ass": link = (await HMtai.nsfw.ass()).url; break;
						case "blowjob": link = (await HMtai.nsfw.blowjob()).url; break;
						case "boobjob": link = (await HMtai.nsfw.boobjob()).url; break;
						case "boobs": link = (await HMtai.nsfw.boobs()).url; break;
						case "classic": link = (await HMtai.nsfw.classic()).url; break;
						case "creampie": link = (await HMtai.nsfw.creampie()).url; break;
						case "cum": link = (await HMtai.nsfw.cum()).url; break;
						case "gif": link = (await HMtai.nsfw.gif()).url; break;
						case "glasses": link = (await HMtai.nsfw.glasses()).url; break;
						case "handjob": link = (await HMtai.nsfw.handjob()).url; break;
						case "masturbation": link = (await HMtai.nsfw.masturbation()).url; break;
						case "mobilewallpaper": link = (await HMtai.nsfw.nsfwMobileWallpaper()).url; break;
						case "neko": link = (await HMtai.nsfw.nsfwNeko()).url; break;
						case "pantsu": link = (await HMtai.nsfw.pantsu()).url; break;
						case "pussy": link = (await HMtai.nsfw.pussy()).url; break;
						case "thighs": link = (await HMtai.nsfw.thighs()).url; break;
						case "yuri": link = (await HMtai.nsfw.yuri()).url; break;
						default: link = (await HMtai.nsfw.hentai()).url; break;
					}
					embed.setFooter({ text: `${options} - ${a + 1}/${amount}` }).setImage(link);
					try { await interaction.reply({ embeds: [embed] }) }
					catch {
						await wait(1000);
						await interaction.followUp({ embeds: [embed] });
					}
				}
        	}
			if (interaction.options.getSubcommand() === 'lewd') {
				let amount = 1;
				if (interaction.options.getNumber("repeat")) { amount = Number(interaction.options.getNumber("repeat")) }
				let options = interaction.options.getString("options");
				const embed = new EmbedBuilder()
					.setTimestamp()
					.setTitle(options)
					.setColor('#'+ randomColor);
				for (let a = 0; a < amount; a++) {
					let link;
					switch (options) {
						case "bdsm": link = (await HMtai.nsfw.bdsm()).url; break;
						case "cuckold": link = (await HMtai.nsfw.cuckold()).url; break;
						case "elves": link = (await HMtai.nsfw.elves()).url; break;
						case "ero": link = (await HMtai.nsfw.ero()).url; break;
						case "femdom": link = (await HMtai.nsfw.femdom()).url; break;
						case "footjob": link = (await HMtai.nsfw.footjob()).url; break;
						case "gangbang": link = (await HMtai.nsfw.gangbang()).url; break;
						case "incest": link = (await HMtai.nsfw.incest()).url; break;
						case "manga": link = (await HMtai.nsfw.manga()).url; break;
						case "orgy": link = (await HMtai.nsfw.orgy()).url; break;
						case "public": link = (await HMtai.nsfw.public()).url; break;
						case "tentacles": link = (await HMtai.nsfw.tentacles()).url; break;
						case "thigh": link = (await HMtai.nsfw.zettaiRyouiki()).url; break;
						case "uniform": link = (await HMtai.nsfw.uniform()).url; break;
						default: link = (await HMtai.nsfw.hentai()).url; break;
					}
					embed.setFooter({ text: `${options} - ${a + 1}/${amount}` }).setImage(link);
					try { await interaction.reply({ embeds: [embed] }) }
					catch {
						await wait(1000);
						await interaction.followUp({ embeds: [embed] });
					}
				}
	        }
	    }
		if (interaction.options.getSubcommand() === 'neko') {
		let amount = 1;
		if (interaction.options.getNumber("repeat")) { amount = Number(interaction.options.getNumber("repeat")) }
			const options = interaction.options.getString("options");
			const embed = new EmbedBuilder()
				.setTimestamp()
				.setTitle(options)
				.setColor('#'+ randomColor);
			for (let a = 0; a < amount; a++) {
				let link;
				switch (options) {
					case "nekogif": link = (await Nekos.nsfw.nekogif()).url; break;
					case "wallpaper": link = (await Nekos.nsfw.wallpaper()).url; break;
					case "hentai": link = (await NekoBot.nsfw.hentai()).url; break;
					case "ass": link = (await NekoBot.nsfw.ass()).url; break;
					case "boobs": link = (await NekoBot.nsfw.boobs()).url; break;
					case "paizuri": link = (await NekoBot.nsfw.paizuri()).url; break;
					case "yuri": link = (await NekoBot.nsfw.yuri()).url; break;
					case "thigh": link = (await NekoBot.nsfw.thigh()).url; break;
					case "lewdneko": link = (await NekoBot.nsfw.lewdneko()).url; break;
					case "midriff": link = (await NekoBot.nsfw.midriff()).url; break;
					case "tentacle": link = (await Nekos.nsfw.tentacle()).url; break;
					case "anal": link = (await Nekos.nsfw.anal()).url; break;
					case "neko": link = (await Nekos.nsfw.neko()).url; break;
					case "nekolewd": { let asd = NekoLove.nsfw(); link = (await asd.nekolewd()).url } break;
					default: link = (await NekoBot.nsfw.lewdneko()).url; break;
				}
				embed.setFooter({ text: `${options} - ${a + 1}/${amount}` }).setImage(link);
				try { await interaction.reply({ embeds: [embed] }) }
				catch {
					await wait(1000);
					await interaction.followUp({ embeds: [embed] });
				}
			}
		}
		if (interaction.options.getSubcommand() === 'booru') {
			const sites = interaction.options.getString("sites").trim();
			let tags, amount = 1, r = "-";
			if (!interaction.options.getString("tags") && (sites == ("gelbooru") || sites == ("rule34") || sites == ("safebooru") || sites == ("tbib") || sites == ("xbooru") || sites == ("derpibooru") || sites == ("realbooru"))) { return interaction.editReply({ content: "Please give me a tag to find a random picture." }) }
			else if (!interaction.options.getString("tags")) { tags = "" }
			else { tags = interaction.options.getString("tags").trim().split(" ") }
			if (interaction.options.getNumber("repeat")) { amount = Number(interaction.options.getNumber("repeat")) }
			for (let a = 0; a < amount; a++) {
				await booruSearch(sites, tags, a, true).catch(err => {
					if (err instanceof BooruError) { a = amount }
					else { a = amount; return interaction.editReply({ content: "Something went wrong. Make sure you wrote the tag correctly by seperating them with spaces." }) }
				});
				await wait(2000);
			}
			async function booruSearch(sites, tags, a, random = true) {
				let limit = 4;
				const posts = await Booru.search(sites, tags, { limit, random });
				if (Number(posts.length) === 0) { return interaction.reply({ content: "Something went wrong. Make sure you wrote the tag correctly by seperating them with spaces." }) }
				if (posts.first.rating == "s") { r = "Safe" }
				else if (posts.first.rating == "q") { r = "Questionable" }
				else if (posts.first.rating == "e") { r = "Explicit" }
				else if (posts.first.rating == "u") { r = "Unrated" }
				const embed1 = new EmbedBuilder().setURL('https://google.com').setColor(`#`+randomColor).setFields({ name: "⚖️ Rating:", value: r, inline: true }, { name: "🔍 Searched for:", value: "*" + tags + "*", inline: true }).setTimestamp().setAuthor({ name: 'NSFW Commands', iconURL: 'https://cdn.discordapp.com/attachments/1112743789782638602/1135482460092772412/20230520_132612.png', url: "https://" + posts.first.booru.domain }).setFooter({ text: 'Requested by: ' + interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) });
				const embed2 = new EmbedBuilder().setURL('https://google.com').setColor(`#`+randomColor)
				const embed3 = new EmbedBuilder().setURL('https://google.com').setColor(`#`+randomColor)
				const embed4 = new EmbedBuilder().setURL('https://google.com').setColor(`#`+randomColor)
				const buttons = new ActionRowBuilder().addComponents(
					new ButtonBuilder().setURL(posts[0].fileUrl).setLabel("Link 1").setStyle(ButtonStyle.Link).setEmoji("🖥️"),
					new ButtonBuilder().setURL(posts[1].fileUrl).setLabel("Link 2").setStyle(ButtonStyle.Link).setEmoji("🖥️"),
					new ButtonBuilder().setURL(posts[2].fileUrl).setLabel("Link 3").setStyle(ButtonStyle.Link).setEmoji("🖥️"),
					new ButtonBuilder().setURL(posts[3].fileUrl).setLabel("Link 4").setStyle(ButtonStyle.Link).setEmoji("🖥️"),
					new ButtonBuilder().setCustomId("delete").setLabel("Delete").setStyle(ButtonStyle.Danger).setEmoji("✖️")
				);
				if (posts[0].fileUrl.includes(".mp4") || posts[1].fileUrl.includes(".mp4") || posts[2].fileUrl.includes(".mp4") || posts[3].fileUrl.includes(".mp4")) {
					const message = `1. ${posts[0].fileUrl}\n2. ${posts[1].fileUrl}\n3. ${posts[2].fileUrl}\n4. ${posts[3].fileUrl}`
					try {
						await interaction.followUp({ content: message, components: [buttons] });
					} catch {
						await interaction.followUp({ content: message, components: [buttons] });
					}
				} else {
					await embed1.setImage(posts[0].fileUrl);
					await embed2.setImage(posts[1].fileUrl);
					await embed3.setImage(posts[2].fileUrl);
					await embed4.setImage(posts[3].fileUrl);
					try { await interaction.followUp({ embeds: [embed1, embed2, embed3, embed4], components: [buttons] }) }
					catch { await interaction.editReply({ embeds: [embed1, embed2, embed3, embed4], components: [buttons] }) }
				}
			}
		}
		if (interaction.options.getSubcommand() === 'waifu') {
			let amount = 1;
			const category = interaction.options.getString("category");
			if (interaction.options.getNumber("repeat")) { amount = Number(interaction.options.getNumber("repeat")) }
			for (let a = 0; a < amount; a++) {
				let response = await fetch(`https://api.waifu.pics/nsfw/${category}`);
				let data = await response.text();
				const img = JSON.parse(data);
				const embed = new EmbedBuilder()
					.setImage(img.url)
					.setFooter({ text: `${category} - ${a + 1}/${amount}` })
					.setColor('#'+ randomColor);
				try { await interaction.followUp({ embeds: [embed] }) }
				catch { interaction.reply({ embeds: [embed] }) }
				await wait(1000);
			} 
		}
		if (interaction.options.getSubcommand() === 'waifu2') {
			let amount = 1;
			const category = interaction.options.getString("category");
			if (interaction.options.getNumber("repeat")) { amount = Number(interaction.options.getNumber("repeat")) }
			for (let a = 0; a < amount; a++) {
				let response = await fetch(`https://api.waifu.im/search?included_tags=${category}`);
				let data = await response.text();
				const img = JSON.parse(data);
				const embed = new EmbedBuilder()
					.setImage(img.images[0].url)
					.setFooter({ text: `${category} - ${a + 1}/${amount}` })
					.setColor('#'+ randomColor);
				try { await interaction.followUp({ embeds: [embed] }) }
				catch { interaction.reply({ embeds: [embed] }) }
				await wait(1000);
			}
		}
		if (interaction.options.getSubcommand() === 'real') {
			let amount = 1;
			const category = interaction.options.getString("category");
			if (interaction.options.getNumber("repeat")) { amount = Number(interaction.options.getNumber("repeat")) }
			for (let a = 0; a < amount; a++) {
				let link;
				switch (category) {
					case "ass": link = (await KazeClient.nsfw.real.ass()).url; break;
					case "thighs": link = (await KazeClient.nsfw.real.thighs()).url; break;
					case "panties": link = (await KazeClient.nsfw.real.panties()).url; break;
					case "random": link = (await KazeClient.nsfw.real.random()).url; break;
					default: link = (await KazeClient.nsfw.real.random()).url; break;
				}
				const embed = new EmbedBuilder()
					.setImage(link)
					.setFooter({ text: `${category} - ${a + 1}/${amount}` })
					.setColor('#'+ randomColor);
				try { await interaction.followUp({ embeds: [embed] }) }
				catch { interaction.reply({ embeds: [embed] }) }
				await wait(1000);
			}
		}
		if (interaction.options.getSubcommand() === 'real2') {
			let amount = 1;
			const category = interaction.options.getString("category");
			if (interaction.options.getNumber("repeat")) { amount = Number(interaction.options.getNumber("repeat")) }
			for (let a = 0; a < amount; a++) {
				let response = await fetch(`https://nekobot.xyz/api/image?type=${category}`)
				let data = await response.text();
				const img = JSON.parse(data);
				const embed = new EmbedBuilder()
					.setImage(img.message)
					.setFooter({ text: `${category} - ${a + 1}/${amount}` })
					.setColor('#'+ randomColor);
				try { await interaction.followUp({ embeds: [embed] }) }
				catch { interaction.reply({ embeds: [embed] }) }
				await wait(1000);
			}
		}
		if (interaction.options.getSubcommand() === 'hentai2') {
			let amount = 1;
			const category = interaction.options.getString("category");
			if (interaction.options.getNumber("repeat")) { amount = Number(interaction.options.getNumber("repeat")) }
			for (let a = 0; a < amount; a++) {
				let response = await fetch(`https://nekobot.xyz/api/image?type=${category}`)
				let data = await response.text();
				const img = JSON.parse(data);
				const embed = new EmbedBuilder()
					.setImage(img.message)
					.setFooter({ text: `${category} - ${a + 1}/${amount}` })
					.setColor('#'+ randomColor);
				try { await interaction.followUp({ embeds: [embed] }) }
				catch { interaction.reply({ embeds: [embed] }) }
				await wait(1000);
			}
		}
		} else {
			return client.errNormal({
				error: 'You are not Premium User',
				type: 'ephemeral'
			}, interaction)
		}
	}
}