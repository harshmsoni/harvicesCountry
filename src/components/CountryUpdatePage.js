import React, { useState } from 'react';
import axios from 'axios';

const CountryUpdatePage = ({ token }) => {
  const [countryId, setCountryId] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [countryName, setCountryName] = useState('');
  const [dialingCode, setDialingCode] = useState('');
  const [weekendDays, setWeekendDays] = useState('');

  const handleUpdateCountry = async () => {
    try {
      console.log('Sending update country request...');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      const response = await axios.post(
        'https://projects.harvices.in/ticketingappapitest-uat/countryMST/update/',
        {
          id: countryId,
          countryCode: countryCode,
          countryName: countryName,
          dialingCode: dialingCode,
          weekendDays: weekendDays,
          ID_FIELD: 'id'
        },
        config
      );

      console.log('Country update successful:', response.data);
      // Handle any further actions or notifications on successful country update
    } catch (error) {
      console.error('Country update failed:', error);
      // Handle any error notifications or error-specific actions
    }
  };

  return (
    <div>
      <h2>Update Country</h2>
      <input type="text" placeholder="Country ID" value={countryId} onChange={(e) => setCountryId(e.target.value)} />
      <input type="text" placeholder="Country Code" value={countryCode} onChange={(e) => setCountryCode(e.target.value)} />
      <input type="text" placeholder="Country Name" value={countryName} onChange={(e) => setCountryName(e.target.value)} />
      <input type="text" placeholder="Dialing Code" value={dialingCode} onChange={(e) => setDialingCode(e.target.value)} />
      <input type="text" placeholder="Weekend Days" value={weekendDays} onChange={(e) => setWeekendDays(e.target.value)} />
      <button onClick={handleUpdateCountry}>Update Country</button>
    </div>
  );
};

export default CountryUpdatePage;
