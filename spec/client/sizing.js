import React from 'react';
import Enzyme from './enzyme.js'
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Sizing from '../../client/src/components/Sizing/Sizing';

var mockSizing = [{'size': 0, 'chest': 1, 'neck': 2, 'sleeve': 3}]

describe('<Sizing />', () => {
  it('renders an `.sizing` class', () => {
    const wrapper = shallow(<Sizing details={mockSizing}/>);
    expect(wrapper.find('.sizing')).to.have.lengthOf(1);
  });
});
