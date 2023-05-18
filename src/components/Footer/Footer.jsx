import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item"> 
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quaerat eveniet tempore officiis odit culpa rerum esse doloribus illo molestias.</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quaerat eveniet tempore officiis odit culpa rerum esse doloribus illo molestias.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Om Store</span>
          <span className="copyright">&copy; Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" height="50%" style={{marginRight:'25px'}}/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="VISA" height="50%"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/UPI-Logo.png" alt="UPI" height="100%"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Mastercard_Contactless.png" alt="mastercard" height="100%"/>
        </div>
      </div>
    </div>
  )
}

export default Footer