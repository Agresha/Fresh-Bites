import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Common from "../food/comon";
import './description.css';
import { useDispatch } from "react-redux";
import products from "../assets/fake-data/products";
import { add } from "../store/Cartslice";
import ProductCard from "../home/productcard";
function Description() {
    const [activeTab, setActiveTab] = useState("description");
    const { id } = useParams();
    const dispatch = useDispatch();
    let foodDetail = products.find((item) => item.id === id);
    let Filter = products.find((item)=>item.category===foodDetail.category)
    console.log(Filter)
    const addToCart = (product) => {
        dispatch(add(product));
    };

    return (
        <div>
            <Common title={`${foodDetail.title}`} />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-2">
                    <div className="product__images ">
                            <div className="img__item mb-3">
                                <img src={foodDetail.image01} alt="" className="w-50"/>
                            </div>
                            <div className="img__item mb-3">
                                <img src={foodDetail.image02} alt="" className="w-50"/>
                            </div>
                            <div className="img__item">
                                <img src={foodDetail.image03} alt="" className="w-50"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="product__main-img">
                            <img src={foodDetail.image01} alt="" className="w-100" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="single__product-content">
                            <h2 className="product__title mb-3" style={{ fontWeight: "bolder" }}>
                                {foodDetail.title}
                            </h2>
                            <p className="product__price">Price: <span>₹{foodDetail.price}</span></p>
                            <br />
                            <p className="category mb-5">Category: <span>{foodDetail.category}</span></p>
                            <button className="addTOCart__btn" onClick={() => addToCart(foodDetail)}>Add to Cart</button>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="tabs d-flex align-items-center gap-5 py-3">
                        <button
                            onClick={() => setActiveTab("description")}
                            style={{
                                fontWeight:"bolder",
                                border: "none",
                                backgroundColor: "white"
                            }}>Description</button>
                        <button
                            onClick={() => setActiveTab("review")}
                            style={{
                                fontWeight:"bolder",
                                border: "none",
                                backgroundColor:"white",
                            }}>Review</button>
                        </div><hr />
                        {activeTab === "description" ? (
                            <div className="description">
                                <p>{foodDetail.desc}</p>
                            </div>) : (
                            <div className="tab__form mb-3">
                                <form className="form">
                                    <div className="form__group">
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            required
                                            style={{ backgroundColor: "#fde4e4" }}
                                        />
                                    </div>
                                    <hr />
                                    <div className="form__group">
                                        <input
                                            type="text"
                                            placeholder="Enter your email"
                                            required
                                            style={{ backgroundColor: "#fde4e4" }}
                                        />
                                    </div>
                                    <hr />
                                    <div className="form__group">
                                        <textarea
                                            rows="5"
                                            type="text"
                                            placeholder="Write your review"
                                            required
                                            style={{ backgroundColor: "#fde4e4", border: "none" }}
                                        ></textarea>
                                    </div>
                                    <hr />
                                    <button type="submit" className="addTOCart__btn">
                                        Submit
                                    </button>
                                </form>
                                </div>)}
                        <div className="mb-3 mt-5 col-lg-12">
                            <h2 className="related__Product-title">You might also like</h2>
                        </div>
                        <div className="row mb-5">
                        {products
                                .filter((product) => product.category === Filter.category)
                                .map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Description;
