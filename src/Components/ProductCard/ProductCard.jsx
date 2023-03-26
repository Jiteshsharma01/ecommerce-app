import React from 'react';
import { useNavigate } from "react-router-dom";
// import './ProductCard.css';

const ProductCard = React.forwardRef((props, ref) => {
    const navigate = useNavigate();
  
    const getProduct = () => {
      console.log('jhvsjdvh', props.title, props.id);
      navigate(`/product/${props.id}`, {state: props});
    }
    
    return (
      <div ref={ref} className='card' onClick={getProduct}>
        <img loading="lazy" src={props.thumbnail} alt='apple-img' />
        <h2 className='brand-name'>{props.title}</h2>
        <div className='price-rate-box'>
          <span className='price'>₹ {props.price}</span>
          <span className='rating'>{props.rating} ★</span>
        </div>
        <p className='description'>{props.description}</p>
      </div>
    );
});

export default ProductCard;