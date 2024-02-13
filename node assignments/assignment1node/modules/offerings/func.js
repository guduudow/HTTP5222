const { MongoClient, ObjectId } = require("mongodb"); //import mongoClient from mongodb so we can create a client

//DB SETTINGS
const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@boulonstore.k07792p.mongodb.net/`;
const client = new MongoClient(dbUrl);

//DATABASE FUNCTIONS

//function to select fashionstore as the database and return it
async function connection() {
    const db = client.db("fashionstore"); //import fashion store
    return db;
}

//function to return all offerings from fashion store database (collection)
async function getOffers() {
    const db = await connection(); //wait for connection
    let results = db.collection("offerings").find({});
    offerArray = await results.toArray();
    return offerArray;
}

//function to add document into offerings using insertOne()
async function addOffer(product) {
    const db = await connection();
    let status = await db.collection("offerings").insertOne(product);
    console.log("product added");
}

//function to show men's products only in the men's page
async function showMenOffers() {
    const db = await connection();
    let query = { section: "men" };
    let filter = await db.collection('offerings').find(query).toArray();
    return filter;
}

//function to show women's products only in the women's page
async function showWomenOffers() {
    const db = await connection();
    let query = { section: "women" };
    let filter = await db.collection('offerings').find(query).toArray();
    return filter;
}

module.exports = {
    getOffers,
    addOffer,
    showMenOffers,
    showWomenOffers
};