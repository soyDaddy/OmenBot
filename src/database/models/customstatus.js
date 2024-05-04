const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    Guild: String,
    Role: String,
    Status: String,
});

module.exports = mongoose.model("customstatus", Schema);