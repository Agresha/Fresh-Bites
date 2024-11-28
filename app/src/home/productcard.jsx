import React from "react";
import './home.css'
import './productcard.css'
import { Link } from "react-router-dom";
import { add } from "../store/Cartslice";
import { useDispatch } from "react-redux";
function ProductCard({ product }){
  let dispatch = useDispatch();
  let addToCart=(product)=>{
    dispatch(add(product));
  }
  return (
    <div className="mt-5 col-6 col-sm-6 col-md-4 col-lg-3">
      <div className="product__item">
        <div className="product__img">
          <img src={product.image01} alt={product.title} className="w-50" />
        </div>
        <div className="product__content">
          <div className="cart4">
            <h5>
            <Link to={`/food/${product.id}`}
                style={{
                  textDecoration: "none",
                  padding: "10px",
                  fontSize: "15px",
                  color:"#212245",
                }}
              >{product.title}</Link>
            </h5>
          </div>
          <div className="Cart1 Cart2">
            <div className="cart3">
              <p className="product__price">₹{product.price}</p>
            </div>
            <div>
              <button className="addTOCart__btn" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
