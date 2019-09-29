import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import { BrowserRouter as Router, __RouterContext } from "react-router-dom";
import App from './App';


function Base() {
  return (
    <Provider store={configureStore}>
      <Router>
          <App />
      </Router>
    </Provider>
  );
}

export default Base;