import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => { 

    const {img,name,price,seller,ratings}=props.product;
    const handleAddToCart= props.handleAddToCart;
    return (
        <div className='Product'>
        <img src={img} alt="" />
        <div className='info'>
        <h6 className='name'>{name}</h6>
        <h3>Price: ${price}</h3>
        <h4 className='seller-ratings'>seller: {seller}</h4>
        <h4 className='seller-ratings'>ratings: {ratings}</h4>
        </div>
        <button className='button-cart'onClick={()=>handleAddToCart(props.product)}>add to cart
        <FontAwesomeIcon icon={faShoppingCart} /> </button>
        </div>
    );
};

export default Product;