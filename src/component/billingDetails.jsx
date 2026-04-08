import React from 'react';

const BillingDetails = ({ data }) => (
  <div className="billing-summary">
    <h3 className="billing-title">Billing Summary</h3>
    <p className="billing-text">Product Name: {data.productName}</p>
    <p className="billing-text">Quantity: {data.quantity}</p>
    <p className="billing-text">Unit Price: ₱{data.unitPrice}</p>
    <p className="billing-text billing-total">Total Price: ₱{data.total}</p>
  </div>
);

export default BillingDetails;
