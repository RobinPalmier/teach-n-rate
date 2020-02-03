const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const hostname = '0.0.0.0';
const port = 3000;

// Connexion BDD
// protocole://service/nom_bdd
mongoose.connect('mongodb://mongo/' + process.env.DB_NAME);

app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());

// Importe la fonction anonyme dans la constante
const userRoute = require('./api/routes/userRoute');
const sessionRoute = require('./api/routes/sessionRoute');
const rateRoute = require('./api/routes/rateRoute');
const moduleRoute = require('./api/routes/moduleRoute');
// Utilise la fonction anonyme contenu dans la constante
userRoute(app);
rateRoute(app);
sessionRoute(app);
moduleRoute(app);


app.listen(port, hostname);
