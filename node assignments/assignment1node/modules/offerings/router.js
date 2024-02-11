let express = require("express");
let router = express.Router();

const model = require("./func");

//the lines below parse POST body data from query string format to JSON format
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

//page routes 
router.get("/", async (request, response) => {
    let offers = await model.getOffers();

    response.render("admin/menu-admin", { title: "Add more offers", menu: offers });
})
router.get("/add", async (request, response) => {
    let links = await model.getOffers();

    response.render("admin/menu-add", { title: "Add menu link", menu: links });
});

router.get("/mens", async (request, response) => {
    let offers = await model.showMenOffers();
    console.log(offers);
    response.render("mens", { title: "Mens", view: offers });
});

//FORM PROCESSING PATHS
router.post("/add/submit", async (request, response) => {
    let nom = request.body.name;
    let clr = request.body.color;
    let size = request.body.size;
    let sex = request.body.section;
    let newOffer = { "name": nom, "color": clr, "size": size, "section": sex };
    model.addOffer(newOffer);

    response.redirect("/admin/menu");
})

module.exports = router;
