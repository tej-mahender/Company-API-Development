import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  const [name, setName] = useState('');
  const [industry, setIndustry] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [minEmployees, setMinEmployees] = useState('');
  const [maxEmployees, setMaxEmployees] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange({ name, industry, location, type, minEmployees, maxEmployees });
  };

  const handleReset = () => {
    setName(''); setIndustry(''); setLocation(''); setType(''); setMinEmployees(''); setMaxEmployees('');
    onFilterChange({});
  };

  return (
    <form onSubmit={handleSubmit} className="filters">
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Industry" value={industry} onChange={e => setIndustry(e.target.value)} />
      <input placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="">All Types</option>
        <option value="Private">Private</option>
        <option value="Public">Public</option>
        <option value="Non-profit">Non-profit</option>
        <option value="Government">Government</option>
      </select>
      <input type="number" placeholder="Min Employees" value={minEmployees} onChange={e => setMinEmployees(e.target.value)} />
      <input type="number" placeholder="Max Employees" value={maxEmployees} onChange={e => setMaxEmployees(e.target.value)} />
      <button type="submit">Apply Filters</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
};

export default Filters;
