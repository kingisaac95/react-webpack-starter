import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './app/store/configure-store';
import App from './app/App';
import './index.scss';

export const Root = () => <Provider store={configureStore()}><App /></Provider>;

ReactDOM.render(<Root />, document.getElementById('root'));
