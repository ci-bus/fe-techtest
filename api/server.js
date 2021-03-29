const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    cars = require('./models/carsModel'),
    routes = require('./routes/carRoutes'),
    cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/miinstanciaDB', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true
});

app.use(cors({origin: 'http://localhost:4200'}));

routes(app);
app.listen(port);

console.log('Inicializar base de datos: http://localhost:' + port + '/init');
console.log('Coger las marcas: http://localhost:' + port + '/carbrands');
console.log('Coger los modelos de una marca: http://localhost:' + port + '/carmodels/CB001');