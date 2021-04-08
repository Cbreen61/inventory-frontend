import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import regionsReducer  from './reducers/regions';
import thunk from 'redux-thunk';

// const reducer = combineReducers ({
//     regionsReducer
// });

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(regionsReducer, composeEnhancer(applyMiddleware(thunk)))

export default store