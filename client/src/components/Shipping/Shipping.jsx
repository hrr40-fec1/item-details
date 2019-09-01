import React from 'react';
import ShippingOptions from './ShippingOptions';
import ShippingDetails from './ShippingDetails';
import ReturnDetails from './ReturnDetails';

function Shipping({ details }) {
  return (
    <div className="shipping">
      <ShippingOptions details={details} />
      <ShippingDetails details={details} />
      <ReturnDetails />
    </div>
  );
}

export default Shipping;
