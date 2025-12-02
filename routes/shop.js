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

  // res.render("shop", {
  //   title: "My Shop",
  //   products: [
  //     { name: "Laptop", price: "$899", image: "/images/laptop.jpg" },
  //     { name: "Mobile Phone", price: "$499", image: "https://cdn.pixabay.com/photo/2024/02/24/19/00/phone-8594571_1280.jpg"},
  //     { name: "Headphones", price: "$99", image: "https://cdn.pixabay.com/photo/2016/11/19/16/01/audio-1840073_1280.jpg"  }
  //   ]
  // });

   const products = adminData.products;

  res.render("shop", {
  prods: products,
  pageTitle: "Shop",
  activePage: "shop",
  shopCSS: true
});


  console.log(products);
});



module.exports = router;
