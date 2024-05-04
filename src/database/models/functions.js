const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    Guild: String,
    Levels: { type: Boolean, default: false },
    Welcome: { type: Boolean, default: false },
    Rewards: { type: Boolean, default: false },
    Beta: { type: Boolean, default: false },
    AntiAlt: { type: Boolean, default: false },
    AntiSpam: { type: Boolean, default: false },
    AntiCaps: { type: Boolean, default: false },
    AntiInvite: { type: Boolean, default: false },
    AntiLinks: { type: Boolean, default: false },
    Locale: { type: String, default: 'en-US'},
    Prefix: String,
    Color: String 
});

module.exports = mongoose.model("functions", Schema);