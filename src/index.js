// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from "./components/App"
import store from './store.js';
import "./public/stylesheet/style.css"
import { addToCart, updateCart, delFromCart }  from './actions/cart-actions';

/*const App = <h1>hello react-redux</h1>*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> ,
  document.getElementById('root')
);



//console.log("initial state: ", store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

/*store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));
store.dispatch(delFromCart('Juice 2L'));
store.dispatch(updateCart('Flour 1kg', 3, 20));*/

unsubscribe();