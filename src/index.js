let express = require("express")
let app = express();
let morgan = require("morgan")
let rutas = require("./routes/rutas")
const bcrypt = require('bcryptjs');


//setings
app.set("port", process.env.PORT || 3400)
app.set("json spaces", 10)

// Middleware de autenticación
const authenticateUser = (req, res, next) => {
    const { authorization } = req.headers;

    if (authorization && authorization.startsWith('Basic ')) {
        const base64Credentials = authorization.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
        const [username, password] = credentials.split(':');
        const validUsername = 'juan';
        const validPassword = '$2a$10$Lr/7dk39UrOQNi03ajK3letROOOyhPTz81mE.V0bdXRZF9pgl9c42';
        if (username === validUsername && bcrypt.compareSync(password, validPassword)) {
            return next();
        }
    }

    res.set('WWW-Authenticate', 'Basic realm="Authorization Required"');
    res.status(401).send('Authentication required.');
};

// Agrega el middleware de autenticación antes de la ruta "/api/movies"

//middlewares
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//routes
app.use("/", rutas)
app.use('/api/movies', authenticateUser, require('./routes/movies'));

app.use("/api/users", require("./routes/users"))

//starting the server
app.listen(3400, () => {
    console.log(`escuchando en ${app.get("port")}`);
})