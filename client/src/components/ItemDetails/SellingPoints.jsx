import React from 'react';

function SellingPoints(props) {
  var sellingPoints = [];

  if(props.details[0].fitAndStylePointOne) {
    sellingPoints.push(props.details[0].fitAndStylePointOne)
  }

   if(props.details[0].fitAndStylePointTwo) {
    sellingPoints.push(props.details[0].fitAndStylePointTwo)
  }

   if(props.details[0].fitAndStylePointThree) {
    sellingPoints.push(props.details[0].fitAndStylePointThree)
    }

   if(props.details[0].fitAndStylePointFour) {
    sellingPoints.push(props.details[0].fitAndStylePointFour)
    }

   if(props.details[0].fitAndStylePointFive) {
    sellingPoints.push(props.details[0].fitAndStylePointFive)
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
