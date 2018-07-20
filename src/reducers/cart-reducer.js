// src/reducers/cart-reducer.js

import  { ADD_TO_CART, DEL_FROM_CART, UPDATE_CART, INIT}  from '../actions/cart-actions';

/*const initialState = {
  cart: [
    {
      product: 'bread 700g',
      quantity: 2,
      unitCost: 90
    }
  ]
}*/

export default function(state={}, action) {
  switch (action.type) {
  	case INIT: {
  		/*console.log(action.payload.state)*/
  		return {
        ...state,
        cart: [...action.payload.state.cart]
      }
  	}
  	
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    }
    
    case UPDATE_CART: {
    	return {
    		...state,
    		cart:state.cart.map((item) => item.product === action.payload.product ? action.payload : item)
    	}
    }
    
    case DEL_FROM_CART: {
    	return {
    		...state,
        cart: state.cart.filter((item) => item.product !== action.payload.product)
    	}
    }

    default:
      return state;
  }
}