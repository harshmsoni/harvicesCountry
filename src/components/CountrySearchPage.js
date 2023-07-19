import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CountrySearchPage = ({ token }) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [countryData, setCountryData] = useState([]);

  const handleSearchCountry = async () => {
    try {
      console.log('Sending search country request...');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      const response = await axios.get(
        `https://projects.harvices.in/ticketingappapitest-uat/countryMST/all/`,
        config
      );

      const countries = response.data.data;
      const searchResult = countries.filter(
        (country) =>
          country.countryName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          country.countryCode.toLowerCase().includes(searchKeyword.toLowerCase())
      );

      setCountryData(searchResult);
    } catch (error) {
      console.error('Search country failed:', error);
    }
  };

  return (
    <div>
      <h2>Search Country</h2>
      <input
        type="text"
        placeholder="Search by Country Name or Country Code"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <button onClick={handleSearchCountry}>Search</button>
      <div>
        {countryData.length > 0 ? (
          <div>
            <h3>Search Results:</h3>
            <ul>
              {countryData.map((country) => (
                <li key={country.id}>
                  <p>Country ID: {country.id}</p>
                  <p>Country Code: {country.countryCode}</p>
                  <p>Country Name: {country.countryName}</p>
                  <p>Dialing Code: {country.dialingCode}</p>
                  <p>Weekend Days: {country.weekendDays}</p>
                  <hr />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No country found</p>
        )}
        <div>
          <Link to="/country-create">
            <button>Create</button>
          </Link>
          <Link to="/country-update">
            <button>Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CountrySearchPage;
