const express = require('express'); //require express in the app
const path = require('path');
const { link } = require("fs");

//env include
const dotenv = require('dotenv');
dotenv.config();

//import page routes
const adminMenuRouter = require("./modules/offerings/router");
const pageRouter = require('./modules/pages/router');


const app = express(); //create an express app
const port = process.env.PORT || "8284"; //set up app to run on port #8284

//set up template engine (pug)
app.set('/', express.static(path.join(__dirname, 'views'))); //set up views to look into the specified folder
app.set('view engine', 'pug'); //set up app to use pug as template engine

//set up path for static files
app.use(express.static(path.join(__dirname, 'public')));

//USE PAGE ROUTES FROM MODULE
app.use("/", pageRouter);
app.use("/admin/menu", adminMenuRouter);

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
})