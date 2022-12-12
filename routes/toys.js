function toysRoutes(app, db) {
  // Index toys
  app.get("/toys", async (req, res) => {
    const responseDB =
      await db.query(`SELECT toys.id, categories.name AS category, description, toys.name, price FROM toys
    LEFT JOIN categories
    ON categories.id = toys.category`);
    res.json({ status: 200, responseDB });
  });

  // Show toy
  app.get("/toys/:id", async (req, res) => {
    const id = req.params.id;
    const responseDB = await db.query(
      `SELECT toys.id, categories.name AS category, description, toys.name, price FROM toys
    LEFT JOIN categories
    ON categories.id = toys.category
    WHERE toys.id = ?`,
      [id]
    );
    res.json({ status: 200, responseDB });
  });

  // Create toys
  app.post(`/toys`, async (req, res) => {
    if (
      req.body.name &&
      req.body.description &&
      req.body.price &&
      req.body.category
    ) {
      const name = req.body.name;
      const description = req.body.description;
      const price = req.body.price;
      const category_id = req.body.category;

      // app.get("/categories", async (req, res) => {
      //   const responseDB = await db.query(`SELECT * FROM categories`);
      //   console.log(res.json(responseDB));
      // });

      const responseDB = await db.query(
        "INSERT INTO toys (name, description, price, category) VALUES (?,?,?,?)",
        [name, description, price, category_id]
      );
      res.json({ status: 200, responseDB });
    } else {
      res.sendStatus(422);
    }
  });

  // Update toy
  app.put("/toys/:id", async (req, res) => {});

  // Delete toy
  app.delete("/toys/:id", async (req, res) => {
    const id = req.params.id;
    const responseDB = await db.query(`DELETE FROM toys WHERE id = ?`, [id]);
    res.json({ status: 200, responseDB });
  });
}

module.exports = toysRoutes;
