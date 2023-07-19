import React, { useState } from 'react';
import axios from 'axios';

const CountryGetPage = () => {
  const [searchText, setSearchText] = useState('');
  const [countries, setCountries] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://projects.harvices.in/ticketingappapitest-uat/countryMST/all/?search=${searchText}`
      );
      setCountries(response.data.data);
      setSearchResults(response.data.data.filter((country) => country.countryName.toLowerCase().includes(searchText.toLowerCase())));
    } catch (error) {
      console.error('Failed to fetch countries:', error);
    }
  };

  return (
    <div>
      <h2>Search Country</h2>
      <input
        type="text"
        placeholder="Enter country name"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((country) => (
              <li key={country.id}>{country.countryName}</li>
            ))}
          </ul>
        ) : (
          <p>No countries found.</p>
        )}
      </div>
    </div>
  );
};

export default CountryGetPage;
