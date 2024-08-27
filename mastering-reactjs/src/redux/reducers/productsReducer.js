
import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
  } from '../actions/productActions';
  
  const initialState = {
    items: [],
    loading: false,
    error: null,
  };
  
  export default function productsReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          loading: false,
          items: action.payload,
        };
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  }
  