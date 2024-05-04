const mongoose = require('mongoose');

const commandUsageSchema = new mongoose.Schema({
  commandName: String,
  guildId: String,
  count: { type: Number, default: 0 }
});

const CommandUsage = mongoose.model('CommandUsage', commandUsageSchema);

module.exports = CommandUsage;
