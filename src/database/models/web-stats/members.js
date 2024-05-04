const mongoose = require('mongoose');

const MemberStatsSchema = new mongoose.Schema({
  Guild: String,
  month: String,
  joins: { type: Number, default: 0 },
  leaves: { type: Number, default: 0 }
});

const MemberStats = mongoose.model('MemberStats', MemberStatsSchema);

module.exports = MemberStats;
