import React from 'react';

function GiftSteps({ step }) {
  const { url, stepNumber, description } = step;

  return (
    <div className="giftSteps">
      <img src={url} alt="Icon" />
      <div className="step">{stepNumber}</div>
      <div className="description">{description}</div>
    </div>
  );
}

export default GiftSteps;
