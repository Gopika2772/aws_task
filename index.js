const express = require("express");
const path = require('path')
const cors = require("cors");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const userroute = require("./routes");
const app = express();
const { db } = require("./db");

db.connect((err) => {
    if (err) {
        return console.log("Something went wrong ", err);
    }
    return console.log("Mysql connected");
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));


app.use("/", userroute);

app.listen(3000, () => {
    console.log("SERVER SUCCESS");
});