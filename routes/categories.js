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

  // Update category
  app.put("/categories/:id", async (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const responseDB = await db.query(
      "UPDATE categories SET name = ? WHERE id = ?",
      [name, id]
    );
    res.json({ status: 200, responseDB });
  });

  // Delete category
  app.delete("/categories/:id", async (req, res) => {
    const id = req.params.id;
    const responseDB = await db.query(`DELETE FROM categories WHERE id = ?`, [
      id,
    ]);
    res.json({ status: 200, responseDB });
  });
}

module.exports = categoriesRoutes;
