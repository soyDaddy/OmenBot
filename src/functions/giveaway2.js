const { EmbedBuilder, ActionRowBuilder, ButtonStyle, ButtonBuilder } = require('discord.js');
const Giveaway = require('../database/models/giveaway2.js');

async function announceWinners(giveaway, winnerIds, client) {
    const channel = await client.channels.fetch(giveaway.channelId);
    if (!channel) return;
    const message = await channel.messages.fetch(giveaway.messageId);
    if (!message) return;
    const winnersMention = winnerIds.map(id => `<@${id}>`).join(', ');
    const embed = new EmbedBuilder()
        .setTitle('Giveaway Ended!')
        .setDescription(`🎉 Congratulations ${winnersMention}!\nYou won: **${giveaway.prize}**`)
        .setColor('#800080')
        .setTimestamp();
    const row = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
        .setCustomId('end')
        .setLabel('🎉 Ended 🎉')
        .setStyle(ButtonStyle.Danger)
        .setDisabled(true),
    );
    await message.edit({ content: '🎉 **Giveaway Ended** 🎉', embeds: [embed], components: [row] });
    for (const id of winnerIds) {
     	const user = await client.users.fetch(id);
        const guild = await client.guilds.fetch(giveaway.guildId);
    	const embed = new EmbedBuilder()
        	.setTitle('🎉 Congratulations 🎉')
        	.setDescription(`Congratulations dear <@${id}>
            You won **${giveaway.prize}**
            To claim it, go to the guild: **${guild.name}** and check the giveaway instructions.`)
        	.setColor('#800080')
        	.setThumbnail(`${client.guilds.cache.get(giveaway.guildId)?.iconURL({ dynamic: true, size: 1024 }) || client.user.displayAvatarURL({ dynamic: true, size: 1024 })}`)
    		.setFooter({ text: `Giveaway` })
        	.setTimestamp();
    	user?.send({ embeds: [embed] });
	}
}

async function checkGiveaways(client) {
  const now = new Date();
  const endedGiveaways = await Giveaway.find({ endAt: { $lte: now }, isActive: true });
  for (const giveaway of endedGiveaways) {
    const winnerIds = selectRandomWinners(giveaway.participants, giveaway.winnerCount);
      announceWinners(giveaway, winnerIds, client);
      giveaway.winners = winnerIds;
      giveaway.isActive = false;
      await giveaway.save();
  }
    const checkGW = await Giveaway.find({ isActive: true });
    for (const giveaway of checkGW) {
        if (giveaway.participants.length != 0) {
			updateGiveawayMessage(giveaway, client)
        }
  	}
}

async function deactivateGiveaway(messageId) {
  await Giveaway.updateOne({ messageId: messageId }, { $set: { isActive: false } });
}

function selectRandomWinners(participants, count) {
  const shuffled = participants.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

async function addParticipant(guildId, messageId, userId, client) {
  try {
    let giveaway = await Giveaway.findOne({ guildId: guildId, messageId: messageId });
    if (!giveaway) {
      console.log('Sorteo no encontrado.');
      return { success: false, message: 'Sorteo no encontrado.' };
    }
    if (giveaway.participants.includes(userId)) {
      return { success: false, message: 'Ya estás participando.', giveawayId: giveaway.gwID };
    } else {
      giveaway.participants.push(userId);
      await giveaway.save();
      return { success: true, message: 'Añadido al sorteo exitosamente.', giveawayId: giveaway.gwID, giveaway: giveaway };
    }
  } catch (error) {
    console.error('Error al añadir participante:', error);
    return { success: false, message: 'Error al añadir participante.' };
  }
}

async function removeParticipant(gwID, userId) {
  try {
    const giveaway = await Giveaway.findOne({ gwID: gwID });
    const index = giveaway.participants.indexOf(userId);
    if (index > -1) {
      giveaway.participants.splice(index, 1);
      await giveaway.save();
      return giveaway;
    }
    return false; 
  } catch (error) {
    console.error('Error al eliminar al participante:', error);
    return false; 
  }
}

async function updateGiveawayMessage(giveaway, client) {
	const fecha = new Date(giveaway.endAt);
	const milisegundos = fecha.getTime();
    const duration = Math.floor(milisegundos / 1000);
    client.guilds.fetch(giveaway.guildId);
  	const embed = new EmbedBuilder()
    	.setTitle('🎉 GIVEAWAY 🎉')
    	.setDescription(`🎁 - Prize: **${giveaway.prize}**
        ⏰ - Ends at: <t:${duration}:R>!
		🎉 - Hosted by: <@${giveaway.hostedBy}>
        🫂 - Entries: **${giveaway.participants.length}**
        👑 - Winners: **${giveaway.winnerCount}**
        Join now!!`)
    	.setColor('#800080')
        .setThumbnail(`${client.guilds.cache.get(giveaway.guildId)?.iconURL({ dynamic: true, size: 1024 }) || client.user.displayAvatarURL({ dynamic: true, size: 1024 })}`)
    	.setFooter({ text: `Giveaway` })
        .setTimestamp();
    
  try {
    const guild = await client.guilds.fetch(giveaway.guildId)
    const channel = await guild.channels.fetch(giveaway.channelId)
    const message = await channel.messages.fetch(giveaway.messageId);
    await message.edit({ embeds: [embed] });
  } catch (error) {
    console.error("Error al actualizar el mensaje del sorteo:", error);
  }
}

async function rerollSorteo(messageId) {
  try {
    const giveaway = await Giveaway.findOne({ messageId: messageId });
    if (!giveaway) {
      console.log('Sorteo no encontrado.');
      return;
    }

    if (new Date() < giveaway.endAt) {
      console.log('El sorteo aún no ha concluido.');
      return;
    }
      
    const nuevosParticipantes = giveaway.participants.filter(participant => !giveaway.winners.includes(participant));

    if (nuevosParticipantes.length === giveaway.winnerCount) {
      console.log('No hay participantes disponibles para reroll.');
      return;
    }
      
    const nuevosGanadores = [];
    for (let i = 0; i < giveaway.winnerCount && nuevosParticipantes.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * nuevosParticipantes.length);
      nuevosGanadores.push(nuevosParticipantes[randomIndex]);
      nuevosParticipantes.splice(randomIndex, 1);
    }
    giveaway.winners = nuevosGanadores;
    await giveaway.save();

    console.log(`Nuevos ganadores seleccionados: ${nuevosGanadores.join(', ')}`);

  } catch (error) {
    console.error('Error al realizar reroll:', error);
  }
}

async function pausarSorteo(messageId, pausar) {
  try {
    const resultado = await Giveaway.updateOne({ messageId: messageId }, { $set: { isPaused: pausar } });
    if (resultado.modifiedCount === 0) {
      console.log('Sorteo no encontrado o no se requirió actualización.');
      return false;
    }
    return true;
  } catch (error) {
    console.error('Error al pausar el sorteo:', error);
    return false;
  }
}


module.exports = { updateGiveawayMessage, addParticipant, announceWinners, checkGiveaways, deactivateGiveaway, selectRandomWinners, removeParticipant, rerollSorteo, pausarSorteo }