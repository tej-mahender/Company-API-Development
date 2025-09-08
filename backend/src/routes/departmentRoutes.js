const express = require('express');
const router = express.Router();
const { getDepartments, createDepartment, updateDepartment, deleteDepartment } = require('../controllers/departmentController');

// GET all departments
router.get('/', getDepartments);

// CREATE a department
router.post('/', createDepartment);

// UPDATE a department by ID
router.put('/:id', updateDepartment);

// DELETE a department by ID
router.delete('/:id', deleteDepartment);

module.exports = router;
