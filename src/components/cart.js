import React, {Component} from 'react';

export default class extends Component{
  render(){
    const { product, quantity, unitCost ,delCart} = this.props;
    return(
      <li>
      	<span>{product}</span>
    	  <span>{quantity}</span>
    	  <span>{unitCost}</span>
      	<p><span className="delete" onClick={delCart}>删除</span></p>
      </li>
    )
  }
}