const express = require("express");
const app = express();

const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//pug setup
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views")); // FIXED

// Required for absolute paths in Pug extends/includes
app.locals.basedir = path.join(__dirname, "views");

// serve public folder as static
app.use(express.static(path.join(__dirname, "public")));

const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

app.use("/admin", adminRoutes.router);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404");
});

app.listen(3001, () => {
  console.log("Server has started on 3001");
});
