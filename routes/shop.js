const express = require("express");

const path = require("path");

const router = express.Router();

const rootDir = require("../utils/path.js");
const adminData = require("./admin.js");

router.get("/", (req, res) => {
  // this is for normal html file
  // console.log("shop", adminData.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));

  // this is for using pug
  
  res.render("shop", {
    title: "My Shop",
    products: [
      { name: "Laptop", price: "$899", image: "/images/laptop.jpg" },
      { name: "Mobile Phone", price: "$499", image: "/images/mobile.jpg" },
      { name: "Headphones", price: "$99", image: "/images/headphones.jpg" }
    ]
  });
});



module.exports = router;
