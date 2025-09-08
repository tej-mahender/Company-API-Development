const Role = require('../models/Role');

// GET roles (optional filter by department)
const getRoles = async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.department) filter.department = req.query.department;
    const roles = await Role.find(filter).populate('department', 'name');
    res.json(roles);
  } catch (err) {
    next(err);
  }
};

// CREATE role
const createRole = async (req, res, next) => {
  try {
    const { name, department } = req.body;
    const role = await Role.create({ name, department });
    res.status(201).json({ message: 'Role created', role });
  } catch (err) {
    next(err);
  }
};

// UPDATE role
const updateRole = async (req, res, next) => {
  try {
    const role = await Role.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!role) return res.status(404).json({ message: 'Role not found' });
    res.json({ message: 'Role updated', role });
  } catch (err) {
    next(err);
  }
};

// DELETE role
const deleteRole = async (req, res, next) => {
  try {
    const role = await Role.findByIdAndDelete(req.params.id);
    if (!role) return res.status(404).json({ message: 'Role not found' });
    res.json({ message: 'Role deleted' });
  } catch (err) {
    next(err);
  }
};

module.exports = { getRoles, createRole, updateRole, deleteRole };
