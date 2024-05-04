const mongoose = require('mongoose');

const giveawaySchema = new mongoose.Schema({
  gwID: String,
  messageId: String,
  channelId: String,
  hostedBy: String,
  guildId: String,
  startAt: Date,
  endAt: Date,
  prize: String,
  participants: [String],
  winnerCount: Number,
  winners: [String],
  isActive: { type: Boolean, default: true },
});

const Giveaway = mongoose.model('Sorteos', giveawaySchema);

module.exports = Giveaway;
