const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    Guild: String,
    inviteJoin: String,
    inviteImage: String,
    inviteLeave: String
});

module.exports = mongoose.model("inviteMessages", Schema);