import React,{ Component} from "react";
import $ from 'jquery';
export default class extends Component{

	render() {
		const { addToCart } = this.props;
		return (
			<div className="inner">
				<from>
					<input type="text" placeholder="product" ref={node => {
	          this.product = node
	        }}/>
					<input type="text" placeholder="quantity" ref={node => {
	          this.quantity = node
	        }}/>
					<input type="text" placeholder="unitCost" ref={node => {
	          this.unitCost = node
	        }}/>
	        <button onClick={e => {
	            e.preventDefault();
	            let numRE =  /^[0-9]+.?[0-9]*/;
							if (!this.product.value.trim() || !this.quantity.value.trim() || !this.unitCost.value.trim() ) {
								alert("请输入完整商品信息")
	              return
	            }
							if(!numRE.test(this.quantity.value) || !numRE.test(this.unitCost.value)) {
								alert("数量或单价请输入数字");
								return;
							}
							let product = this.product.value;
							let quantity = this.quantity.value;
							let unitCost = this.unitCost.value;
							let that = this;
							//保存到数据库
							$.ajax({
								type:"POST",
								url:"http://127.0.0.1:8081/addCart",
								data:{
									product: product,
						      quantity: quantity,
						      unitCost: unitCost
								},
								success:function(data) {
									console.log(JSON.parse(data))
									let stateData = JSON.parse(data);
									if(stateData.code === 1) {
		            		addToCart(product,quantity,unitCost);
				            that.product.value = '';
				            that.quantity.value = '';
				            that.unitCost.value = '';
									}
								},
								error:function(err) {
									console.log(err);
								}
							})
						}}
	        	>
	          Add Product
	        </button>
				</from>
			</div>
		)
	}
}
