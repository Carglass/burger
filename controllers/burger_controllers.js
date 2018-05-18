let express = require("express");
let burger = require("./../models/burger");

var router = express.Router();

router.get("/", (req, res) => {
  burger.fetchAllPromise().then(data => {
    let dataObj = {
      burgers: data
    };
    res.render("index", dataObj);
  });
});

router.get("/api/burgers", (req, res) => {});

router.post("/api/burgers", (req, res) => {
  console.log(req.body.name);
  burger.burgerPromise(req.body.name).then(Burger => {
    res.json(Burger);
  });
});

router.put("/api/burgers/:id", (req, res) => {});

router.delete("/api/burgers/:id", (req, res) => {});

module.exports = router;
