import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';
import appReducer from './reducers';
import './index.css';

const store = createStore(appReducer, applyMiddleware(thunk));

const OddsOrEven = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default OddsOrEven;
