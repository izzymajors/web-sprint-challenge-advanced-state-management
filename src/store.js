import thunk from 'redux-thunk';
import {applyMiddleware, createStore } from 'redux';


const middleware = applyMiddleware(thunk);

const store = createStore(middleware);

export default store;