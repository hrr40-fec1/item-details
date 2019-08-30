import React from 'react';

function ShippingDetails(props) {
  var item = props.details[0]
  var estimatedShipDimensions = item.estimatedShipDimensions;
  var estimatedShipWeight = item.estimatedShipWeight;

  return(
    <div className='shippingDetails'>
    <h3>Shipping details</h3>
      <p>Estimated ship dimensions: {estimatedShipDimensions}</p>
      <p>Estimated ship weight: {estimatedShipWeight}</p>
    </div>
  )
}

export default ShippingDetails;
