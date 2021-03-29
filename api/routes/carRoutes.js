'use strict';
module.exports = function (app) {
    var carController = require('../controllers/carController');

    app.route('/init')
        .get(carController.initDatabase);

    app.route('/carbrands')
        .get(carController.getAllCarBrands);

    app.route('/carmodels/:carBrandId')
        .get(carController.getCarModels);

};