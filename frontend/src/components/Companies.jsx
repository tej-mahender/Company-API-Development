import { useEffect, useState } from 'react';
import Filters from '../components/Filters';
import CompanyCard from '../components/CompanyCard';
import { fetchCompanies } from '../services/api';

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('card'); // 'card' or 'table'

  const loadCompanies = async (filters = {}) => {
    setLoading(true);
    try {
      const data = await fetchCompanies(filters);
      setCompanies(data.companies || data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => { loadCompanies(); }, []);

  return (
    <div className="companies-page">
      <h1>Companies</h1>
      <Filters onFilterChange={loadCompanies} />
      <button onClick={() => setView(view === 'card' ? 'table' : 'card')}>
        Switch to {view === 'card' ? 'Table' : 'Card'} View
      </button>
      {loading ? <p>Loading...</p> :
        view === 'card' ?
          <div className="company-list">
            {companies.map(c => <CompanyCard key={c._id} company={c} />)}
          </div> :
          <CompanyTable companies={companies} />
      }
    </div>
  );
};

export default Companies;
