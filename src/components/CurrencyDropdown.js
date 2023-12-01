import React, { useState } from 'react';

const CurrencyDropdown = () => {
  const [activeCurrency, setActiveCurrency] = useState('£Pound');

  const handleCurrencyChange = (currency) => {
    setActiveCurrency(currency);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" type="button" id="currencyDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {activeCurrency}
      </button>
      <div className="dropdown-menu" aria-labelledby="currencyDropdown">
        <button className={`dropdown-item ${activeCurrency === '£Pound' ? 'active' : ''}`} onClick={() => handleCurrencyChange('£Pound')}>Currency (£Pound)</button>
        <button className={`dropdown-item ${activeCurrency === '$Dollar' ? 'active' : ''}`} onClick={() => handleCurrencyChange('$Dollar')}>$Dollar</button>
        <button className={`dropdown-item ${activeCurrency === '£Pounds' ? 'active' : ''}`} onClick={() => handleCurrencyChange('£Pounds')}>£Pounds</button>
        <button className={`dropdown-item ${activeCurrency === '€Euro' ? 'active' : ''}`} onClick={() => handleCurrencyChange('€Euro')}>€Euro</button>
        <button className={`dropdown-item ${activeCurrency === '₹Rupee' ? 'active' : ''}`} onClick={() => handleCurrencyChange('₹Rupee')}>₹Rupee</button>
      </div>
    </div>
  );
};

export default CurrencyDropdown;
