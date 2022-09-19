import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ConnectedApp} from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import { mainReducer} from './components/reducer';
import Author from './components/Author';


const root = ReactDOM.createRoot(document.getElementById('root'));

/* Create store */
const store = createStore(mainReducer, applyMiddleware(thunk))
const unsubscribe = store.subscribe(() => null)

//Custom css styles
const styles = {
  height : 'auto',
}



root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div style={styles}>
      <ConnectedApp />
      </div>
      
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
