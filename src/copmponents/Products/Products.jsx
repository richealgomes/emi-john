import React, { useEffect, useState } from 'react';
import './Products.css'
import Product from '../Product/Product';

const Products = () => {
    const [products , setProducts]=useState([])
    const [cart , setCart]= useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(reg=>reg.json())
        .then(data=>setProducts(data))
    },[])
    const handleToCart =(product)=>{
        const newCart = [...cart ,product];
        setCart(newCart)
    } 
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map( product=> <Product key={product.id}
                    product={product} handleAddToCart={handleToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h2>Order Summary</h2>
                <h3>Selected items: {cart.length}</h3>
            </div>
        </div>
    );
};

export default Products;