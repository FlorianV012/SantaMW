const express = require("express");
const router = express.Router();

const toysCtrl = require("../controllers/toys");

router.get("/", toysCtrl.indexToys);
router.get("/:id", toysCtrl.getOneToy);
router.post("/", toysCtrl.createToy);
router.put("/:id", toysCtrl.modifyToy);
router.delete("/:id", toysCtrl.deleteToy);

module.exports = router;
