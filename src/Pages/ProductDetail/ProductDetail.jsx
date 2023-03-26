import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import './ProductDetail.css';

const ProductDetail = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    console.log('getProduct', state);
    const getProduct = () => {
        console.log('getProduct', state?.title);
    }

    const updateProduct = () => {
        console.log('updateProduct', state?.title);
        navigate(`/update-product/${state.id}`, {state: state});
    }
    
    async function deleteProductApi() {
        let url = `https://dummyjson.com/products/${state.id}`;
        let options = {
          method: 'DELETE'
        };
        try {
          let res = await fetch(url, options);
          return await res.json();
        } catch (error) {
          console.log(error);
        }
    }
    const deleteProduct = async() => {
        const productsData = await deleteProductApi();
        console.log('deleteProduct', productsData);
        navigate('/Home', {state: productsData});
    }

    return (
        <div className='product-container container'>
            <div className='product-img'>
                <img src={state?.thumbnail} alt='apple-img' />
                <button className='add-cart-btn' onClick={getProduct}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-2 h-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    Add to Cart
                </button>
            </div>
            <div className='product-description'>
                <div className='action-btn'>
                    <button className='update-btn' onClick={updateProduct}>Update product</button>
                    <button className='delete-btn' onClick={deleteProduct}>Delete product</button>
                </div>
                <div className='category-brand'>
                    <span className='category'>{state?.category}</span>
                    <span className='brand'>{state?.brand}</span>
                </div>
                <h2 className='brand-name'>{state?.title}</h2>
                <div className='price-discount-box'>
                    <span className='price'>₹ {state?.price}</span>
                    {state?.discountPercentage ? <span className='discountPercentage'>{state?.discountPercentage}%</span> : null}
                </div>
                <span className='rating'>{state?.rating} ★</span>
                <p className='availability'>Available in stock {state?.stock}</p>
                <p className='description'>{state?.description}</p>
                {state?.images ? <>
                    <h3>More Photos of {state?.title}</h3>
                    <div className='similar-img-box'>
                        {state?.images?.map((image) => {
                            return(
                                <img loading="lazy" src={image} alt={image} className='similar-img' />
                            )
                        })}
                    </div>
                </> : null}
            </div>
        </div>
    );
}

export default ProductDetail;