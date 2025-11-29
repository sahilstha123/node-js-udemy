const express = require("express");

const path = require("path");
const router = express.Router();

const rootDir = require("../utils/path.js");

const products = [];
router.get("/add-product", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res) => {
  products.push({ name: req.body.name });
  res.redirect("/");
});
module.exports = { router, products };
