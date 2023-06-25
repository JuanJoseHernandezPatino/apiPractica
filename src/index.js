let express = require("express")
let app = express();
let morgan = require("morgan")
let rutas = require("./routes/rutas")

//setings
app.set("port", process.env.PORT || 3400)
app.set("json spaces", 2)

//middlewares
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//routes
app.use("/", rutas)
app.use("/api/movies", require("./routes/movies"))

//starting the server
app.listen(3400, () => {
    console.log(`escuchando en ${app.get("port")}`);
})