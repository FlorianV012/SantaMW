/*app.post("/product/add", async (req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const responseDB = await db.query(
      "INSERT INTO products (name, price) VALUES (?,?)",
      [name, price]
    );
    res.json({ status: 200, responseDB });
  });
*/

// app.get("/categories", async (req,res)=> {
//   const responseDB = await db.query(`SELECT * FROM categories`);
//   res.json({ status: 200, responseDB });
// })

// const mysql = require("promise-mysql");

// Index categories
exports.indexCategories = async (req, res) => {
  const responseDB = await db.query(`SELECT * FROM categories`);

  res.json({ status: 200, responseDB });
};
