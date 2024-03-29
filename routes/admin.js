const path = require("path");
const express = require("express");

const router = express.Router();
const products = [];

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname + "/../views/admin.html"));
});

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

// router.get("/", (req, res, next) => {
//   res.send("<h1>Welcome to the user page</h1>");
// });

exports.routes = router;
exports.products = products;
