const express = require("express");

const {
  handleImageUpload,
  addCategory,
  fetchAllCategories,
  deleteCategory,
} = require("../../controllers/admin/category-controller.js");

const { upload } = require("../../helpers/cloudinary");

const router = express.Router();

router.post("/upload-image", upload.single("my_file"), handleImageUpload);
router.post("/add", addCategory);

router.delete("/delete/:id", deleteCategory);
router.get("/get", fetchAllCategories);

module.exports = router;
