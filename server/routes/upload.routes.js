const express = require("express");
const router = express.Router();
const {
  uploadImage,
  addProduct,
  editProduct,
  deleteProduct,
  fetchAllProducts,
} = require("../controllers/upload/upload.controller");

router.post("/upload", uploadImage);
router.post("/add", addProduct);
router.put("/edit/:id", editProduct);
router.delete("/delete/:id", deleteProduct);
router.get("/get", fetchAllProducts);

module.exports = router;
