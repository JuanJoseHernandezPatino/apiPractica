let express = require("express");
let rutas = express.Router()
let movies = require("../movies.json")
let _ = require("underscore")
//console.log(movies)

//enviar
rutas.get("/", (req, res) => {
    res.send(movies)
})

//ingresar
rutas.post("/", (req, res) => {
    const { nombre, clasificacion, director, anio } = req.body;
    if (nombre, clasificacion, director, anio) {
        const id = movies.length + 1;
        const newMovie = { ...req.body, id }
        movies.push(newMovie)
        res.json(movies)
    } else {
        res.status(500).json({ error: "faltan datos" })
    }
})

//eliminar
rutas.delete("/:id", (req, res) => {
    let { id } = req.params
    //const { } = req.params;
    _.each(movies, (movie, i) => {
        if (movie.id == id) {
            movies.splice(i, 1);
        }
    })
    res.send(movies)
})

//actualizar
rutas.put("/:id", (req, res) => {
    let { id } = req.params;
    const { nombre, clasificacion, director, anio } = req.body;
    if (nombre, clasificacion, director, anio) {
        _.each(movies, (movie, i) => {
            if (movie.id == id) {
                movie.nombre = nombre;
                movie.director = director;
                movie.clasificacion = clasificacion;
                movie.anio = anio
            }
        })
        res.json(movies)
    } else {
        res.json({ error: "faltan datos" })
    }
})



module.exports = rutas;