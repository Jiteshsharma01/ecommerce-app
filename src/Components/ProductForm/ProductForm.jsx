import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import './ProductForm.css';

const ProductForm = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const [values, setValues] = useState({
        brand: state?.brand ?? "",
        category: state?.category ?? "",
        description: state?.description ?? "",
        price: state?.price ?? "",
        discountPercentage: state?.discountPercentage ?? "",
        productImg: "",
    });
    
    console.log('sdjv', state);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues((prevProps) => ({ ...prevProps, [name]: value }));
    };

    async function createProduct() {
        let url = 'https://dummyjson.com/products/add';
        let options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values)
        };
        try {
          let res = await fetch(url, options);
          return await res.json();
        } catch (error) {
          console.log(error);
        }
    }
    
    async function updateProduct() {
        let url = `https://dummyjson.com/products/${state.id}`;
        let options = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values)
        };
        try {
          let res = await fetch(url, options);
          return await res.json();
        } catch (error) {
          console.log(error);
        }
    }
    
    const saveProduct = async(event) => {
        event.preventDefault();
        console.log('jhvsjdvh', values);
        let productsData= {};
        if(state?.id){
            productsData = await updateProduct();
        } else {
            productsData = await createProduct();
        }

        // setProductsList(productsData?.products)
        console.log('hhjsvd', productsData);    
        navigate(`/product/${productsData.id}`, {state: productsData});
    };
    
    return (
        <div className='form-box'>
            <h2>Fill the details to create product</h2>
            <form
                method='POST'
                onSubmit={saveProduct}
                className='product-form'
            >
                <div className="form-control">
                    <label>Brand</label>
                    <input type="text" onChange={handleInputChange} value={values.brand} name="brand" id="brand" required />
                </div>
                <div className="form-control">
                    <label>Category</label>
                    <input type="text" onChange={handleInputChange} value={values.category} name="category" id="category" required />
                </div>
                <div className="form-control">
                    <label>Description</label>
                    <input type="text" onChange={handleInputChange} value={values.description} name="description" id="description" required />
                </div>
                <div className="form-control">
                    <label>Price</label>
                    <input type="number" onChange={handleInputChange} value={values.price} name="price" id="price" required />
                </div>    
                <div className="form-control">
                    <label>Discount Percentage</label>
                    <input type="text" onChange={handleInputChange} value={values.discountPercentage} name="discountPercentage" id="discountPercentage" required />
                </div>    
                <div className="form-control">
                    <label>Product Image</label>
                    <input type="file" onChange={handleInputChange} value={values.productImg} name="productImg" id="productImg" accept="image/png, image/gif, image/jpeg" required />
                </div>    
                <input className='submit-btn' type="submit" value="Submit" />
            </form>
        </div>
      )
}

export default ProductForm;