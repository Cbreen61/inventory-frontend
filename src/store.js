import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import regionsReducer from './reducers/regions.js';
import thunk from 'redux-thunk';

const reducer = combineReducers ({
    regions: regionsReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store