const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  industry: { type: String, required: true },
  location: { type: String, required: true },
  founded: { type: Number },
  employeeCount: { type: Number },
  revenue: { type: Number },   // optional
  type: { type: String, enum: ['Private', 'Public', 'Non-profit', 'Government'], default: 'Private' }
}, { timestamps: true });

module.exports = mongoose.model('Company', companySchema);
