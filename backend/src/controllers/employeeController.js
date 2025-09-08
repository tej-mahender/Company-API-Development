const Employee = require('../models/Employee');
const paginate = require('../utils/paginate');

// GET all employees with filters
const getEmployees = async (req, res, next) => {
  try {
    const { q, department, role, status, minSalary, maxSalary, startDate, endDate, page, limit } = req.query;
    const filter = {};

    if (q) filter.name = { $regex: q, $options: 'i' };
    if (department) filter.department = department;
    if (role) filter.role = role;
    if (status) filter.status = status;
    if (minSalary || maxSalary) filter.salary = {};
    if (minSalary) filter.salary.$gte = Number(minSalary);
    if (maxSalary) filter.salary.$lte = Number(maxSalary);
    if (startDate || endDate) filter.joiningDate = {};
    if (startDate) filter.joiningDate.$gte = new Date(startDate);
    if (endDate) filter.joiningDate.$lte = new Date(endDate);

    let query = Employee.find(filter)
      .populate('department', 'name')
      .populate('role', 'name')
      .populate('company', 'name');

    query = paginate(query, { page, limit });

    const employees = await query;
    res.json(employees);
  } catch (err) {
    next(err);
  }
};

// GET single employee
const getEmployeeById = async (req, res, next) => {
  try {
    const emp = await Employee.findById(req.params.id)
      .populate('department', 'name')
      .populate('role', 'name')
      .populate('company', 'name');
    if (!emp) return res.status(404).json({ message: 'Employee not found' });
    res.json(emp);
  } catch (err) {
    next(err);
  }
};

// CREATE employee
const createEmployee = async (req, res, next) => {
  try {
    const emp = await Employee.create(req.body);
    res.status(201).json({ message: 'Employee created', employee: emp });
  } catch (err) {
    next(err);
  }
};

// UPDATE employee
const updateEmployee = async (req, res, next) => {
  try {
    const emp = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!emp) return res.status(404).json({ message: 'Employee not found' });
    res.json({ message: 'Employee updated', employee: emp });
  } catch (err) {
    next(err);
  }
};

// DELETE employee
const deleteEmployee = async (req, res, next) => {
  try {
    const emp = await Employee.findByIdAndDelete(req.params.id);
    if (!emp) return res.status(404).json({ message: 'Employee not found' });
    res.json({ message: 'Employee deleted' });
  } catch (err) {
    next(err);
  }
};

module.exports = { getEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee };
