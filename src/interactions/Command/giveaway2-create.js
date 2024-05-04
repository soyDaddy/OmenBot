const { SlashCommandBuilder, EmbedBuilder, ChannelType, ActionRowBuilder, ButtonStyle, ButtonBuilder, PermissionsBitField } = require('discord.js');
const Giveaway = require('../../database/models/giveaway2')
const generator = require('generate-password');
const ms = require('ms')
module.exports = {
    data: new SlashCommandBuilder()
  			.setName('iniciar_sorteo')
  			.setDescription('Inicia un nuevo sorteo.')
  			.addStringOption(option => option.setName('premio').setDescription('El premio del sorteo').setRequired(true))
  			.addIntegerOption(option => option.setName('ganadores').setDescription('Número de ganadores').setRequired(true))
  			.addStringOption(option => option.setName('duracion').setDescription('Duración del sorteo en minutos').setRequired(true))
    		.addChannelOption(option => option.setName('channel').setDescription('Canal donde enviar el sorteo').setRequired(true).addChannelTypes(ChannelType.GuildText).addChannelTypes(ChannelType.GuildNews))
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator)
    ,

    run: async (client, interaction, args) => {
        const gwID = generator.generate({
        	length: 10,
        	numbers: true
    	});
        const prize = interaction.options.getString('premio');
  		const winnerCount = interaction.options.getInteger('ganadores');
  		const durationMinutes = interaction.options.getString('duracion');
        const channel = interaction.options.getChannel('channel');
        const duracion = ms(durationMinutes)
        const endAt = new Date(Date.now() + (duracion));
		const duration = Math.floor(endAt / 1000);
  		const embed = new EmbedBuilder()
    		.setTitle('🎉 GIVEAWAY 🎉')
    		.setDescription(`🎁 - Prize: **${prize}**
            ⏰ - Ends at: <t:${duration}:R>!
			🎉 - Hosted by: ${interaction.user}
            👑 - Winners: **${winnerCount}**`)
    		.setColor('#800080')
        	.setThumbnail(interaction.guild.iconURL({ dynamic: true, size: 1024 }))
    		.setFooter({ text: `Giveaway` })
        	.setTimestamp();

  const row = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
        .setCustomId('participate')
        .setLabel('🎉 Join 🎉')
        .setStyle(ButtonStyle.Success),
    );
  const message = await channel.send({ embeds: [embed], components: [row], fetchReply: true });

  const newGiveaway = new Giveaway({
    gwID: gwID,
    messageId: message.id,
    channelId: channel.id,
    guildId: interaction.guild.id,
    hostedBy: interaction.user.id,
    startAt: new Date(),
    endAt: endAt,
    prize: prize,
    winnerCount: winnerCount,
    participants: [],
    isActive: true
  });
  await newGiveaway.save();

  await interaction.reply({ content: 'Sorteo iniciado con éxito!', ephemeral: true });

    },
};

 