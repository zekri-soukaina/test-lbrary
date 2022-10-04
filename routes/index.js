// const express = require("express");
// const router = express.Router();

// router.get("/", (req, res) => {
//   //   res.send("Hello there!");
//   res.render("index");
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
// const Book = require("../models/book");

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
