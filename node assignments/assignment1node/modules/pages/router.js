const express = require("express");
const pageRouter = express.Router();
const offerings = require("../offerings/func");

//set up some pages routes
pageRouter.get('/', async (request, response) => {
    offers = await offerings.getOffers();
    response.render("index", { title: "Home" });
});
pageRouter.get('/mens', async (request, response) => {
    offers = await offerings.getOffers();
    response.render("mens", { title: "Mens" });
});
pageRouter.get('/womens', async (request, response) => {
    offers = await offerings.getOffers();
    response.render("womens", { title: "Womens" });
})

module.exports = pageRouter;