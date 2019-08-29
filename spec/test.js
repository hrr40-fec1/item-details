import React from 'react';
import Enzyme from './enzyme.js'
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

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
  fitAndStyleBlurb: "Repellat sunt in laudantium inventore. Pariatur et tenetur ullam architecto illo dolores deleniti sint illo. Cum eum iure. A hic recusandae autem expedita nostrum sit nesciunt.",
  fitAndStylePointFive: null,
  fitAndStylePointFour: null,
  fitAndStylePointOne: null,
  fitAndStylePointThree: null,
  fitAndStylePointTwo: null
}]

var mockSizing = [{'size': 0, 'chest': 1, 'neck': 2, 'sleeve': 3}]

var mockQuestions = [{'question': 'hello?'}]

describe('<ItemDetails />', () => {
  it('renders without user clicking on anything', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<ItemDetails details={mockProps}/>);
    expect(onButtonClick).to.have.property('callCount', 0);
    expect(shallow(<ItemDetails />)).toMatchSnapshot();
  });

  it('renders selling points component', () => {
    const wrapper = shallow(<ItemDetails details={mockProps}/>);
    expect(wrapper.find(SellingPoints)).to.have.lengthOf(1)
  });

  it('renders an `.item-detail-list`', () => {
    const wrapper = shallow(<ItemDetails details={mockProps}/>);
    expect(wrapper.find('.item-detail-list')).to.have.lengthOf(1);
  });

  // it('renders from another page when clicked on', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = shallow(<ItemDetails onButtonClick={onButtonClick} />);
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick).to.have.property('callCount', 1);
  // });
});

describe('<Questions />', () => {
  it('renders a questionWithAnswer OR questionWithoutAnswer component', () => {
    const wrapper = shallow(<Questions details={mockQuestions}/>);
    const totalLength = wrapper.find(QuestionWithAnswer).length + wrapper.find(QuestionWithoutAnswer).length
    expect(totalLength).to.equal(1);
  });

  it('renders an `.question` class', () => {
    const wrapper = shallow(<Questions details={mockQuestions}/>);
    expect(wrapper.find('.question')).to.have.lengthOf(1);
  });

  // it('renders from another page when clicked on', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = shallow(<Questions onButtonClick={onButtonClick} />);
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick).to.have.property('callCount', 1);
  // });
});

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

  it('renders an `.shipping` class', () => {
    const wrapper = shallow(<Shipping />);
    expect(wrapper.find('.shipping')).to.have.lengthOf(1);
  });

  // it('renders from another page when clicked on', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = shallow(<a onClick={() => App.handleClick('Shipping')}>Shipping & Returns  </a>);
  //   wrapper.find('a').simulate('click');
  //   expect(onButtonClick).to.have.property('callCount', 1);
  // });

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

  it('renders an `.heresHowItWorks` class', () => {
    const wrapper = shallow(<HeresHowItWorks />);
    expect(wrapper.find('.heresHowItWorks')).to.have.lengthOf(1);
  });

  it('renders an `.nittyGrittyDetails` class', () => {
    const wrapper = shallow(<NittyGrittyDetails />);
    expect(wrapper.find('.nittyGrittyDetails')).to.have.lengthOf(1);
  });

  // it('renders from another page when clicked on', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = shallow(<GiftNow onButtonClick={onButtonClick} />);
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick).to.have.property('callCount', 1);
  // });
});

describe('<Sizing />', () => {
  it('renders an `.sizing` class', () => {
    const wrapper = shallow(<Sizing details={mockSizing}/>);
    expect(wrapper.find('.sizing')).to.have.lengthOf(1);
  });

  // it('renders from another page when clicked on', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = shallow(<Sizing onButtonClick={onButtonClick} />);
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick).to.have.property('callCount', 1);
  // });

});
