const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const adminRoutes = require("./routes/admin.js");

app.use("/admin", adminRoutes);

app.use((req, res, next) => {
  res.status(404).send("<p>Page not Found<p>");
});
app.listen(3000, () => {
  console.log("Server has started on ");
});
