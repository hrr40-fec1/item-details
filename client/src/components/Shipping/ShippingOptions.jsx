import moment from 'moment';
import React from 'react';

function ShippingOptions({ details }) {
  if (details && details[0].fastShipping) {
    var newDate = moment().add(2, 'day').format('dddd, MMMM Do');
    var extraVerbiage = 'with express shipping';
  } else {
    var newDate = moment().add(5, 'day').format('dddd, MMMM Do');
    var extraVerbiage = 'with regular shipping'
  }
  return (
    <div className="shippingOptions">
      <h3>Shipping options</h3>
      <p><span className='getItBy'>Get it by {newDate} </span>{extraVerbiage}</p>
    </div>
  );
}

export default ShippingOptions;
