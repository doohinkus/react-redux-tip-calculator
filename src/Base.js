import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import App from './App';


function Base() {
  return (
    <Provider store={configureStore}>
        <App />
    </Provider>
  );
}

export default Base;