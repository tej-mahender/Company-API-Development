const Department = require('../models/Department');

// GET all departments
const getDepartments = async (req, res, next) => {
  try {
    const departments = await Department.find().populate('company', 'name');
    res.json(departments);
  } catch (err) {
    next(err);
  }
};

// CREATE new department
const createDepartment = async (req, res, next) => {
  try {
    const { name, company } = req.body;
    const dept = await Department.create({ name, company });
    res.status(201).json({ message: 'Department created', department: dept });
  } catch (err) {
    next(err);
  }
};

// UPDATE department
const updateDepartment = async (req, res, next) => {
  try {
    const dept = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!dept) return res.status(404).json({ message: 'Department not found' });
    res.json({ message: 'Department updated', department: dept });
  } catch (err) {
    next(err);
  }
};

// DELETE department
const deleteDepartment = async (req, res, next) => {
  try {
    const dept = await Department.findByIdAndDelete(req.params.id);
    if (!dept) return res.status(404).json({ message: 'Department not found' });
    res.json({ message: 'Department deleted' });
  } catch (err) {
    next(err);
  }
};

module.exports = { getDepartments, createDepartment, updateDepartment, deleteDepartment };
