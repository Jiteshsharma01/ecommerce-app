import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Footer from '../../Components/Footer/Footer';
import HomeCatagories from '../../Components/Category/HomeCatagories';
import Navbar from '../../Components/Navbar/Navbar';
import MainLayout from '../../Components/MainLayout/MainLayout';
import Modal from '../../Components/Modal/Modal';
import './Home.css'
import appleImg from '../../Assets/apple.jpeg';


const ProductForm = (props) => {
  const [state, setState] = useState({
    brand: "",
    category: "",
    description: "",
    discountPercentage: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const saveProduct = (event) => {
    event.preventDefault();
    console.log('jhvsjdvh', state);
  };

  // const saveProduct = () => {
    // navigate(`/product/${props.id}`, {state: props});
  // }

  return (
    <form
      method='POST'
      onsubmit={saveProduct}
      style={{
        background: 'rgba(19, 106, 213, 0.1)',
        border: '1px dashed #136AD5',
        borderRadius: '1em',
        padding: '1em',
        width: 'auto',
      }}
      >
        <label>Brand
          <input type="text" onChange={handleInputChange} value={state.brand} name="brand" id="brand" required />
        </label>
        <label>Category
          <input type="text" onChange={handleInputChange} value={state.category} name="category" id="category" required />
        </label>
        <label>Description
          <input type="text" onChange={handleInputChange} value={state.description} name="description" id="description" required />
        </label>
        <label>Discount Percentage
          <input type="text" onChange={handleInputChange} value={state.discountPercentage} name="discountPercentage" id="discountPercentage" required />
        </label>
        <input type="submit" value="Submit" />
    </form>
  )
}

const Home = () => {
  const navigate = useNavigate();
  const [productsList, setProductsList] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  async function createProduct() {
    let url = 'https://dummyjson.com/products/add';
    let options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'BMW Pencil',
      })
    };
    try {
      let res = await fetch(url, options);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }

  async function addProduct() {
    const productsData = await createProduct();
    setProductsList(productsData?.products)
    console.log('hhjsvd', productsList);
  }

  return (
    <div className='container'>
      {/* <Navbar/> */}
      {/* {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : ( */}
      <div className='container1'>
        <button className='add-product-btn' onClick={() => navigate(`/create-product`)}>Add Product</button>
        <h1 className='heading'>Products</h1>
        <MainLayout />
        {/* <Footer/> */}
      </div>
      {/* )} */}
    </div>
  );
}

export default Home;