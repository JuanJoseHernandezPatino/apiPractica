let { Router } = require("express");
let rutas = Router()

rutas.get("/test", (req, res) => {
    let data = {
        "nombre": "juan",
        "apellido": "hernandez"
    }
    res.json(data)
})

module.exports = rutas;