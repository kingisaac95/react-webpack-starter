import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.scss';

export const Root = () => <App />

ReactDOM.render(<Root />, document.getElementById('root'));
