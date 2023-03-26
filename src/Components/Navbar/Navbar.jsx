import React from 'react';
import './Navbar.css'
import logo from '../../Assets/logo.png';
import { useEffect, useState } from "react";
import appLogo from '../../Assets/app-logo.png';

const Navbar = () => {
  const [cartquantity, setcartquantity] = useState(0);

  return (
    <div className="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>
      <a href='/' className='logo-box'>
        <img src={appLogo} alt='logo' className='logo' />
      </a>
      <ul className='menu__box'>
        <img src={appLogo} alt='logo' className='logo-img' />
        <li><a className='menu__item' href='#Home'>Home</a></li>
        <li><a className='menu__item' href='#About'>About</a></li>
        <li><a className='menu__item' href='#Team'>Team</a></li>
        <li><a className='menu__item' href='#Contact'>Contact Us</a></li>
        <li>
          <a href='#Cart' className='menu__item'>
            Cart
            <svg xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <span className='qty'>{cartquantity}</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;