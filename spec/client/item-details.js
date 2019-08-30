import React from 'react';
import Enzyme from './enzyme.js'
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ItemDetails from '../../client/src/components/ItemDetails/ItemDetails';
import SellingPoints from '../../client/src/components/ItemDetails/SellingPoints';

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
