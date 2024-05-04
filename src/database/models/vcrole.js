const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    Guild: String,
    Channel: String,
    Role: String
});
 
module.exports = mongoose.model("vcrole", Schema);