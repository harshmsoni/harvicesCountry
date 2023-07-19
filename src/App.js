import React, { useState } from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import CountryCreatePage from './components/CountryCreatePage';
import CountryUpdatePage from './components/CountryUpdatePage';
import CountrySearchPage from './components/CountrySearchPage';

function App() {
  const [token, setToken] = useState('');

  const handleLogin = (token) => {
    console.log('Logged in successfully. Token:', token);
    setToken(token);
  };

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          {token ? (
            <>
              <Route path="/country-create" element={<CountryCreatePage token={token} />} />
              <Route path="/country-update" element={<CountryUpdatePage token={token} />} />
              <Route path="/country-search" element={<CountrySearchPage token={token} />} />
              <Route path="/*" element={<Navigate to="/country-search" />} />
            </>
          ) : (
            <Route path="/*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
