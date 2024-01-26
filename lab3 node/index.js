const express = require("express"); //include express in this app
const path = require("path"); //module to help with file paths
const { MongoClient, ObjectId } = require("mongodb"); //import MongoClient from mongodb
const { link } = require("fs");

//DB values
const dbUrl = "mongodb://127.0.0.1:27017/testdb";
const client = new MongoClient(dbUrl);

const app = express(); //create an Express app
const port = process.env.PORT || "8888";

//SET UP TEMPLATE ENGINE (PUG)
app.set("views", path.join(__dirname, "views")); //set up "views" setting to look in the <__dirname>/views folder
app.set("view engine", "pug"); //set up app to use Pug as template engine

//SET UP A PATH FOR STATIC FILES
app.use(express.static(path.join(__dirname, "public")));

//SET UP FOR EASIER FORM DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//SET UP SOME PAGE ROUTES
app.get("/", async (request, response) => {
  //response.status(200).send("Test page again"); //this is just to test
  //test getLinks()
  let links = await getLinks();
  //console.log(links);

  response.render("index", { title: "Home", menu: links });
});
app.get("/about", async (request, response) => {
  let links = await getLinks();
  response.render("about", { title: "About", menu: links });
});
//ADMIN PAGES
app.get("/admin/menu", async (request, response) => {
  let links = await getLinks();
  response.render("menu-admin", { title: "Administer menu", menu: links });
})
app.get("/admin/menu/add", async (request, response) => {
  let links = await getLinks();
  response.render("menu-add", { title: "Add menu link", menu: links })
});
app.get("/admin/menu/edit", async (request, response) => {
  if (request.query.linkId) {
    let linkToEdit = await getSingleLink(request.query.linkId);
    let links = await getLinks();
    response.render("menu-edit", {title: "Edit menu link", menu: links, editLink: linkToEdit });
  } else {
    response.redirect("/admin/menu");
  }
});

//ADMIN FORM PROCESSING PATHS
app.post("/admin/menu/add/submit", async (request, response) => {
  //for POST data, retrieve field data using request.body.<field-name>
  //for a GET form, use app.get() and request.query.<field-name> to retrieve the GET form data
  //retreive values from submitted POST form
  let wgt = request.body.weight;
  //console.log(wgt);
  let path = request.body.path;
  let linkText = request.body.name;
  let newLink = {
    "weight": wgt,
    "path": path,
    "name": linkText
  };
  await addLink(newLink);
  response.redirect("/admin/menu"); //redirect link back to administer menu page
})

//edit page form processing
app.post("/admin/menu/edit/submit", async (request, response) => {
  let idFilter = { _id: new ObjectId(request.body.linkId) }
  let wgt = request.body.weight;
  let path = request.body.path;
  let linkText = request.body.name;
  let link = {
    "weight": wgt,
    "path": path,
    "name": linkText
  };
  await editLink(idFilter, link);
  response.redirect("/admin/menu");
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
});

//MONGODB FUNCTIONS
async function connection() {
  db = client.db("testdb"); //if you have a default db in the connection, you can leave this blank
  return db;
}

//function to select all documents in the menuLinks collection.
async function getLinks() {
  db = await connection(); //waits for a result (or other function to complete)
  let results = db.collection("menuLinks").find({})
  let res = await results.toArray();
  return res;
}

//function to insert one link
async function addLink(linkData){
  db = await connection();
  let status = await db.collection("menuLinks").insertOne(linkData);
  console.log("link added");
}

//function to edit
async function getSingleLink(id) {
  db = await connection();
  const editId = { _id: new ObjectId(id) };
  const result = await db.collection("menuLinks").findOne(editId);
  return result;
}

async function editLink(filter, link){
  db = await connection();
  const updateLink = {
    $set: link
  }
  let status = await db.collection("menuLinks").updateOne(filter, updateLink);
  console.log("link updated");
}