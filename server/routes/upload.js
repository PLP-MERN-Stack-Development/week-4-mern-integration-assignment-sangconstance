const express = require('express');
const multer = require('multer');
const uploadController = require('../controllers/uploadController');

const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.post('/', upload.single('image'), uploadController.uploadImage);

module.exports = router;