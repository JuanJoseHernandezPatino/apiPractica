const { Router } = require("express");
//const fetch = require('node-fetch')
//const fetch = require('node-fetch')
let rutas = Router();

const axios = require('axios');




rutas.get("/", async (req, res) => {
    const url = 'https://jsonplaceholder.typicode.com/users';

    axios.get(url)
        .then(response => {
            const users = response.data;
            res.json(users)
        })
        .catch(error => {
            console.log(error);
        });
})

module.exports = rutas;