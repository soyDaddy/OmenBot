const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    Guild: String,
    Channel: String,
    Msg: Number
});

module.exports = mongoose.model("statusMsg", Schema);