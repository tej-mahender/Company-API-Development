const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  status: { type: String, enum: ['Active','Inactive','On Leave'], default: 'Active' },
  salary: { type: Number, required: true },
  joiningDate: Date,
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
  role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role', required: true },
  remoteFriendly: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Employee', EmployeeSchema);
