import React from 'react';
import { shallow } from 'enzyme';

import SimpleImageHeader from '../index';

describe('<Header />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<SimpleImageHeader />);
    expect(renderedComponent.length).toEqual(1);
  });
});
