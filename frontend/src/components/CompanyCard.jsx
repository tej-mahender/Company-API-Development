import React from 'react';

const CompanyCard = ({ company }) => (
  <div className="company-card">
    <h3>{company.name}</h3>
    <p>Industry: {company.industry}</p>
    <p>Location: {company.location}</p>
    <p>Type: {company.type}</p>
    <p>Founded: {company.founded}</p>
    <p>Employees: {company.employeeCount}</p>
    <p>Revenue: ${company.revenue?.toLocaleString()}</p>
  </div>
);

export default CompanyCard;
