import React from 'react';

function GiftSteps(props) {
  var imageUrl = props.step.url
  var step = props.step.step
  var description = props.step.description

  return(
    <div className="giftSteps">
    <img src={imageUrl} />
      {step}
      {description}
    </div>
  )
}

export default GiftSteps;
