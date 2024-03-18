const express = require("express"); // require express in the app
const path = require("path");

//require dotenv for api key
const dotenv = require("dotenv");
dotenv.config();

//require axios for HTTP request
const axios = require("axios");

//require dictionary API for word search
const dictionary = require("./modules/dictionary/func");

const app = express();
const port = process.env.PORT || "7999"; //set up app to run on port number 7999

app.use(express.urlencoded({ extended: true }));

//set up template engine (pug)
app.set('/', express.static(path.join(__dirname, 'views')));
app.set('view engine', 'pug');

app.get("/", async (request, response) => {
  //response.status(200).send("Test page"); //this is just to test
  //let wordSearch = await dictionary.getWord();
  //console.log(wordSearch);
  // response.render("search", { title: "search", word: wordSearch })
  response.render("index", { title: "Home" });
});

//page for word search

app.post('/search', async (request, response) => {
  const word = request.body.word;
  let dict = await dictionary.getWord();
  //const wordData = response.data[0];
  response.render('search', { word, dict });
});








// app.get('/search', async (request, response) => {
//   // let wordSearch = await dictionary.getWord();
//   // console.log(wordSearch);
//   // response.render("search", { title: "search", word: wordSearch })
// });

//set up path for static files
app.use(express.static(path.join(__dirname, 'public')));

// //dictionary API 
// let word;
// const dict = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
})