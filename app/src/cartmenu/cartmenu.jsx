import React from "react";
import "./cartmenu.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment,remove} from "../store/Cartslice";

const Cartmenu = ({ toggleCart }) => {
    const cart  = useSelector(state=>state.cart);
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };
    let dispatch = useDispatch()
    let Dec=(pro)=>{
        dispatch(decrement(pro))
    }
    let Inc=(pro)=>{
        dispatch(increment(pro))
    }
    let Rmv=(pro)=>{
      dispatch(remove(pro))
    }
    return(
        <div class="cart__container">
            <ul class="cart list-group">
                <div class="cart__close">
                    <span><i class="ri-close-fill" onClick={toggleCart}></i></span>
                </div>
                <div class="cart__item-list">
                    {cart.length > 0 ? (
                        cart.map((item)=>(
                            <li class="border-0 cart__item list-group-item">
                                <div class="cart__item-info d-flex gap-2">
                                    <img src={item.image01} alt="product-img"/>
                                    <div class="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
                                        <div>
                                            <h6 class="cart__product-title">{item.title}</h6>
                                            <p class=" d-flex align-items-center gap-5 cart__product-price">{item.quantity}x<span>{item.quantity*item.price}</span></p>
                                            <div class=" d-flex align-items-center justify-content-between increase__decrease-btn">
                                                <span class="increase__btn"><i class="ri-add-line" onClick={()=>Inc(item)}></i></span>
                                                <span class="quantity">{item.quantity}</span>
                                                <span class="decrease__btn"><i class="ri-subtract-line" onClick={()=>Dec(item)}></i></span>
                                            </div>
                                        </div>
                                        <span class="delete__btn"><i class="ri-close-line" onClick={()=>Rmv(item)}></i></span>
                                    </div>
                                </div>
                            </li> ))):(<p style={{paddingLeft:"80px",fontWeight:"bolder",fontSize:"20px"}}>No item added to the cart</p>)
                        
                    }
                    
                </div>
                <div class="cart__bottom d-flex align-items-center justify-content-between">
                    <h6>Subtotal : ₹{calculateTotal()}</h6>
                    <button><Link to="/checkout" style={{textDecoration:"none",color:"#212245"}}>Checkout</Link></button>
                </div>
            </ul>
        </div>
    )
}
export default Cartmenu;