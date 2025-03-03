const { imageUploadUtil } = require("../../helpers/cloudinary");
const Category = require("../../models/Category");

const handleImageUpload = async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const url = "data:" + req.file.mimetype + ";base64," + b64;
    const result = await imageUploadUtil(url);

    res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error occured",
    });
  }
};

//add a new Category
const addCategory = async (req, res) => {
  try {
    const {
     image,catName
    } = req.body;

    

    const newlyCreatedCategory = new Category({
      image,
      catName
    });

    await newlyCreatedCategory.save();
    res.status(201).json({
      success: true,
      data: newlyCreatedCategory,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occured",
    });
  }
};

//fetch all Categorys

const fetchAllCategories = async (req, res) => {
  try {
    const listOfCategorys = await Category.find({});
    res.status(200).json({
      success: true,
      data: listOfCategorys,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occured",
    });
  }
};



//delete a Category
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const Category = await Category.findByIdAndDelete(id);

    if (!Category)
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });

    res.status(200).json({
      success: true,
      message: "Category delete successfully",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error occured",
    });
  }
};

module.exports = {
  handleImageUpload,
  addCategory,
  fetchAllCategories,
  deleteCategory,
};
