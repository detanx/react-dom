import React, {Component} from 'react';
import $ from 'jquery';
import Cart from './cart';
import { init } from "../actions/cart-actions"
import store from "../store";

export default class extends Component{
	componentDidMount() {
		let that = this;
		$.ajax({
			type:"post",
			url:"http://127.0.0.1:8081/user",
			data:{"name":0},
			success:function(data) {
				console.log(JSON.parse(data))
				let stateData = JSON.parse(data);
				that.setState({
					cart:stateData
				})
				store.dispatch(init(that.state))
    		//console.log(...that.state.cart)
			},
			error:function(err) {
				console.log(err);
			}
		})
	}
  render(){
    const { state,delFromCart} = this.props;
    let re = null;
    if(JSON.stringify(state) !== "{}") {
  		re = state.cart.map((todo, index) => {
        return (
          <Cart
            key={todo.product}
            {...todo}
            delCart={
            	function() {
            		$.ajax({
									type:"POST",
									url:"http://127.0.0.1:8081/delCart",
									data:{product: todo.product},
									success:function(data) {
										console.log(JSON.parse(data))
										let stateData = JSON.parse(data);
										if(stateData.code === 1) {
			            		delFromCart(todo.product);
										}
									},
									error:function(err) {
										console.log(err);
									}
								})
            		}
            	}
          />)
        }
      )
  	}
    
    return(
    	<ul className="dodo-list">
    	  <li>
    	  	<span>产品</span>
    	  	<span>数量</span>
    	  	<span>单位成本</span>
    	  	<span>操作</span>
    	  </li>
        { re }
      </ul>
    )
  }
}