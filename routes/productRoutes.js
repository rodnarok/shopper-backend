const express = require("express");
const router = express.Router();
// controller
const ProductController = require("../controllers/ProductController");

router.post("/update", ProductController.checkProduct);
router.patch("/update/save", ProductController.updateProductSave);

// router.post("/add", checkAuth, ThoughtController.createThoughtSave);
// router.get("/edit/:id", checkAuth, ThoughtController.updateThought);
// router.post("/edit", checkAuth, ThoughtController.updateThoughtSave);
// router.get("/dashboard", checkAuth, ThoughtController.dashboard);
// router.post("/remove", checkAuth, ThoughtController.removeThought);
// router.get("/", ThoughtController.showThoughts);

module.exports = router;
