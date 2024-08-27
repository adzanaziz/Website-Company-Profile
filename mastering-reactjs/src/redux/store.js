import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import productsReducer from './reducers/productsReducer'; 

const rootReducer = combineReducers({
  products: productsReducer,
  
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
