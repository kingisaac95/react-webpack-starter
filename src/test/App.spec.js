import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/app/App';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
