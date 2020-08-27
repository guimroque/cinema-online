const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");


// View engine
app.set('view engine','ejs');

app.use(session({
    secret: "qualquercoisa", cookie: { maxAge: 30000000},
    saveUninitialized: true,
    resave: true
}))

app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Router

    app.get("/", (req, res) => {
        res.render("index.ejs");
    })
    app.get("/filme", (req, res) => {//passando id do filme para mostrar informações do mesmo
        res.render("filme.ejs");
    })
    app.get("/login", (req, res) => {
        res.render("login.ejs");
    })
    app.get("/signup", (req, res) => {
        res.render("signup.ejs");
    })
    app.get("/ver", (req, res) => {
        res.render("user/assistir.ejs");
    })

// End Router
app.listen(3000, () => {
    console.log("O servidor está rodando!")
})