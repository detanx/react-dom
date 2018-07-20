export const ADD_TO_CART = 'ADD_TO_CART';
export const DEL_FROM_CART = 'DEL_FROM_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const INIT = 'INIT';

export function addToCart(product, quantity, unitCost) {
  return {
    type: ADD_TO_CART,
    payload: { product, quantity, unitCost }
  }
}

export function delFromCart(product) {
	return {
		type: DEL_FROM_CART,
    payload: { product }
	}
}

export function updateCart(product, quantity, unitCost) {
	return {
		type: UPDATE_CART,
		payload: {product, quantity, unitCost}
	}
}

export function init(state) {
	return {
		type: INIT,
		payload: {state}
	}
}