const Company = require('../models/Company');

// CREATE
const createCompany = async (req, res, next) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json({ message: 'Company created', company });
  } catch (err) {
    next(err);
  }
};

// GET all with filters
const getCompanies = async (req, res, next) => {
  try {
    const { name, industry, location, type, minEmployees, maxEmployees } = req.query;
    const filter = {};

    if (name) filter.name = { $regex: name, $options: 'i' };
    if (industry) filter.industry = industry;
    if (location) filter.location = location;
    if (type) filter.type = type;
    if (minEmployees || maxEmployees) filter.employeeCount = {};
    if (minEmployees) filter.employeeCount.$gte = Number(minEmployees);
    if (maxEmployees) filter.employeeCount.$lte = Number(maxEmployees);

    const companies = await Company.find(filter);
    res.json(companies);
  } catch (err) {
    next(err);
  }
};

// GET by ID
const getCompanyById = async (req, res, next) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) return res.status(404).json({ message: 'Company not found' });
    res.json(company);
  } catch (err) {
    next(err);
  }
};

// UPDATE
const updateCompany = async (req, res, next) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!company) return res.status(404).json({ message: 'Company not found' });
    res.json({ message: 'Company updated', company });
  } catch (err) {
    next(err);
  }
};

// DELETE
const deleteCompany = async (req, res, next) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) return res.status(404).json({ message: 'Company not found' });
    res.json({ message: 'Company deleted' });
  } catch (err) {
    next(err);
  }
};

module.exports = { createCompany, getCompanies, getCompanyById, updateCompany, deleteCompany };
