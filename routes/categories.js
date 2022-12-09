const express = require("express");
const router = express.Router();

const categoriesCtrl = require("../controllers/categories");

router.get("/", categoriesCtrl.indexCategories);
// router.get("/:id", categoriesCtrl.getOneCategory);
// router.post("/", categoriesCtrl.createCategory);
// router.put("/:id", categoriesCtrl.modifyCategory);
// router.delete("/:id", categoriesCtrl.deleteCategory);

module.exports = router;
