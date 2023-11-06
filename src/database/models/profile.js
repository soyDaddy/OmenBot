const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    User: String,
    Gender: { type: String, default: "" },
    Age: { type: String, default: "" },
    Orgin: { type: String, default: "" },
    Pets: Array,
    Songs: Array,
    Background: {type: String, default: 'https://c4.wallpaperflare.com/wallpaper/465/1015/587/anime-darling-in-the-franxx-zero-two-darling-in-the-franxx-hd-wallpaper-preview.jpg'},
    Movies: Array,
    Actors: Array,
    Artists: Array,
    Food: Array,
    Hobbys: Array,
    Status: { type: String, default: "" },
    Aboutme: { type: String, default: "" },
    Color: { type: String, default: "" },
    Birthday: { type: String, default: "" },
});

module.exports = mongoose.model("Profile", Schema);