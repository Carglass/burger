let express = require("express");
let burger = require("./../models/burger");

var router = express.Router();

router.get("/", (req, res) => {
  burger.all().then(data => {
    let dataObj = {
      burgers: data
    };
    res.render("index", dataObj);
  });
});

router.get("/api/burgers", (req, res) => {});

router.post("/api/burgers", (req, res) => {
  console.log(req.body.name);
  burger.create(req.body.name).then(burgerId => {
    res.json(burgerId);
  });
});

router.put("/api/burgers/:id", (req, res) => {
  burger.update(req.params.id).then(data => {
    res.json(data);
  });
});

router.delete("/api/burgers/:id", (req, res) => {
  burger.delete(req.params.id).then(data => {
    res.json(data);
  });
});

module.exports = router;
