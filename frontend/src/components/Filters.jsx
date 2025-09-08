import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  const [industry, setIndustry] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [minEmployees, setMinEmployees] = useState('');
  const [maxEmployees, setMaxEmployees] = useState('');
  const [minRevenue, setMinRevenue] = useState('');
  const [maxRevenue, setMaxRevenue] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange({ name, industry, location, type, minEmployees, maxEmployees, minRevenue, maxRevenue });
  };

  const handleReset = () => {
    setName(''); setIndustry(''); setLocation(''); setType(''); setMinEmployees(''); setMaxEmployees(''); setMinRevenue(''); setMaxRevenue('');
    onFilterChange({});
  };

  return (
   <form onSubmit={handleSubmit} className="filters">
  <input className="form-control" placeholder="Industry" value={industry} onChange={e => setIndustry(e.target.value)} />
  <input className="form-control" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
  <select className="form-select" value={type} onChange={e => setType(e.target.value)}>
    <option value="">All Types</option>
    <option value="Private">Private</option>
    <option value="Public">Public</option>
    <option value="Non-profit">Non-profit</option>
    <option value="Government">Government</option>
  </select>
  <input type="number" className="form-control" placeholder="Min Employees" value={minEmployees} onChange={e => setMinEmployees(e.target.value)} />
  <input type="number" className="form-control" placeholder="Max Employees" value={maxEmployees} onChange={e => setMaxEmployees(e.target.value)} />
  <input type="number" className="form-control" placeholder="Min Revenue" value={minRevenue} onChange={e => setMinRevenue(e.target.value)} />
  <input type="number" className="form-control" placeholder="Max Revenue" value={maxRevenue} onChange={e => setMaxRevenue(e.target.value)} />
    <input className="form-control" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
  <button type="submit" className="btn btn-primary">Apply Filters</button>
  <button type="button" className="btn btn-secondary" onClick={handleReset}>Reset</button>
</form>

  );
};

export default Filters;
