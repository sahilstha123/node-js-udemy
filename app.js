const express = require("express");
const app = express();

const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine","pug")
app.set("views","views")
// serve public folder as static
app.use(express.static(path.join(__dirname, "public")));

const adminRoutes = require("./routes/admin.js");

const shopRoutes = require("./routes/shop.js");

app.use("/admin", adminRoutes.router);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
app.listen(3001, () => {
  console.log("Server has started on ");
});
