import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import './SearchPage.css';

const SearchPage = ({ onSearch }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    onSearch(phoneNumber);
    navigate('/student-details');
  };

  return (
    <div className="search-page">
      <h1>Welcome to our student portal</h1>
      <div className="search-container">
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter student's phone number"
        />
        <FilterAltIcon className="filter-icon" />
      </div>
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchPage;
