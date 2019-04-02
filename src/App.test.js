import React from 'react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

import { createStore } from 'redux'
import store from './store'

import { shallow } from 'enzyme';


it('renders without crashing', () => {
  shallow(<MemoryRouter initialEntries={['/']} initialIndex={0}>
    <App/>
  </MemoryRouter>);
});
