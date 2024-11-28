import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/images/res-logo.png";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Cartmenu from "../cartmenu/cartmenu";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const cart  = useSelector(state=>state.cart);

  const toggleMenu = () => setIsMenuActive((prev) => !prev);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  return (
    <div className="kkkk">
      <nav className=" navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand text-center" href="/">
            <img
              src={logo}
              alt="Logo"
              className="d-block mx-auto"
              style={{ height: "50px", width: "auto" }}
            />
            <h5 className="d-block logo-name">Fresh Bites</h5>
          </a>

          

          {/* Desktop Navigation Links */}
          <div className={`collapse navbar-collapse`} id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" style={{paddingRight:"20px"}}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/food" className="nav-link">
                  Food
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link" style={{paddingLeft:"20px"}}>
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" style={{paddingLeft:"20px"}}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <div className="nav__right d-flex align-items-center gap-4">
              <span className="cart__icon"  onClick={toggleCart}>
                <i className="ri-shopping-basket-line" style={{cursor:"pointer"}}></i>
                {cart.length}
              </span>
              <span className="user">
                <Link to="/login"><i className="ri-user-line"></i></Link>
              </span>
              
              <button
                className="navbar-toggler"
                type="button"
                aria-expanded={isMenuActive}
                aria-label="Toggle navigation"
                onClick={toggleMenu}
              >
                <span className="mobile__menu">
                  <i className={isMenuActive ? "ri-close-line" : "ri-menu-line"}></i>
                </span>
              </button>
          </div>    
         </div>  
        </div>
      </nav>
      {isCartOpen && <Cartmenu toggleCart={toggleCart} />}
      {/* Mobile Sidebar */}
      <div className={`sidebar ${isMenuActive ? "active" : ""}`}>
        <div className="sidebar-content">
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/food" onClick={toggleMenu}>Food</Link>
            </li>
            <li>
              <Link to="/cart" onClick={toggleMenu}>Cart</Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
