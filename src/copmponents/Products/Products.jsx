import React, { useEffect, useState } from 'react';
import './Products.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Products = () => {
    const [products , setProducts]=useState([])
    const [cart , setCart]= useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(reg=>reg.json())
        .then(data=>setProducts(data))
    },[])
    // useEffect(()=>{
    //     fetch('products.json')
    //     .then(reg=>reg.json())
    //     .then(data=>setCart(data))
    // },[])

    const handleAddToCart =(product)=>{
        const newCart =[...cart,product];
        setCart(newCart)
      }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map( product=> <Product key={product.id}
                    product={product} handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
              <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Products;