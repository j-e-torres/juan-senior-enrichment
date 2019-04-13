import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import Main from './components/Main'
import store from './store'

const root = document.querySelector('#root');
ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    root
);
