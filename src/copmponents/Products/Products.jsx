import React, { useEffect, useState } from 'react';
import './Products.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Products = () => {
    const [products , setProducts]=useState([])
    const [cart , setCart]= useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(reg=>reg.json())
        .then(data=>setProducts(data))
    },[])
   useEffect(()=>{
     const storedProduct = getShoppingCart();
     const savedCart =[]
    //  step 1 get id of the add product
    for(const id in storedProduct){
        const addedProduct = products.find(product =>product.id===id)
    if(addedProduct){
        const quantity = storedProduct[id];
        addedProduct.quantity = quantity;
        // step 4 add the added product to the saved cart
        savedCart.push(addedProduct);
    }
        console.log('added product',addedProduct)
    }
    // step-5 saved the cart 
    setCart(savedCart);
   },[products])
   
       
    const handleAddToCart =(product)=>{
        const newCart =[...cart,product];
        setCart(newCart);
        addToDb(product.id)
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