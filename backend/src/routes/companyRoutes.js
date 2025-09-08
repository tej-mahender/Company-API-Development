const express = require('express');
const router = express.Router();
const { getCompany, updateCompany } = require('../controllers/companyController');

// GET company profile
router.get('/', getCompany);

// UPDATE company profile
router.put('/', updateCompany);

module.exports = router;
