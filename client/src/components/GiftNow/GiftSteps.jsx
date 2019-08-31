import React from 'react';

function GiftSteps({ step }) {
  const { url } = step;
  const { stepNumber } = step;
  const { description } = step;

  return (
    <div className="giftSteps">
      <img src={url} alt="Icon" />
      {stepNumber}
      {description}
    </div>
  );
}

export default GiftSteps;
