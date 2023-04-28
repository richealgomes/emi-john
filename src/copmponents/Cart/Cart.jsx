import React from 'react';
import './Cart.css';
const Cart = (props) => {
    // const Cart = (props) => {
    const {cart}=props;
    console.log(cart)

    let totalPrice = 0;
    let totalShipping =0;
    for (const product of cart){
        totalPrice = totalPrice+ product.price;
        totalShipping =  totalShipping+product.shipping }
    const tax = totalPrice *7/100    
    const grandTotal = totalPrice+totalShipping+tax
    return (
        <div>
            <h4 className='summary'>
                Order Summary</h4>
                <p>Selected items: {cart.length}</p>
                <p>Total Price: ${totalPrice} </p>
                <p>Total Shipping: ${ totalShipping}</p>
                <p>tax: {tax.toFixed(2)}</p>
                <h6>Grand Total: {grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;