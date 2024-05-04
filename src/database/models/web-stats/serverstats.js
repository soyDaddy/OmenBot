const mongoose = require('mongoose');

const serverStatsSchema = new mongoose.Schema({
  Guild: String,
  totalMessages: { type: Number, default: 0 },
  totalMembers: { type: Number, default: 0 }
});

const ServerStats = mongoose.model('ServerStats', serverStatsSchema);

module.exports = ServerStats;
