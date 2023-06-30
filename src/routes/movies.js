let express = require("express");
let rutas = express.Router()
let movies = require("../movies.json")
//console.log(movies)

rutas.get("/", (req, res) => {
    res.send(movies)
})

rutas.post("/", (req, res) => {
    console.log(req)
    const { nombre, clasificacion, director, anio } = req.body
    if (nombre, clasificacion, director, anio) {
        const id = movies.length + 1;
        const newMovie = { id, ...req.body };
        movies.push(newMovie);
        res.json(movies)
    } else {
        res.send({ "error": "error al ingresar los datos, faltan" })
    }
})




module.exports = rutas;