const express = require('express'); //require express in the app
const bootstrap = require('bootstrap'); //require bootstrap in the app
const path = require("path");

const app = express(); //create an express app
const port = process.env.PORT || "6789"; //set up app to run on port #6789

//set up bootstrap to be used
app.use('/', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/')))

//set up template engine (pug)
app.set("views", path.join(__dirname, "views")) //set up views setting to look into this folder
app.set("view engine", "pug"); //set up app to use pug as template engine

//set up path for static files
app.use(express.static(path.join(__dirname, "public")));

//set up some pages routes
app.get("/", (request, response) => {
    response.status(200).send("Test Page");//just to test
});

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});