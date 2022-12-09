const express = require("express");
const app = express();
const mysql = require("promise-mysql");
require("dotenv").config();

const categoriesRoutes = require("./routes/categories");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

const connectionOptions = {
  host: "localhost",
  database: "santa-mw",
  user: "root",
  password: "",
  port: 3306,
};

mysql.createConnection(connectionOptions).then(async (db) => {
  app.get("/", (req, res) => {
    res.json(`Connection à la DB 💩 ${connectionOptions.database} 💩`);
  });

  categoriesRoutes(app, db);
});

app.listen(port, () => {
  console.log(`Serveur connecté sur le port ${port} 👋`);
});
