const express = require("express");
const app = express();
const mysql = require("promise-mysql");
require("dotenv").config();

const categoriesRoutes = require("./routes/categories");
const toysRoutes = require("./routes/toys");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

const connectionOptions = {
  host: process.env.DB_host,
  database: process.env.DB_database,
  user: process.env.DB_user,
  password: process.env.DB_password,
  port: process.env.DB_port
};

mysql.createConnection(connectionOptions).then(async (db) => {
  app.get("/", (req, res) => {
    res.json(`Connection à la DB 💩 ${connectionOptions.database} 💩`);
  });

  categoriesRoutes(app, db);
  toysRoutes(app, db);
});

app.listen(port, () => {
  console.log(`Serveur connecté sur le port ${port} 👋`);
});
