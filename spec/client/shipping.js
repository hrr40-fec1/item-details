import React from 'react';
import Enzyme from './enzyme.js'
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Shipping from '../../client/src/components/Shipping/Shipping';
import ReturnDetails from '../../client/src/components/Shipping/ReturnDetails';
import ShippingDetails from '../../client/src/components/Shipping/ShippingDetails';
import ShippingOptions from '../../client/src/components/Shipping/ShippingOptions';

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
