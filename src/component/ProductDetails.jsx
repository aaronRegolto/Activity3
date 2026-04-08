import React, { useState } from 'react';

const ProductDetails = ({ onCalculate, onReset }) => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [error, setError] = useState('');

  const handleCalculate = () => {
    const qty = Number(quantity);
    const price = Number(unitPrice);
    if (!productName.trim() || !quantity || !unitPrice || qty <= 0 || price <= 0) {
      setError('Please fill in all fields with valid values.');
      return;
    }
    setError('');
    onCalculate({
      productName: productName.trim(),
      quantity: qty,
      unitPrice: price,
      total: qty * price,
    });
  };

  const handleReset = () => {
    setProductName('');
    setQuantity('');
    setUnitPrice('');
    setError('');
    onReset();
  };

  return (
    <div className="mb-6">
      <div className="form-group">
        <label className="form-label">Product Name:</label>
        <input
          type="text"
          placeholder="Product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Quantity:</label>
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Unit Price:</label>
        <input
          type="number"
          placeholder="Unit price"
          value={unitPrice}
          onChange={(e) => setUnitPrice(e.target.value)}
          className="form-input"
        />
      </div>
      <div className="button-group">
        <button onClick={handleCalculate} className="btn btn-primary">
          Calculate
        </button>
        <button onClick={handleReset} className="btn btn-secondary">
          Reset
        </button>
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default ProductDetails;
