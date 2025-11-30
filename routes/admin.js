const express = require("express");

const path = require("path");
const router = express.Router();

const rootDir = require("../utils/path.js");

const products = [];
router.get("/add-product", (req, res) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product")
});

router.post("/add-product", (req, res) => {
  products.push(req.body);
  res.redirect("/");
});
module.exports = { router, products };
