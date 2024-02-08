const express = require('express'); //require express in the app
const path = require('path');
const { MongoClient, ObjectId } = require("mongodb") //import MongoClient from mongoDB
const { link } = require("fs");

//db values
const dbUrl = "mongodb://127.0.0.1:27017/offerings";
const client = new MongoClient(dbUrl);

const app = express(); //create an express app
const port = process.env.PORT || "8284"; //set up app to run on port #8284

//set up template engine (pug)
app.set('/', express.static(path.join(__dirname, 'views'))); //set up views to look into the specified folder
app.set('view engine', 'pug'); //set up app to use pug as template engine

//set up path for static files
app.use(express.static(path.join(__dirname, 'public')));

//set up some pages routes
app.get('/', (request, response) => {
    //response.status(200).send("Test Page"); //just to test
    response.render("index", { title: "Home" });
});

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
})

//next step ask teacher best way to add bootstrap either thru CDN or NPM
//my three pages - homepage, clothes selection and form to purchase