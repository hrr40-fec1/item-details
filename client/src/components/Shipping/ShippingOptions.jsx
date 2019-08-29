import moment from 'moment';

function ShippingOptions(props) {

  if(props.details && props.details[0].fastShipping) {
  var newDate = moment().add(2, 'day').format("dddd, MMMM Do")
  }
  return (
    <div>
      <h3>Shipping options</h3>
      <p>Get it by {newDate} with express shipping</p>
    </div>
  )
}

export default ShippingOptions;
