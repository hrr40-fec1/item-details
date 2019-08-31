import moment from 'moment';
import React from 'react';

function ShippingOptions({ details }) {
  if (details && details[0].fastShipping) {
    var newDate = moment().add(2, 'day').format('dddd, MMMM Do');
  }
  return (
    <div className="shippingOptions">
      <h3>Shipping options</h3>
      <p>
Get it by
        {newDate}
        {' '}
with express shipping
      </p>
    </div>
  );
}

export default ShippingOptions;
