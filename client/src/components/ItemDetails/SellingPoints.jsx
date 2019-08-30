import React from 'react';

function SellingPoints(props) {
  var sellingPoints = [];
  var itemDetails = props.details[0];
  var fitAndStylePoints = {
    1: itemDetails.fitAndStylePointOne,
    2: itemDetails.fitAndStylePointTwo,
    3: itemDetails.fitAndStylePointThree,
    4: itemDetails.fitAndStylePointFour,
    5: itemDetails.fitAndStylePointFive
  }

  for (var key in fitAndStylePoints) {
    if(fitAndStylePoints[key]) {
      sellingPoints.push(fitAndStylePoints[key])
    }
  }
  
  var listItems = sellingPoints.map((item, index) =>
    <li key={index}>{item}</li>
  );

  return (
    <div>
    <h3>Fit & style</h3>
    <ul>{listItems}</ul>
    {props.details[0].fitAndStyleBlurb}
    </div>
  )

}

export default SellingPoints;
