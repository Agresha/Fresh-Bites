import React from "react";
import { Link } from "react-router-dom";
import Common from "../food/comon";
import './cart.css'
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/Cartslice";
function Cart(){
    let cart = useSelector(state=>state.cart)
    let dispatch = useDispatch()
    let removeFromCart=(product)=>{
        dispatch(remove(product))
    }
    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    return(
        <div>
            <section>
                <Common title="Your Cart"/>
            </section>
            <section>
            <div className="container mt-5 mb-5">
                <div className="row text-center">
                    <div className="col-lg-12">
                    {cart.length === 0 ? (<p className="text-start cart-empty">Your cart is empty.</p>):(
                        <>
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <tr key={item.id}>
                                    <td>
                                        <img
                                        src={item.image01}
                                        alt={item.title}
                                        style={{ width: "50px" }}
                                        />
                                    </td>
                                    <td>{item.title}</td>
                                    <td>₹{item.price.toFixed(2)}</td>
                                    <td>
                                        <span>{item.quantity}x</span>
                                    </td>
                                    <td>
                                        <i className="ri-delete-bin-line" onClick={() => removeFromCart(item)}></i>
                                    </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </> 
                     )}
                     <div className="mt-4">
                        <h6 className="cart-prize text-start">Subtotal: 
                             ₹<span className="cart__subtotal">{subtotal.toFixed(2)}</span> 
                             </h6>
                        <p className="cart-text text-start">Taxes and shipping will calculate at checkout</p>
                        <div className="cart__page-btn text-start">
                            <button className="addTOCart__btn me-4"><Link to="/food">Continue Shopping</Link></button>
                            <button className="addTOCart__btn"><Link to="/checkout">Proceed to checkout</Link></button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </section> 
        </div>
    )
}
export default Cart
