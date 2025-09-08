const express = require('express');
const router = express.Router();
const { 
  getEmployees, 
  getEmployeeById, 
  createEmployee, 
  updateEmployee, 
  deleteEmployee 
} = require('../controllers/employeeController');

// GET all employees (with filters & pagination)
router.get('/', getEmployees);

// GET single employee by ID
router.get('/:id', getEmployeeById);

// CREATE a new employee
router.post('/', createEmployee);

// UPDATE an employee by ID
router.put('/:id', updateEmployee);

// DELETE an employee by ID
router.delete('/:id', deleteEmployee);

module.exports = router;
