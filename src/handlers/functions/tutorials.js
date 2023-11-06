const Discord = require('discord.js');
const { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, RoleSelectMenuBuilder, UserSelectMenuBuilder, MentionableSelectMenuBuilder, Events, EmbedBuilder } = require('discord.js')

module.exports = async (client) => {
client.on(Discord.Events.InteractionCreate, async (interaction) => {
    if (!interaction.isStringSelectMenu() && interaction.isUserSelectMenu() && interaction.isRoleSelectMenu()) return;
	if (interaction.isStringSelectMenu()) {
    if (interaction.customId == 'Tutorials') {
        if (interaction.values == 'Tutorials_StringMenu') {
            const embed = new Discord.EmbedBuilder()
            .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynamic: true, size: 1024 })})
			.setColor('#800080')
			.setTitle('String Menu')
			.setDescription('The String Menus')
			.addFields({
				name: '1. String Select Menu',
				value: `\`\`\`js\nconst select = new StringSelectMenuBuilder()\n.setCustomId('example')\n.setPlaceholder('This is a normal String Select Menu!')\n.addOptions(\nnew StringSelectMenuOptionBuilder()\n.setLabel('Option 1')\n.setDescription('Here is the Option 1.')\n.setValue('option1'),\nnew StringSelectMenuOptionBuilder()\n.setLabel('Option 2')\n.setDescription('Here is the Option 2')\n.setValue('option2'),\nnew StringSelectMenuOptionBuilder()\n.setLabel('Option 3')\n.setDescription('Here is the Option 3')\n.setValue('option3'),\n);\n\`\`\``,
				inline: false
			},{
				name: '2. Multi String Select Menu',
				value: `\`\`\`js\nconst select = new StringSelectMenuBuilder()\n.setCustomId('example2')\n.setPlaceholder('This is a Multi String Select Menu!')\n.setMaxValues(3)\n.addOptions(\nnew StringSelectMenuOptionBuilder()\n.setLabel('Option 1')\n.setDescription('Here is the Option 1.')\n.setValue('option1'),\nnew StringSelectMenuOptionBuilder()\n.setLabel('Option 2')\n.setDescription('Here is the Option 2')\n.setValue('option2'),\nnew StringSelectMenuOptionBuilder()\n.setLabel('Option 3')\n.setDescription('Here is the Option 3')\n.setValue('option3'),\n);\n\`\`\``,
				inline: false
			},{
				name: '3. How to get the Value',
				value: `\`\`\`js\nclient.on(Events.InteractionCreate, async (interaction) => {\nif (!interaction.isStringSelectMenu()) return;\nif (interaction.customId == 'Example') {interaction.reply({content: \`You selected \${interaction.values}\`})\n}\n})\`\`\`\``
			})
			.setImage('https://cdn.discordapp.com/attachments/1113296059326799954/1153860741108088963/standard.gif')
			.setTimestamp()
			.setFooter({ text: 'Created by soyDaddy'})
			const select = new StringSelectMenuBuilder()
				.setCustomId('string1')
				.setPlaceholder('This is a Normal String Select Menu!')
				.addOptions(
					new StringSelectMenuOptionBuilder()
						.setLabel('Option 1')
						.setDescription('Option 1')
						.setValue('string_option1')
						.setEmoji('1135252421430497290'),
					new StringSelectMenuOptionBuilder()
						.setLabel('Option 2')
						.setDescription('Option 2')
						.setValue('string_option2')
						.setEmoji('1135252421430497290'),
					new StringSelectMenuOptionBuilder()
						.setLabel('Option 3')
						.setDescription('Option 3')
						.setValue('string_option3')
						.setEmoji('1135252421430497290'),
					new StringSelectMenuOptionBuilder()
						.setLabel('Option 4')
						.setDescription('Option 4')
						.setValue('string_option4')
						.setEmoji('1135252421430497290'),
				)
			const select2 = new StringSelectMenuBuilder()
				.setCustomId('string2')
				.setPlaceholder('This is a Multi String Select Menu!')
				.addOptions(
					new StringSelectMenuOptionBuilder()
						.setLabel('Option 1')
						.setDescription('Option 1')
						.setValue('multistring_option1')
						.setEmoji('1135252421430497290'),
					new StringSelectMenuOptionBuilder()
						.setLabel('Option 2')
						.setDescription('Option 2')
						.setValue('multistring_option2')
						.setEmoji('1135252421430497290'),
					new StringSelectMenuOptionBuilder()
						.setLabel('Option 3')
						.setDescription('Option 3')
						.setValue('multistring_option3')
						.setEmoji('1135252421430497290'),
					new StringSelectMenuOptionBuilder()
						.setLabel('Option 4')
						.setDescription('Option 4')
						.setValue('multistring_option4')
						.setEmoji('1135252421430497290'),
				)
				.setMinValues(1)
				.setMaxValues(3)
			const row = new ActionRowBuilder().addComponents(select);
			const row2 = new ActionRowBuilder().addComponents(select2);
            interaction.reply({embeds: [embed], components: [row, row2], ephemeral: true})
        }
        if (interaction.values == 'Tutorials_RolesMenu') {
            const embed = new Discord.EmbedBuilder()
            .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynamic: true, size: 1024 })})
			.setColor('#800080')
			.setTitle('Role Menu')
			.setDescription('The Role Menus')
			.addFields({
				name: '1 Normal Role Select Menu',
                value: `\`\`\`js\nconst select = new RoleSelectMenuBuilder()\n.setCustomId('example3')\n.setPlaceholder('This is a Normal Role Select Menu!');\n\`\`\``,
				inline: true
			},{
				name: '1 Multi Role Select Menu',
				value: `\`\`\`js\nconst select = new RoleSelectMenuBuilder()\n.setCustomId('example3')\n.setPlaceholder('This is a Multi Role Select Menu!')\n.setMinValues(1)\n.setMaxValues(10);\n\`\`\``,
				inline: false
			},{
				name: '3. How to get the Value',
				value: `\`\`\`js\nclient.on(Events.InteractionCreate, async (interaction) => {\nif (!interaction.isRoleSelectMenu()) return;\nif (interaction.customId == 'Example') {interaction.reply({content: \`You selected \${interaction.values}\`})\n}\n})\`\`\`\``
			})
			.setImage('https://cdn.discordapp.com/attachments/1113296059326799954/1153860741108088963/standard.gif')
			.setTimestamp()
			.setFooter({ text: 'Created by soyDaddy'})
			const select = new RoleSelectMenuBuilder()
				.setCustomId('role1')
				.setPlaceholder('This is a Normal Role Select Menu!')
			const select2 = new RoleSelectMenuBuilder()
				.setCustomId('role2')
				.setPlaceholder('This is a Multi Role Select Menu!')
				.setMinValues(1)
				.setMaxValues(10)
			const row = new ActionRowBuilder()
				.addComponents(select);
			const row2 = new ActionRowBuilder()
				.addComponents(select2);
            interaction.reply({embeds: [embed], components: [row, row2], ephemeral: true})
        }

        if (interaction.values == 'Tutorials_UsersMenu') {
            const embed = new Discord.EmbedBuilder()
            .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynamic: true, size: 1024 })})
			.setColor('#800080')
			.setTitle('User Menu')
			.setDescription('The User Menus')
			.addFields({
				name: '1 Normal User Select Menu',
                value: `\`\`\`js\nconst select = new UserSelectMenuBuilder()\n.setCustomId('example3')\n.setPlaceholder('This is a Normal User Select Menu!');\n\`\`\``,
				inline: true
			},{
				name: '1 Multi User Select Menu',
				value: `\`\`\`js\nconst select = new UserSelectMenuBuilder()\n.setCustomId('example3')\n.setPlaceholder('This is a Multi User Select Menu!')\n.setMinValues(1)\n.setMaxValues(10);\n\`\`\``,
				inline: false
			},{
				name: '3. How to get the Value',
				value: `\`\`\`js\nclient.on(Events.InteractionCreate, async (interaction) => {\nif (!interaction.isUserSelectMenu()) return;\nif (interaction.customId == 'Example') {interaction.reply({content: \`You selected \${interaction.values}\`})\n}\n})\`\`\`\``
			})
			.setImage('https://cdn.discordapp.com/attachments/1113296059326799954/1153860741108088963/standard.gif')
			.setTimestamp()
			.setFooter({ text: 'Created by soyDaddy'})

			const select = new UserSelectMenuBuilder()
				.setCustomId('user1')
				.setPlaceholder('This is a Normal User Select Menu!')
			const select2 = new UserSelectMenuBuilder()
				.setCustomId('user2')
				.setPlaceholder('This is a Multi User Select Menu!')
				.setMinValues(1)
				.setMaxValues(10)
			const row = new ActionRowBuilder()
				.addComponents(select);
			const row2 = new ActionRowBuilder()
				.addComponents(select2);
            interaction.reply({embeds: [embed], components: [row, row2], ephemeral: true})
        }

        if (interaction.values == 'Tutorials_MentionsMenu') {
            const embed = new Discord.EmbedBuilder()
            .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynamic: true, size: 1024 })})
			.setColor('#800080')
			.setTitle('Mention Menu')
			.setDescription('The Mention Menus')
			.addFields({
				name: '1 Normal Mention Select Menu',
                value: `\`\`\`js\nconst select = new MentionableSelectMenuBuilder()\n.setCustomId('example3')\n.setPlaceholder('This is a Normal Mention Select Menu!');\n\`\`\``,
				inline: true
			},{
				name: '1 Multi Mention Select Menu',
				value: `\`\`\`js\nconst select = new MentionableSelectMenuBuilder()\n.setCustomId('example3')\n.setPlaceholder('This is a Multi Mention Select Menu!')\n.setMinValues(1)\n.setMaxValues(10);\n\`\`\``,
				inline: false
			},{
				name: '3. How to get the Value',
				value: `\`\`\`js\nclient.on(Events.InteractionCreate, async (interaction) => {\nif (!interaction.isMentionableSelectMenu()) return;\nif (interaction.customId == 'Example') {\ninteraction.reply({content: \`You selected \${interaction.values}\`})\n}\n})\`\`\`\``
			})
			.setImage('https://cdn.discordapp.com/attachments/1113296059326799954/1153860741108088963/standard.gif')
			.setTimestamp()
			.setFooter({ text: 'Created by soyDaddy'})

			const select = new MentionableSelectMenuBuilder()
				.setCustomId('mention1')
				.setPlaceholder('This is a Normal Mention Select Menu!')
			const select2 = new MentionableSelectMenuBuilder()
				.setCustomId('mention2')
				.setPlaceholder('This is a Multi Mention Select Menu!')
				.setMinValues(1)
				.setMaxValues(10)
			const row = new ActionRowBuilder()
				.addComponents(select);
			const row2 = new ActionRowBuilder()
				.addComponents(select2);
            interaction.reply({embeds: [embed], components: [row, row2], ephemeral: true})
        }

        if (interaction.values == 'Tutorials_ChannelMenu') {
            const embed = new Discord.EmbedBuilder()
            .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynamic: true, size: 1024 })})
			.setColor('#800080')
			.setTitle('Channel Menu')
			.setDescription('The Channel Menus')
			.addFields({
				name: '1',
				value: 'Description 1',
				inline: true
			},{
				name: '2',
				value: 'Description 2',
				inline: false
			},{
				name: '3',
				value: 'Description 3',
				inline: true
			},{
				name: '4',
				value: 'Description 4',
				inline: false
			},{
				name: '5',
				value: 'Description 5',
				inline: true
			},{
				name: '6',
				value: 'Description 6',
				inline: false
			},)
			.setImage('https://cdn.discordapp.com/attachments/1113296059326799954/1153860741108088963/standard.gif')
			.setTimestamp()
			.setFooter({ text: 'Created by soyDaddy'})

            interaction.reply({embeds: [embed], ephemeral: true})
        }

        if (interaction.values == 'Tutorials_Buttons') {
            const embed = new Discord.EmbedBuilder()
            .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynamic: true, size: 1024 })})
			.setColor('#800080')
			.setTitle('Buttons')
			.setDescription('The Buttons')
			.addFields({
				name: '1',
				value: 'Description 1',
				inline: true
			},{
				name: '2',
				value: 'Description 2',
				inline: false
			},{
				name: '3',
				value: 'Description 3',
				inline: true
			},{
				name: '4',
				value: 'Description 4',
				inline: false
			},{
				name: '5',
				value: 'Description 5',
				inline: true
			},{
				name: '6',
				value: 'Description 6',
				inline: false
			},)
			.setImage('https://cdn.discordapp.com/attachments/1113296059326799954/1153860741108088963/standard.gif')
			.setTimestamp()
			.setFooter({ text: 'Created by soyDaddy'})

            interaction.reply({embeds: [embed], ephemeral: true})
        }

        if (interaction.values == 'Tutorials_Modals') {
            const embed = new Discord.EmbedBuilder()
            .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynamic: true, size: 1024 })})
			.setColor('#800080')
			.setTitle('Modals')
			.setDescription('The Modals')
			.addFields({
				name: '1',
				value: 'Description 1',
				inline: true
			},{
				name: '2',
				value: 'Description 2',
				inline: false
			},{
				name: '3',
				value: 'Description 3',
				inline: true
			},{
				name: '4',
				value: 'Description 4',
				inline: false
			},{
				name: '5',
				value: 'Description 5',
				inline: true
			},{
				name: '6',
				value: 'Description 6',
				inline: false
			},)
			.setImage('https://cdn.discordapp.com/attachments/1113296059326799954/1153860741108088963/standard.gif')
			.setTimestamp()
			.setFooter({ text: 'Created by soyDaddy'})

            interaction.reply({embeds: [embed], ephemeral: true})
        }

        if (interaction.values == 'Tutorials_SlashCommands') {
            const embed = new Discord.EmbedBuilder()
            .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynamic: true, size: 1024 })})
			.setColor('#800080')
			.setTitle('Slash Commands')
			.setDescription('The Slash Commands')
			.addFields({
				name: '1',
				value: 'Description 1',
				inline: true
			},{
				name: '2',
				value: 'Description 2',
				inline: false
			},{
				name: '3',
				value: 'Description 3',
				inline: true
			},{
				name: '4',
				value: 'Description 4',
				inline: false
			},{
				name: '5',
				value: 'Description 5',
				inline: true
			},{
				name: '6',
				value: 'Description 6',
				inline: false
			},)
			.setImage('https://cdn.discordapp.com/attachments/1113296059326799954/1153860741108088963/standard.gif')
			.setTimestamp()
			.setFooter({ text: 'Created by soyDaddy'})

            interaction.reply({embeds: [embed], ephemeral: true})
        }

        if (interaction.values == 'Tutorials_Embeds') {
            const embed = new Discord.EmbedBuilder()
            .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynamic: true, size: 1024 })})
			.setColor('#800080')
			.setTitle('Embeds')
			.setDescription('The Embeds')
			.addFields({
				name: '1',
				value: 'Description 1',
				inline: true
			},{
				name: '2',
				value: 'Description 2',
				inline: false
			},{
				name: '3',
				value: 'Description 3',
				inline: true
			},{
				name: '4',
				value: 'Description 4',
				inline: false
			},{
				name: '5',
				value: 'Description 5',
				inline: true
			},{
				name: '6',
				value: 'Description 6',
				inline: false
			},)
			.setImage('https://cdn.discordapp.com/attachments/1113296059326799954/1153860741108088963/standard.gif')
			.setTimestamp()
			.setFooter({ text: 'Created by soyDaddy'})

            interaction.reply({embeds: [embed], ephemeral: true})
        }
    }
}
	if (interaction.isRoleSelectMenu() || interaction.isUserSelectMenu()) {
if (interaction.customId == 'user1') {
	interaction.reply({content: `You selected <@${interaction.values}>`, ephemeral: true})
}
if (interaction.customId == 'user2') {
	interaction.reply({content: `You selected <@${interaction.values}>`, ephemeral: true})
}
if (interaction.customId == 'role1') {
	interaction.reply({content: `You selected <@&${interaction.values}>`, ephemeral: true})
}
if (interaction.customId == 'role2') {
	interaction.reply({content: `You selected <@&${interaction.values}>`, ephemeral: true})
}
	}
})
}
