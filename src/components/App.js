import React, {Component} from 'react';
import CartList from "../containers/cartList";
import AddToCart from "../containers/addToCart"

export default class extends Component {
	render() {
		return(
			<div className="containers">
				<AddToCart />
				<CartList />
			</div>
		)
	}
}
