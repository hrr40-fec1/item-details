import React from 'react';

function ShippingDetails({ details }) {
  const item = details[0];
  const { estimatedShipDimensions, estimatedShipWeight } = item;

  return (
    <div className="shippingDetails">
      <h3>Shipping details</h3>
      <p>
Estimated ship dimensions: {' '}
        {estimatedShipDimensions}
      </p>
      <p>
Estimated ship weight: {' '}
        {estimatedShipWeight}
      </p>
    </div>
  );
}

export default ShippingDetails;
