const express = require("express"); //include express in the app
const path = require("path"); //module to help with file path

const app = express(); //create an express app
const port = process.env.PORT || "5000"; //set up my app to run on port 5000

//set up template engine (pug)
app.set("views", path.join(__dirname, "views")); //set up "views" setting to look into this folder
app.set("view engine", "pug"); //set up app to use pug as template engine

//set up path for static files
app.use(express.static(path.join(__dirname, "public")));

//set up some page routes
app.get("/", (request, response) => {
  //response.status(200).send("Test page"); //just to test
  response.render("index", { title: "Home" });
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
