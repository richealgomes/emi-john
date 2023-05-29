import React from 'react';
import './Review.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Review = ({product, handleRemoveCart}) => {
    const {img ,category,price,shipping,id}=product;
    return (
        <div className='reviewItem'>
            <img className='img' src={img} alt="" />
            <div className='review-details'>
            <p className='title'>{category}</p>
            <p>Price: <span className='orangeText'>${price}</span></p>
            <p>Shipping Charge : <span className='orangeText'>${shipping}</span></p>
            </div>
            <button onClick={()=> handleRemoveCart(id)} className='button-delete'> <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} /></button>
        </div>
    );
};

export default Review;