const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    Guild: String,
    Channel: String,
    Logs: String
});

module.exports = mongoose.model("boosttracker", Schema);