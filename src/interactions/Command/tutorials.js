const { ChannelType, PermissionsBitField, EmbedBuilder, SlashCommandBuilder, UserSelectMenuBuilder, ActionRowBuilder, ChannelSelectMenuBuilder, StringSelectMenuOptionBuilder, StringSelectMenuBuilder, RoleSelectMenuBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("tutorials")
		.setDescription(global.i18n.getMessage(null, `commands.slash.test.description`))
		.setNameLocalizations(global.i18n.getAllMessages(`commands.slash.test.name`))
		.setDescriptionLocalizations(global.i18n.getAllMessages(`commands.slash.test.description`))
		.addChannelOption(option => option.setName('channel').setDescription('Chose a channel to send the tutorials pannel').addChannelTypes(ChannelType.GuildText).setRequired(true))
		.setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator)
		,
        run: async (client, interaction, args) => {
			await interaction.deferReply({ fetchReply: true });
			const channel = interaction.options.getChannel('channel')
			const embed = new EmbedBuilder()
			.setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynamic: true, size: 1024 })})
			.setColor('#800080')
			.setTitle('Tutorial (NOT WORKING AT THE MOMENT)')
			.setDescription('This is the tutorial of how to make diferent types of menu selections')
			.addFields({
				name: 'String Menu',
				value: 'This tutorial is to learn how to create String Menus and learn all its components.',
				inline: true
			},{
				name: 'Role Menu',
				value: 'This tutorial is to learn how to create Role Menus and learn all its components.',
				inline: true
			},{
				name: 'User Menu',
				value: 'This tutorial is to learn how to create User Menus and learn all its components.',
				inline: true
			},{
				name: 'Mentions Menu',
				value: 'This tutorial is to learn how to create Mentions Menus and learn all its components.',
				inline: true
			},{
				name: 'Channel Menu',
				value: 'This tutorial is to learn how to create Channel Menus and learn all its components.',
				inline: true
			},{
				name: 'Buttons',
				value: 'This tutorial is to learn how to create Buttons and learn all its components.'
			},{
				name: 'Modals',
				value: 'This tutorial is to learn how to create Modals and learn all its components.'
			},{
				name: 'Slash Commands',
				value: 'This tutorial is to learn how to create Slash Commands and learn all its components.'
			},{
				name: 'Embeds',
				value: 'This tutorial is to learn how to create Embeds and learn all its components.'
			})
			.setImage('https://cdn.discordapp.com/attachments/1113296059326799954/1153860741108088963/standard.gif')
			.setTimestamp()
			.setFooter({ text: 'Created by soyDaddy'})
			
		const select = new StringSelectMenuBuilder()
			.setCustomId('Tutorials')
			.setPlaceholder('Select the tutorial you want to know!')
			.addOptions(
				new StringSelectMenuOptionBuilder()
					.setLabel('String Menu')
					.setDescription('This is the tutorial of the StringMenus.')
					.setValue('Tutorials_StringMenu')
					.setEmoji('1135252421430497290'),
				new StringSelectMenuOptionBuilder()
					.setLabel('Role Menu')
					.setDescription('This is the tutorial of the Roles Menu.')
					.setValue('Tutorials_RolesMenu')
					.setEmoji('1135252421430497290'),
				new StringSelectMenuOptionBuilder()
					.setLabel('User Menu')
					.setDescription('This is the tutorial of the Users Menu.')
					.setValue('Tutorials_UsersMenu')
					.setEmoji('1135252421430497290'),
				new StringSelectMenuOptionBuilder()
					.setLabel('Mentions Menu')
					.setDescription('This is the tutorial of the Mentions Menu.')
					.setValue('Tutorials_MentionsMenu')
					.setEmoji('1135252421430497290'),
				new StringSelectMenuOptionBuilder()
					.setLabel('Channel Menu')
					.setDescription('This is the tutorial of the Channel Menu.')
					.setValue('Tutorials_ChannelMenu')
					.setEmoji('1135252421430497290'),
				new StringSelectMenuOptionBuilder()
					.setLabel('Buttons')
					.setDescription('This is the tutorial of the Buttons.')
					.setValue('Tutorials_Buttons')
					.setEmoji('1135252421430497290'),
				new StringSelectMenuOptionBuilder()
					.setLabel('Modals')
					.setDescription('This is the tutorial of the Modals.')
					.setValue('Tutorials_Modals')
					.setEmoji('1135252421430497290'),
				new StringSelectMenuOptionBuilder()
					.setLabel('Slash Commands')
					.setDescription('This is the tutorial of the Slash Commands.')
					.setValue('Tutorials_SlashCommands')
					.setEmoji('1135252421430497290'),
				new StringSelectMenuOptionBuilder()
					.setLabel('Embeds')
					.setDescription('This is the tutorial of the Embeds.')
					.setValue('Tutorials_Embeds')
					.setEmoji('1135252421430497290'),
			);
			const row = new ActionRowBuilder()
			.addComponents(select);

			interaction.editReply('Done')

			await channel.send({
			embeds: [embed],
			components: [row],
		});

		}
	}