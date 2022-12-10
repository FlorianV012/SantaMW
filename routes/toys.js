function toysRoutes(app, db) {
  // Index toys
  app.get("/toys", async (req, res) => {
    const responseDB =
      await db.query(`SELECT toys.id, categories.name AS category, description, toys.name, price FROM toys
    JOIN categories
    ON categories.id = toys.category`);
    res.json({ status: 200, responseDB });
  });

  // Show toy
  app.get("/toys/:id", async (req, res) => {
    const id = req.params.id;
    const responseDB = await db.query(
      `SELECT toys.id, categories.name AS category, description, toys.name, price FROM toys
    JOIN categories
    ON categories.id = toys.category
    WHERE toys.id = ?`,
      [id]
    );
    res.json({ status: 200, responseDB });
  });
}

module.exports = toysRoutes;
