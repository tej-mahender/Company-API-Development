const Company = require('../models/Company');

// GET company profile
const getCompany = async (req, res, next) => {
  try {
    const company = await Company.findOne();
    if (!company) return res.status(404).json({ message: 'Company not found' });
    res.json(company);
  } catch (err) {
    next(err);
  }
};

// UPDATE company profile
const updateCompany = async (req, res, next) => {
  try {
    const data = req.body;
    const company = await Company.findOneAndUpdate({}, data, { new: true, runValidators: true });
    if (!company) return res.status(404).json({ message: 'Company not found' });
    res.json({ message: 'Company updated successfully', company });
  } catch (err) {
    next(err);
  }
};

module.exports = { getCompany, updateCompany };
