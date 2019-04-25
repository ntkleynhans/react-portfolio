import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import appReducer from './reducers';
import PubSub, { PubSubContext } from './pubsub';
import { newMessage } from './actions/messages';
import './index.css';

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.log('Store -->', store.getState()));

const pubsub = new PubSub();

pubsub.addListener({
  message: messageObject => {
    const { message, channel } = messageObject;
    console.log('Message Received:', message, ' from channel:', channel);
    const audio = document.getElementById('audioPlayer');
    audio.play(); 
    store.dispatch(message);
  }
});

export default () => (
  <Provider store={store}>
  <PubSubContext.Provider value={{ pubsub }}>
    <App />
  </PubSubContext.Provider>
  </Provider>    
);  
