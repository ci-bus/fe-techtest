'use strict';
var mongoose = require('mongoose'),
    cars = mongoose.model('cars');

exports.initDatabase = function (req, res) {
    cars.find({}, function (err, cars) {
        if (err)
            res.send(err);
        else if (!cars.length) {
            new cars({ "id": "CB001", "brand": "Mazda", "models": [{ "id": "CB001-001", "model": "2" }, { "id": "CB001-002", "model": "3" }, { "id": "CB001-003", "model": "6" }, { "id": "CB001-004", "model": "CX-3" }, { "id": "CB001-005", "model": "CX-30" }, { "id": "CB001-006", "model": "CX-5" }, { "id": "CB001-007", "model": "CX-9" }] }).save();
            new cars({ "id": "CB002", "brand": "Renault", "models": [{ "id": "CB002-001", "model": "Kwid" }, { "id": "CB002-002", "model": "Sandero" }, { "id": "CB002-003", "model": "Logan" }, { "id": "CB002-004", "model": "Duster" }, { "id": "CB002-005", "model": "Oroch" }, { "id": "CB002-006", "model": "Koleos" }, { "id": "CB002-007", "model": "Alaskan" }, { "id": "CB002-008", "model": "Clío" }] }).save();
            new cars({ "id": "CB003", "brand": "Chevrolet", "models": [{ "id": "CB003-001", "model": "Onix" }, { "id": "CB003-002", "model": "Sail" }, { "id": "CB003-003", "model": "Beat" }, { "id": "CB003-004", "model": "Spark" }, { "id": "CB003-005", "model": "Traverse" }, { "id": "CB003-006", "model": "Captiva" }, { "id": "CB003-007", "model": "Camaro" }, { "id": "CB003-008", "model": "Equinox" }, { "id": "CB003-009", "model": "Traverse" }, { "id": "CB003-010", "model": "Tahoe" }, { "id": "CB003-011", "model": "Blazer" }] }).save();
            new cars({ "id": "CB004", "brand": "Hyundai", "models": [{ "id": "CB004-001", "model": "i25" }, { "id": "CB004-002", "model": "i35" }, { "id": "CB004-003", "model": "i10" }, { "id": "CB004-004", "model": "Tucson" }, { "id": "CB004-005", "model": "Santafe" }, { "id": "CB004-006", "model": "Elantra" }] }).save();
            new cars({ "id": "CB005", "brand": "Kia", "models": [{ "id": "CB005-001", "model": "Sportage" }, { "id": "CB005-002", "model": "Picanto" }, { "id": "CB005-003", "model": "Stonic" }, { "id": "CB005-004", "model": "Niro" }, { "id": "CB005-005", "model": "Rio" }, { "id": "CB005-006", "model": "Cerato" }] }).save();
            res.json("Base de datos inicializada, enjoy!");
        } else {
            res.json("La base de datos ya ha sido inicializada!");
        }
    });
}

exports.getAllCarBrands = function (req, res) {
    cars.find({}, function (err, cars) {
        if (err)
            res.send(err);
        let carBrands = cars.map(car => {
            return { id: car.id, brand: car.brand };
        });
        res.json(carBrands);
    });
};

exports.getCarModels = function (req, res) {
    cars.find({ id: req.params.carBrandId }, function (err, models) {
        if (err)
            res.send(err);
        else if (models.length) res.json(models[0].models.map((model) => {
            return { id: model.id, model: model.model };
        }));
        else res.json([]);
    });
}