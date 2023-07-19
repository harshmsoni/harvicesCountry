import React, { useState } from 'react';
import axios from 'axios';

const CountryCreatePage = ({ token }) => {
  const [countryCode, setCountryCode] = useState('');
  const [countryName, setCountryName] = useState('');
  const [dialingCode, setDialingCode] = useState('');
  const [weekendDays, setWeekendDays] = useState('');

  const handleCreateCountry = async () => {
    try {
      console.log('Sending create country request...');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      const response = await axios.post(
        'https://projects.harvices.in/ticketingappapitest-uat/countryMST/create/',
        {
          active: true,
          id: null,
          countryCode: countryCode,
          countryName: countryName,
          dialingCode: dialingCode,
          weekendDays: weekendDays,
          ID_FIELD: 'id'
        },
        config
      );

      console.log('Country creation successful:', response.data);
      // Handle any further actions or notifications on successful country creation
    } catch (error) {
      console.error('Country creation failed:', error);
      // Handle any error notifications or error-specific actions
    }
  };

  return (
    <div>
      <h2>Create Country</h2>
      <input type="text" placeholder="Country Code" value={countryCode} onChange={(e) => setCountryCode(e.target.value)} />
      <input type="text" placeholder="Country Name" value={countryName} onChange={(e) => setCountryName(e.target.value)} />
      <input type="text" placeholder="Dialing Code" value={dialingCode} onChange={(e) => setDialingCode(e.target.value)} />
      <input type="text" placeholder="Weekend Days" value={weekendDays} onChange={(e) => setWeekendDays(e.target.value)} />
      <button onClick={handleCreateCountry}>Create Country</button>
    </div>
  );
};

export default CountryCreatePage;
