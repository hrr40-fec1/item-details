import React from 'react';

function SellingPoints({ details }) {
  const sellingPoints = [];
  const itemDetails = details[0];
  const fitAndStylePoints = {
    1: itemDetails.fitAndStylePointOne,
    2: itemDetails.fitAndStylePointTwo,
    3: itemDetails.fitAndStylePointThree,
    4: itemDetails.fitAndStylePointFour,
    5: itemDetails.fitAndStylePointFive,
  };

  for (const key in fitAndStylePoints) {
    if (fitAndStylePoints[key]) {
      sellingPoints.push(fitAndStylePoints[key]);
    }
  }

  const listItems = sellingPoints.map((item, index) => <li key={index}>{item}</li>);

  return (
    <div className="sellingPoints">
      <h3>Fit & style</h3>
      <ul>{listItems}</ul>
      {itemDetails.fitAndStyleBlurb}
    </div>
  );
}

export default SellingPoints;
