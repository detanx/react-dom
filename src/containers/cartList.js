import {connect} from 'react-redux';
import {delFromCart} from "../actions/cart-actions"
import cartList from "../components/cartList";

const mapStateToProps = (state) => ({
  state:state.shoppingCart
});

const mapDispatchToProps = {
	delFromCart:delFromCart
};

const CartShow = connect(mapStateToProps, mapDispatchToProps)(cartList);

export default CartShow
