function categoriesRoutes(app, db) {
  // Index categories
  app.get("/categories", async (req, res) => {
    const responseDB = await db.query(`SELECT * FROM categories`);
    res.json({ status: 200, responseDB });
  });

  // Show category
  app.get("/categories/:id", async (req, res) => {
    const id = req.params.id;
    const responseDB = await db.query(`SELECT * FROM categories WHERE id = ?`, [
      id,
    ]);
    res.json({ status: 200, responseDB });
  });

  // Create category
  app.post("/categories", async (req, res) => {
    const name = req.body.name;
    const responseDB = await db.query(
      "INSERT INTO categories (name) VALUES (?)",
      [name]
    );
    res.json({ status: 200, responseDB });
  });
}

module.exports = categoriesRoutes;
