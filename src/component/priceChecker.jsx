import React, { useState, useEffect } from 'react';
import ProductDetails from './ProductDetails';
import BillingDetails from './billingDetails';

const PriceChecker = () => {
  const [bill, setBill] = useState(null);

  useEffect(() => {
    document.title = 'Price Checker';
  }, []);

  return (
    <div className="price-checker-container">
      <div className="price-checker-card">
        <h1 className="price-checker-title">Price Checker</h1>
        <ProductDetails
          onCalculate={(data) => setBill(data)}
          onReset={() => setBill(null)}
        />
        {bill && <BillingDetails data={bill} />}
      </div>
    </div>
  );
};

export default PriceChecker;
