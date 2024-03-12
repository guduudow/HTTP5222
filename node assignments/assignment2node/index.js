const express = require("express"); // require express in the app
const path = require("path");

//require dotenv for api key
const dotenv = require("dotenv");
dotenv.config();

//require axios for HTTP request
const axios = require("axios");

const app = express();
const port = process.env.PORT || "7999"; //set up app to run on port number 7999

//set up template engine (pug)
app.set('/', express.static(path.join(__dirname, 'views')));
app.set('view engine', 'pug');

app.get("/", (request, response) => {
  //response.status(200).send("Test page"); //this is just to test
  response.render("index", { title: "Home" });
});

//set up path for static files
app.use(express.static(path.join(__dirname, 'public')));

// //dictionary API 
// let word;
// const dict = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
})