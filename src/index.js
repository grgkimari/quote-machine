import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ConnectedApp} from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import { mainReducer, SAVE_DATA} from './components/reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));

/* Create store */
const store = createStore(mainReducer, applyMiddleware(thunk))
const unsubscribe = store.subscribe(() => null)

//Fetch quotes



root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
