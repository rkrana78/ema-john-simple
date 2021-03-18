import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
   // const total = cart.reduce((total, prd) => total + prd.price, 0);  amra eita eivabe o korte parbo

   let total = 0;
   for (let i = 0; i < cart.length; i++) {
       const product = cart[i];
       total = total + product.price * product.quantity;
       
   }

   let shipping = 0;
   if(total > 35){
       shipping = 0;
   } 
   else if(total > 15){
       shipping = 5
   }
   else if(total > 0) {
        shipping = 10;
   } 

   const tax = (total / 10).toFixed(2);
   const grandTotal = Math.round(total + shipping + Number(tax));
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {total}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax + Vat: {tax} </small></p>
            <p>Total Price: {grandTotal}</p>
            <br/>
            {
                props.children
            }
        </div>
    );
};

export default Cart;