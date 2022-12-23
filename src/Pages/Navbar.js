 import React from "react"
 import '../Pages/Styles/Navbar.css'
 import { BrowserRouter, Route, Link } from "react-router-dom";
 import cart from "../Assets/cart.svg"
import search from "../Assets/search.svg"
import account from "../Assets/account.svg"
import logoimage from "../Assets/Aearfon.svg"


 export default function Navbar(){ 



return(
   
  <div className="navbar">
    <div className="brandlogo">
        <img src={logoimage} alt="" className="logoimg"></img>
    </div>
   <div className="sections">
   <ul>
        <li>
          <Link to="/" className='LINK'>HOME</Link>
        </li>
        <li>
          <Link to="/shop" className='LINK'>SHOP</Link>
        </li>
        <li>
          <Link to="/about" className='LINK'>ABOUT</Link>
        </li>
         
        <li>
          <Link to="/contact" className='LINK'>CONTACT</Link>
        </li>
      </ul>
</div>
 <div className="logos">

  <ul >


        <li> <img className="search-icon" src= {search}></img>
           </li>
        <li>
        <Link to="/cart" className='LINK'>
           <img className="cart-icon" src= {cart} ></img>
          </Link>

        </li>
        <li> 
          <img className="account-icon" src= {account} ></img> 
           </li>




  </ul>

 </div>
</div>
 
 
);
 


 
















 }