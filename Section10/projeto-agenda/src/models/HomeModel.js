const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: { type: String, required: false },
});

const HomeModel = mongoose.model('Home', HomeSchema);

class Home {}

module.exports = Home;