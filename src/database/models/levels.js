const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    userID: { type: String },
    guildID: { type: String },
    xp: { type: Number, default: 0 },
    level: { type: Number, default: 0 },
    lastUpdated: { type: Date, default: new Date() },
    voicexp: { type: Number, default: 0 },
    voicexpleft: { type: Number, default: 400 },
    voicelevel: { type: Number, default: 0},
    voicetime: { type: Number, default: 0},
    VJoin: { type: Date }
});

module.exports = mongoose.model("Levels", Schema);