const express = require("express");

const path = require("path");

const router = express.Router();

const rootDir = require("../utils/path.js");
const adminData = require("./admin.js");

router.get("/", (req, res) => {
  console.log("shop", adminData.products);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
