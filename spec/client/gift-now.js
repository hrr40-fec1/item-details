import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() })

import GiftNow from '../../client/src/components/GiftNow/GiftNow';
import Faq from '../../client/src/components/GiftNow/FAQ';
import GiftSteps from '../../client/src/components/GiftNow/GiftSteps';
import HeresHowItWorks from '../../client/src/components/GiftNow/HeresHowItWorks';
import NittyGrittyDetails from '../../client/src/components/GiftNow/NittyGrittyDetails';

describe('<GiftNow />', () => {
  it('has a nittyGrittyDetails component that renders 3 FAQ components', () => {
    const wrapper = shallow(<NittyGrittyDetails />);
    expect(wrapper.find(Faq)).to.have.lengthOf(3);
  });

  it('has a heresHowItWorks component that renders 3 gift steps components', () => {
    const wrapper = shallow(<HeresHowItWorks />);
    expect(wrapper.find(GiftSteps)).to.have.lengthOf(3);
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
    const wrapper = shallow(<GiftSteps step={{ imageUrl: 'https://target.scene7.com' }} />);
    expect(wrapper.find('.giftSteps')).to.have.lengthOf(1);
  });

  it('renders a step', () => {
    const wrapper = shallow(<GiftSteps step={{ stepNumber: 'Step 2' }} />);
    expect(wrapper.text()).to.include('Step 2');
  });

  it('renders a description', () => {
    const wrapper = shallow(<GiftSteps step={{ description: 'stepDescription' }} />);
    expect(wrapper.text()).to.include('stepDescription');
  });
});

describe('<Faq />', () => {
  it('has an `.Faq` class', () => {
    const wrapper = shallow(<Faq question={{ question: 'FaqQuestion' }} />);
    expect(wrapper.find('.Faq')).to.have.lengthOf(1);
  });

  it('renders a question', () => {
    const wrapper = shallow(<Faq question={{ question: 'FaqQuestion' }} />);
    expect(wrapper.text()).to.equal('FaqQuestion');
  });

  it('renders an answer', () => {
    const wrapper = shallow(<Faq question={{ answer: 'FaqAnswer' }} />);
    expect(wrapper.text()).to.equal('FaqAnswer');
  });
});
