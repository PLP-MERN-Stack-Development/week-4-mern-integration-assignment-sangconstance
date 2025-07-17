const express = require('express');
const { body } = require('express-validator');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

// Get all categories
router.get('/', categoryController.getAllCategories);

// Create category
router.post(
  '/',
  body('name').notEmpty(),
  categoryController.createCategory
);

module.exports = router;