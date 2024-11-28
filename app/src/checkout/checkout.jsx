import React from "react";
import Common from "../food/comon";
import './checkout.css'
import { useSelector } from "react-redux";
function Checkout(){
    const cart  = useSelector(state=>state.cart);
    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    return(
        <div>
            <Common title="Check out"/>
            <section className="mt-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-8">
                            <h6 className="mb-4" style={{fontWeight:'bolder',fontSize:'20px'}}>Shipping Address</h6>
                            <form className="checkout__form">
                                <div className="form__group">
                                    <input type="text" placeholder="Enter your name" required=""/>
                                </div><hr></hr>
                                <div className="form__group">
                                    <input type="email" placeholder="Enter your email" required=""/>
                                </div><hr></hr>
                                <div className="form__group">
                                    <input type="number" placeholder="Phone number" required=""/>
                                </div><hr></hr>
                                <div className="form__group">
                                    <input type="text" placeholder="Country" required=""/>
                                </div><hr></hr>
                                <div className="form__group">
                                    <input type="text" placeholder="City" required=""/>
                                </div><hr></hr>
                                <div className="form__group">
                                    <input type="number" placeholder="Postal code" required=""/>
                                </div><hr></hr>
                                <button type="submit" className="addTOCart__btn">Payment</button>
                            </form>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="checkout__bill"><br></br>
                                <h6 className="d-flex align-items-center justify-content-between">Subtotal: 
                                <span className="cart__subtotal">₹{subtotal}</span></h6>
                                <h6 className="d-flex align-items-center justify-content-between">Shipping: 
                                    <span>₹30</span></h6><hr></hr>
                                <div className="checkout__total">
                                    <h5 className="d-flex align-items-center justify-content-between">Total: 
                                        <span>₹{subtotal+30}</span>
                                    </h5>
                                </div><br></br>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default  Checkout