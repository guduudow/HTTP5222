const express = require("express");
const pageRouter = express.Router();
const offerings = require("../offerings/func");

//set up some pages routes
pageRouter.get('/', async (request, response) => {
    let offers = await offerings.getOffers();
    response.render("index", { title: "Home" });
});
pageRouter.get('/mens', async (request, response) => {
    let offers = await offerings.showMenOffers();
    response.render("mens", { title: "Mens", view: offers });
});
pageRouter.get('/womens', async (request, response) => {
    let offers = await offerings.showWomenOffers();
    response.render("womens", { title: "Womens", view: offers });
})

module.exports = pageRouter;