let express = require("express");
let rutas = express.Router()
let movies = require("../movies.json")
console.log(movies)

rutas.get("/", (req, res) => {
    res.send(movies)
})


module.exports = rutas;