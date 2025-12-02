const express = require("express");

const path = require("path");
const router = express.Router();

const rootDir = require("../utils/path.js");

const products = [];
router.get("/add-product", (req, res) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
  pageTitle: "Add Product",
  activePage: "add-product",
  productCSS: true
});

});

router.post("/add-product", (req, res) => {
  products.push(req.body);
  console.log(req.body)
  res.redirect("/");
});
module.exports = { router, products };
