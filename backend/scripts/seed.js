const mongoose = require('mongoose');
require('dotenv').config();

const Company = require('../src/models/Company');
const Department = require('../src/models/Department');
const Role = require('../src/models/Role');
const Employee = require('../src/models/Employee');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected for seeding...');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const seedDB = async () => {
  await connectDB();
  try {
    console.log('Seeding database...');

    // Clear existing data
    await Promise.all([
      Company.deleteMany(),
      Department.deleteMany(),
      Role.deleteMany(),
      Employee.deleteMany(),
    ]);

    // Create a default company
    const company = await Company.create({
      name: 'Software Company',
      description: 'A leading technology company.',
      address: '123 Tech Park, Hyderabad, India'
    });
    console.log('Company created.');

    // Create departments
    const departments = await Department.insertMany([
      { name: 'Engineering', company: company._id },
      { name: 'Sales', company: company._id },
      { name: 'Human Resources', company: company._id }
    ]);
    const [engineering, sales, hr] = departments;
    console.log('Departments created.');

    // Create roles
    const roles = await Role.insertMany([
      { title: 'Software Engineer', department: engineering._id },
      { title: 'Engineering Manager', department: engineering._id },
      { title: 'Sales Manager', department: sales._id },
      { title: 'Sales Associate', department: sales._id },
      { title: 'HR Manager', department: hr._id },
      { title: 'HR Coordinator', department: hr._id }
    ]);
    const [seRole, emRole, smRole, saRole, hrmRole, hrcRole] = roles;
    console.log('Roles created.');

    // Create employees
    await Employee.insertMany([
      { name: 'Jane Doe', email: 'jane@techinnovators.com', phone: '123-456-7890', joiningDate: new Date('2015-05-20'), salary: 120000, status: 'Active', department: engineering._id, role: seRole._id },
      { name: 'John Smith', email: 'john@techinnovators.com', phone: '123-456-7891', joiningDate: new Date('2018-02-10'), salary: 150000, status: 'Active', department: engineering._id, role: emRole._id },
      { name: 'Alice Johnson', email: 'alice@techinnovators.com', phone: '123-456-7892', joiningDate: new Date('2020-10-01'), salary: 90000, status: 'Active', department: sales._id, role: smRole._id },
      { name: 'Bob Williams', email: 'bob@techinnovators.com', phone: '123-456-7893', joiningDate: new Date('2021-03-15'), salary: 75000, status: 'On Leave', department: sales._id, role: saRole._id },
      { name: 'Chris Evans', email: 'chris@techinnovators.com', phone: '123-456-7894', joiningDate: new Date('2019-07-22'), salary: 110000, status: 'Active', department: hr._id, role: hrmRole._id }
    ]);
    console.log('Employees created.');

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Database seeding failed:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();