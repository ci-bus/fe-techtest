'use strict';
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
let carsModels = new Schema({
    id: {
        type: String,
        required: 'Identificador',
        unique: true
    },
    model: {
        type: String,
        required: 'Modelo del auto'
    }
});
var carsSchema = new Schema({
    id: {
        type: String,
        required: 'Identificador',
        unique: true
    },
    brand: {
        type: String,
        required: 'Marca del auto'
    },
    models: [carsModels]
});
module.exports = mongoose.model('cars', carsSchema);