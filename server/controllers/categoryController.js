const Category = require('../models/category');
const { validationResult } = require('express-validator');

exports.getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    next(err);
  }
};

exports.createCategory = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    next(err);
  }
};