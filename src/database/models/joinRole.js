const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    Guild: String,
    Roles: {type: Array, default: []},
});

module.exports = mongoose.model("joinRole", Schema);