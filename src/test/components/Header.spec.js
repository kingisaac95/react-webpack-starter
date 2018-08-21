import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../app/components/Header';

describe('<Header />', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });
});
