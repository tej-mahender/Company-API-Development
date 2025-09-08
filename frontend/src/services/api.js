import axios from 'axios';

const API_URL = import.meta.env.API_URL || 'http://localhost:5000/api';

export const fetchCompanies = async (filters = {}) => {
  const query = new URLSearchParams(filters).toString();
  const res = await axios.get(`${API_URL}/companies?${query}`);
  return res.data;
};
