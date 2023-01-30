const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrenadorSchema = new Schema({
    nombre: String,
    tipo: String,
    descripcion: String
})

//Creamos el modelo
const Entrenador = mongoose.model('DBPokemon', entrenadorSchema, "entrenador");

module.exports = Entrenador;