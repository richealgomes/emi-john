import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Review from '../ReviewItem/Review';
import './Order.css'
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const SavedCart = useLoaderData()
    const [cart , setCart]=useState(SavedCart)
    
    const handleRemoveCart = (id) =>{
     const remaining = cart.filter(product=>product.id !==id);
     setCart(remaining)
     removeFromDb(id)
    }
    return (
        <div className='shop-container'>
            <div className='review-container'>
               {
                cart.map(product=><Review key={product.id}product={product}
                handleRemoveCart={handleRemoveCart}></Review>)
               }
            </div>
            <div className='cart-container'>
              <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};
export default Orders;