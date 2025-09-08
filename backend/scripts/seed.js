require('dotenv').config();
const mongoose = require('mongoose');
const Company = require('../src/models/Company');

const MONGODB_URI = process.env.MONGODB_URI;

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected for seeding...');

    // Clear existing data
    await Company.deleteMany({});
    console.log('Existing companies cleared.');

    // Sample companies
    const companies = [
      { name: 'TechCorp', industry: 'Software', location: 'New York', founded: 2010, employeeCount: 500, revenue: 5000000, type: 'Private' },
      { name: 'HealthPlus', industry: 'Healthcare', location: 'Boston', founded: 2005, employeeCount: 300, revenue: 2000000, type: 'Public' },
      { name: 'EcoGoods', industry: 'Retail', location: 'San Francisco', founded: 2015, employeeCount: 120, revenue: 800000, type: 'Private' },
      { name: 'FinServe', industry: 'Finance', location: 'Chicago', founded: 2000, employeeCount: 800, revenue: 10000000, type: 'Public' },
      { name: 'GreenEnergy', industry: 'Energy', location: 'Austin', founded: 2012, employeeCount: 250, revenue: 1500000, type: 'Private' },
      { name: 'EduSmart', industry: 'Education', location: 'Seattle', founded: 2018, employeeCount: 50, revenue: 500000, type: 'Non-profit' },
      { name: 'Foodies', industry: 'Food & Beverage', location: 'Los Angeles', founded: 2011, employeeCount: 100, revenue: 750000, type: 'Private' },
      { name: 'AutoDrive', industry: 'Automobile', location: 'Detroit', founded: 1995, employeeCount: 1200, revenue: 20000000, type: 'Public' },
      { name: 'MediLife', industry: 'Healthcare', location: 'Miami', founded: 2008, employeeCount: 400, revenue: 3000000, type: 'Private' },
      { name: 'BuildIt', industry: 'Construction', location: 'Dallas', founded: 2003, employeeCount: 600, revenue: 12000000, type: 'Public' },
      { name: 'CloudNet', industry: 'Software', location: 'San Jose', founded: 2016, employeeCount: 220, revenue: 1800000, type: 'Private' },
      { name: 'FinTechX', industry: 'Finance', location: 'New York', founded: 2014, employeeCount: 350, revenue: 4000000, type: 'Private' },
      { name: 'AgriGrow', industry: 'Agriculture', location: 'Kansas City', founded: 2009, employeeCount: 180, revenue: 900000, type: 'Private' },
      { name: 'SafeHome', industry: 'Security', location: 'Denver', founded: 2013, employeeCount: 90, revenue: 600000, type: 'Private' },
      { name: 'TourPlus', industry: 'Travel', location: 'Orlando', founded: 2017, employeeCount: 60, revenue: 400000, type: 'Private' }
    ];

    await Company.insertMany(companies);
    console.log('Companies seeded successfully');

    mongoose.disconnect();
  } catch (err) {
    console.error('Database seeding failed:', err);
    mongoose.disconnect();
  }
}

seed();
