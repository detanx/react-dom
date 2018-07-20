import {connect} from 'react-redux';
import {addToCart} from '../actions/cart-actions';
import addCart from "../components/addToCart";

const mapStateToProps = (state) => ({
  state:state.shoppingCart
});

const mapDispatchToProps = {
  addToCart: addToCart,
};


const AddToCart = connect(mapStateToProps,mapDispatchToProps)(addCart);

export default AddToCart
