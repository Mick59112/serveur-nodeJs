
const express = require("express");
const mongoose = require("mongoose");
const port = 3000;
const app = express();
//connexion à la DB
const bdd = mongoose.connect('mongodb://localhost:27017/exercices', { useNewUrlParser: true });
//creation du model qui represente un type d'information
const Resto = mongoose.model('restaurants', { name: String });
app.get('/', (req, res) => {
   Resto.findOne(
       (e, data) => {
           res.json(data);
       }
   )
})
app.listen(port, () => {
   console.log("serveur ecoute sur le port " + port);
});

