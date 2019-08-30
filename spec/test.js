import React from 'react';
import Enzyme from './enzyme.js'
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import ItemDetails from '../client/src/components/ItemDetails/ItemDetails';
import SellingPoints from '../client/src/components/ItemDetails/SellingPoints';
import GiftNow from '../client/src/components/GiftNow/GiftNow';
import Faq from '../client/src/components/GiftNow/FAQ';
import GiftSteps from '../client/src/components/GiftNow/GiftSteps';
import HeresHowItWorks from '../client/src/components/GiftNow/HeresHowItWorks';
import NittyGrittyDetails from '../client/src/components/GiftNow/NittyGrittyDetails';
import Questions from '../client/src/components/Questions/Questions';
import QuestionWithAnswer from '../client/src/components/Questions/QuestionWithAnswer';
import QuestionWithoutAnswer from '../client/src/components/Questions/QuestionWithoutAnswer';
import Shipping from '../client/src/components/Shipping/Shipping';
import ReturnDetails from '../client/src/components/Shipping/ReturnDetails';
import ShippingDetails from '../client/src/components/Shipping/ShippingDetails';
import ShippingOptions from '../client/src/components/Shipping/ShippingOptions';
import Sizing from '../client/src/components/Sizing/Sizing';

var mockProps = [{

  features: "Practical",
  fit: "Handmade",
  material: 'Polyester',
  sizing: 'Runs long',
  neckline: 'High',
  itemStyle: 'Basic',
  garmentCuffCutType: 'Cuff cut',
  garmentSleeveStyle: 'Basic sleeve',
  careAndCleaning: 'Machine wash cold',
  length: 'Long',
  TCIN: 3,
  UPC: 10,
  DPCI: 12,
  origin: 'California',
  itemStyle: 'Men - Shirts',
  fitAndStyleBlurb: "fitAndStyleBlurb",
  fitAndStylePointFive: null,
  fitAndStylePointFour: null,
  fitAndStylePointOne: null,
  fitAndStylePointThree: null,
  fitAndStylePointTwo: null
}]

var mockSizing = [{'size': 0, 'chest': 1, 'neck': 2, 'sleeve': 3}]

var mockQuestions = [{
  question: 'thisIsAQuestion',
  asker: 'thisIsAnAsker',
  answer: 'thisIsAnAnswer',
  dateAnswered: 'thisIsDateAnswered',
  dateAsked: 'thisIsDateAsked',
  helpfulCount: 1,
  unhelpfulCount: 0
  }]


describe('<ItemDetails />', () => {

  it('renders SellingPoints component', () => {
    const wrapper = shallow(<ItemDetails details={mockProps}/>);
    expect(wrapper.find(SellingPoints)).to.have.lengthOf(1)
  });

  it('renders an `.item-detail-list` class', () => {
    const wrapper = shallow(<ItemDetails details={mockProps}/>);
    expect(wrapper.find('.item-detail-list')).to.have.lengthOf(1);
  });

  it('renders a fit and style blurb within SellingPoints component', () => {
    const wrapper = shallow(<SellingPoints details={mockProps}/>);
    var blurb = mockProps.fitAndStyleBlurb;
    expect(wrapper.text()).to.include("fitAndStyleBlurb")
  });

  it('renders sizing', () => {
    const wrapper = shallow(<ItemDetails details={mockProps} />);
    expect(wrapper.text()).to.include('Runs long');
  });

  it('renders material', () => {
    const wrapper = shallow(<ItemDetails details={mockProps} />);
    expect(wrapper.text()).to.include('Polyester');
  });

  it('renders fit', () => {
    const wrapper = shallow(<ItemDetails details={mockProps} />);
    expect(wrapper.text()).to.include('Handmade');
  });

  it('renders length', () => {
    const wrapper = shallow(<ItemDetails details={mockProps} />);
    expect(wrapper.text()).to.include('Long');
  });

  it('renders features', () => {
    const wrapper = shallow(<ItemDetails details={mockProps} />);
    expect(wrapper.text()).to.include('Practical');
  });

  it('renders neckline', () => {
    const wrapper = shallow(<ItemDetails details={mockProps} />);
    expect(wrapper.text()).to.include('High');
  });

  it('renders itemStyle', () => {
    const wrapper = shallow(<ItemDetails details={mockProps} />);
    expect(wrapper.text()).to.include('Basic');
  });

  it('renders garmentCuffCutType', () => {
    const wrapper = shallow(<ItemDetails details={mockProps} />);
    expect(wrapper.text()).to.include('Cuff cut');
  });

  it('renders garmentSleeveStyle', () => {
    const wrapper = shallow(<ItemDetails details={mockProps} />);
    expect(wrapper.text()).to.include('Basic sleeve');
  });

  it('renders care and cleaning info', () => {
    const wrapper = shallow(<ItemDetails details={mockProps} />);
    expect(wrapper.text()).to.include('Machine wash cold');
  });

  it('renders TCIN number', () => {
    const wrapper = shallow(<ItemDetails details={mockProps} />);
    expect(wrapper.text()).to.include(3);
  });

  it('renders UPC number', () => {
    const wrapper = shallow(<ItemDetails details={mockProps} />);
    expect(wrapper.text()).to.include(10);
  });

  it('renders a DPCI number', () => {
    const wrapper = shallow(<ItemDetails details={mockProps} />);
    expect(wrapper.text()).to.include(12);
  });

  it('renders an origin', () => {
    const wrapper = shallow(<ItemDetails details={mockProps} />);
    expect(wrapper.text()).to.include('California');
  });

  it('renders an item style', () => {
    const wrapper = shallow(<ItemDetails details={mockProps} />);
    expect(wrapper.text()).to.include('Men - Shirts');
  });
});

describe('<Questions />', () => {
  it('renders a questionWithAnswer OR questionWithoutAnswer component, but not both', () => {
    const wrapper = shallow(<Questions details={mockQuestions}/>);
    const totalLength = wrapper.find(QuestionWithAnswer).length + wrapper.find(QuestionWithoutAnswer).length
    expect(totalLength).to.equal(1);
  });

  it('renders a `.question` class', () => {
    const wrapper = shallow(<Questions details={mockQuestions}/>);
    expect(wrapper.find('.question')).to.have.lengthOf(1);
  });
});

describe('<QuestionWithAnswer />', () => {
  it('renders a `.questionWithAnswer` class', () => {
    const wrapper = shallow(<QuestionWithAnswer question={mockQuestions[0]} />);
    expect(wrapper.find('.questionWithAnswer')).to.have.lengthOf(1);
  });

  it('renders an answer', () => {
    const wrapper = shallow(<QuestionWithAnswer question={mockQuestions[0]} />);
    expect(wrapper.text()).to.include('thisIsAnAnswer');
  });

  it('renders a date answered', () => {
    const wrapper = shallow(<QuestionWithAnswer question={mockQuestions[0]} />);
    expect(wrapper.text()).to.include('thisIsDateAnswered');
  });

  it('renders a helpfulCount', () => {
    const wrapper = shallow(<QuestionWithAnswer question={mockQuestions[0]} />);
    expect(wrapper.text()).to.include('1');
  });

  it('renders an unhelpfulCount', () => {
    const wrapper = shallow(<QuestionWithAnswer question={mockQuestions[0]} />);
    expect(wrapper.text()).to.include('0');
  });

})

describe('<QuestionWithoutAnswer />', () => {
  it('renders a `.questionWithoutAnswer` class', () => {
    const wrapper = shallow(<QuestionWithoutAnswer question={mockQuestions[0]}/>);
    expect(wrapper.find('.questionWithoutAnswer')).to.have.lengthOf(1);
  });

  it('renders a question', () => {
    const wrapper = shallow(<QuestionWithoutAnswer question={mockQuestions[0]}/>);
    expect(wrapper.text()).to.include('thisIsAQuestion')
  });

  it('renders an asker', () => {
    const wrapper = shallow(<QuestionWithoutAnswer question={mockQuestions[0]}/>);
    expect(wrapper.text()).to.include('thisIsAnAsker')
  });

  it('renders a date asked', () => {
    const wrapper = shallow(<QuestionWithoutAnswer question={mockQuestions[0]}/>);
    expect(wrapper.text()).to.include('thisIsDateAsked')
  });

  it('does not render an answer', () => {
    const wrapper = shallow(<QuestionWithoutAnswer question={mockQuestions[0]}/>);
    expect(wrapper.text()).to.not.include('thisIsAnAnswer')
  });

  it('does not render a date answered', () => {
    const wrapper = shallow(<QuestionWithoutAnswer question={mockQuestions[0]}/>);
    expect(wrapper.text()).to.not.include('thisIsDateAnswered')
  });

  it('does not render a helpful count', () => {
    const wrapper = shallow(<QuestionWithoutAnswer question={mockQuestions[0]}/>);
    expect(wrapper.text()).to.not.include(1)
  });

  it('does not render an unhelpful count', () => {
    const wrapper = shallow(<QuestionWithoutAnswer question={mockQuestions}/>);
    expect(wrapper.text()).to.not.include(0)
  });
})


describe('<Shipping />', () => {
  it('renders a shipping details component', () => {
    const wrapper = shallow(<Shipping />);
    expect(wrapper.find(ShippingDetails)).to.have.lengthOf(1)
  });

  it('renders a shipping options component', () => {
    const wrapper = shallow(<Shipping />);
    expect(wrapper.find(ShippingOptions)).to.have.lengthOf(1)
  });

  it('renders a return details component', () => {
    const wrapper = shallow(<Shipping />);
    expect(wrapper.find(ReturnDetails)).to.have.lengthOf(1)
  });

  it('renders a `.shipping` class', () => {
    const wrapper = shallow(<Shipping />);
    expect(wrapper.find('.shipping')).to.have.lengthOf(1);
  });

  it('renders an estimated ship dimensions prop within shippingDetails component', () => {
    const wrapper = shallow(<ShippingDetails details={[{estimatedShipDimensions: '10 feet'}]}/>);
    expect(wrapper.text()).to.include('10 feet');
  });

  it('renders an estimated ship weight prop within the ShippingDetails component', () => {
    const wrapper = shallow(<ShippingDetails details={[{estimatedShipWeight: '30 pounds'}]}/>);
    expect(wrapper.text()).to.include('30 pounds');
  });

  it('renders a `.shippingDetails` class within the ShippingDetails component', () => {
    const wrapper = shallow(<ShippingDetails details={[{estimatedShipWeight: '5 pounds'}]} />);
    expect(wrapper.find('.shippingDetails')).to.have.lengthOf(1);
  });

  it('renders a `.shippingOptions` class within the shippingOptions component', () => {
    const wrapper = shallow(<ShippingOptions details={[{fastShipping: true}]} />);
    expect(wrapper.find('.shippingOptions')).to.have.lengthOf(1);
  });

  it('renders a `.returnClass` class within the ReturnDetails component', () => {
    const wrapper = shallow(<ReturnDetails />);
    expect(wrapper.find('.returnDetails')).to.have.lengthOf(1);
  });
});

describe('<GiftNow />', () => {
  it('has a nittyGrittyDetails component that renders 3 FAQ components', () => {
    const wrapper = shallow(<NittyGrittyDetails />);
    expect(wrapper.find(Faq)).to.have.lengthOf(3)
  });

  it('has a heresHowItWorks component that renders 3 gift steps components', () => {
    const wrapper = shallow(<HeresHowItWorks />);
    expect(wrapper.find(GiftSteps)).to.have.lengthOf(3)
  });

  it('has a heresHowItWorks component that renders an `.heresHowItWorks` class', () => {
    const wrapper = shallow(<HeresHowItWorks />);
    expect(wrapper.find('.heresHowItWorks')).to.have.lengthOf(1);
  });

  it('has a nittyGrittyDetails component that renders an `.nittyGrittyDetails` class', () => {
    const wrapper = shallow(<NittyGrittyDetails />);
    expect(wrapper.find('.nittyGrittyDetails')).to.have.lengthOf(1);
  });

  it('has a `.giftNow` class', () => {
    const wrapper = shallow(<GiftNow />);
    expect(wrapper.find('.giftNow')).to.have.lengthOf(1);
  });
});

describe('<GiftSteps />', () => {
  it('has a `.giftSteps` class', () => {
    const wrapper = shallow(<GiftSteps step={{imageUrl: "https://target.scene7.com"}}/>);
    expect(wrapper.find('.giftSteps')).to.have.lengthOf(1);
  });

  it('renders a step', () => {
    const wrapper = shallow(<GiftSteps step={{step: "Step 2"}}/>);
    expect(wrapper.text()).to.include("Step 2")
  });

  it('renders a description', () => {
    const wrapper = shallow(<GiftSteps step={{description: "stepDescription"}}/>);
    expect(wrapper.text()).to.include("stepDescription")
  });
})

describe('<Faq />', () => {
  it('has an `.Faq` class', () => {
    const wrapper = shallow(<Faq question={{question: "FaqQuestion"}}/>);
    expect(wrapper.find('.Faq')).to.have.lengthOf(1);
  });

  it('renders a question', () => {
    const wrapper = shallow(<Faq question={{question: "FaqQuestion"}}/>);
    expect(wrapper.text()).to.equal('FaqQuestion');
  });

  it('renders an answer', () => {
    const wrapper = shallow(<Faq question={{answer: "FaqAnswer"}}/>);
    expect(wrapper.text()).to.equal("FaqAnswer");
  });
})

describe('<Sizing />', () => {
  it('renders an `.sizing` class', () => {
    const wrapper = shallow(<Sizing details={mockSizing}/>);
    expect(wrapper.find('.sizing')).to.have.lengthOf(1);
  });


});
