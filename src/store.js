// src/store.js

import { createStore } from "redux";
import rootReducer from './reducers/index';

let store = createStore(rootReducer);

export default store;