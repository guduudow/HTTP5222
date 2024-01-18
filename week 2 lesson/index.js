const express = require("express"); //include express in this app
const path = require("path"); //module to help with file paths

const app = express(); //create an express app
const port = process.env.PORT || "8888"; //set my app to run at port 8888

//SET UP TEMPLATE ENGINE (PUG)
app.set("views", path.join(__dirname, "views")); //set up "views" setting to look into the <__dirname>/views folder
app.set("view engine", "pug"); //set up app to use Pug as template engine

//SET UP A PATH FOR STATIC FILES
app.use(express.static(path.join(__dirname, "public")));

//set up some page routes
app.get("/", (request, response) => {
  //response.status(200).send("Test page"); //this is just to test
  response.render("index", { title: "Home" });
});
app.get("/about", (request, response) => {
  response.render("about", { title: "About" });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
