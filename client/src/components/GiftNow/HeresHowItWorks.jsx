import React from 'react';
import GiftSteps from './GiftSteps';

function HeresHowItWorks() {
  const steps = [{
    url: 'https://target.scene7.com/is/image/Target/giftnow_sb_how_01113816-171228_1514492386909?wid=720&qlt=80&fmt=webp',
    stepNumber: '1. Choose a gift',
    description: 'Pick out something awesome. Instead of adding it to your cart, click the GiftNow button.',
  },
  {
    url: 'https://target.scene7.com/is/image/Target/giftnow_sb_how_02113816-171228_1514492576397?wid=720&qlt=80&fmt=webp',
    stepNumber: "2. It's a surprise!",
    description: 'Your gift is delivered immediately via email. They can adjust or exchange it before it ships.',
  },
  {
    url: 'https://target.scene7.com/is/image/Target/giftnow_sb_how_03113816-171228_1514492407152?wid=720&qlt=80&fmt=webp',
    stepNumber: 'Your gift arrives',
    description: 'And it’s just what they wanted, delivered to the address they chose. Cool, huh?',
  }];

  const stepDiv = steps.map((currentStep) => <GiftSteps step={currentStep} />);

  return (
    <div className="heresHowItWorks">
      <h2>Here&apos;s how it works:</h2>
      {stepDiv}
    </div>
  );
}

export default HeresHowItWorks;
