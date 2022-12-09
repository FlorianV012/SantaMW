const express = require("express");
const app = express();
const mysql = require("promise-mysql");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 4000;

const connectionOptions = {
  host: "localhost",
  database: "santa-mw",
  user: "root",
  password: "",
  port: 3306,
};

const categoriesRoutes = require("./routes/categories");
// const toysRoutes = require("./routes/toys");

mysql.createConnection(connectionOptions).then(async (db) => {
  app.get("/", (req, res) => {
    res.json(`Connection à la DB 💩 ${connectionOptions.database} 💩`);
  });

  // app.get("/categories", async (req, res) => {
  //   const responseDB = await db.query(`SELECT * FROM categories`);
  //   res.json({ status: 200, responseDB });
  // });
  
  app.use("/categories", categoriesRoutes);
  // app.use("/toys", toysRoutes);
});

app.listen(port, () => {
  console.log(`Serveur connecté sur le port ${port} 👋`);
});
