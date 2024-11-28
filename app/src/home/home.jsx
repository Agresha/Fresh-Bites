import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import img from '../assets/images/hero.png'
import './home.css'
import img1 from '../assets/images/category-01.png'
import img2 from '../assets/images/category-02.png'
import img3 from '../assets/images/category-03.png'
import img4 from '../assets/images/category-04.png'
import img5 from '../assets/images/service-01.png'
import img6 from '../assets/images/service-02.png'
import img7 from '../assets/images/service-03.png'
import img8 from '../assets/images/hamburger.png'
import img9 from '../assets/images/pizza.png'
import img10 from '../assets/images/fried-potatoes.png'
import img11 from '../assets/images/bread.png'
import location from '../assets/images/location.png'
import network from '../assets/images/network.png'
import products from '../assets/fake-data/products'
import ProductCard from "./productcard"
function Home(){
    const [activeCategory, setActiveCategory] = useState("All")
    const [filteredProducts, setFilteredProducts] = useState(products);
    useEffect(() => {
        if (activeCategory === "All") {
          setFilteredProducts(products);
        } else {
          setFilteredProducts(products.filter((product) => product.category === activeCategory));
        }
      }, [activeCategory]);
    
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };
    return(
        <div className="w-100">
            <section className="mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 collg-6">
                        <div className="hero__content">
                            <h5 className="mb-3">Easy way to make an order</h5>
                            <h1 className="mb-4 hero__title">
                                <span>HUNGRY?</span> just wait
                                <br></br>
                                food at <span>your door</span>
                            </h1>
                            <p>Welcome to Fresh Bites, your ultimate destination for delicious and fresh online food ordering!</p>
                            <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                                <button className="order__btn d-flex align-items-center justify-content-between">
                                    order now
                                    <i className="ri-arrow-right-s-line"
                                        style={{
                                            color: "white",
                                        }}                                    
                                    ></i>
                                </button>
                                <button className="all__foods-btn"><Link to="/food"
                                    style={{
                                    textDecoration: "none",
                                    padding: "10px",
                                    fontSize: "18px",
                                    color: "#df2020",
                                    }}
                                >see all food</Link></button>
                            </div>
                            <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                                <p className=" d-flex align-items-center gap-2 ">
                                    <span className="shipping__icon">
                                        <i className="ri-car-line"></i>
                                    </span> No shipping charge
                                </p>
                                <p className=" d-flex align-items-center gap-2 ">
                                    <span className="shipping__icon">
                                        <i className="ri-shield-check-line"></i>
                                    </span> 100% secure checkout
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-6">
                        <img src={img} alt="Logo" className="img-fluid"/>
                    </div>
                </div>
            </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row">
                         <div className="mb-4 col-6 col-sm-6 col-md-4 col-lg-3">
                            <div className="category__item d-flex align-items-center gap-3">
                                <div className="category__img">
                                    <img src={img1} alt="img1"/>
                                </div>
                                <h6>Fastfood</h6>
                            </div>
                        </div>
                        <div className="mb-4 col-6 col-sm-6 col-md-4 col-lg-3">
                            <div className="category__item d-flex align-items-center gap-3">
                                <div className="category__img">
                                    <img src={img2} alt="img1"/>
                                </div>
                                <h6>Pizza</h6>
                            </div>
                        </div>
                        <div className="mb-4 col-6 col-sm-6 col-md-4 col-lg-3">
                            <div className="category__item d-flex align-items-center gap-3">
                                <div className="category__img">
                                    <img src={img3} alt="img1"/>
                                </div>
                                <h6>Asian Food</h6>
                            </div>
                        </div>
                        <div className="mb-4 col-6 col-sm-6 col-md-4 col-lg-3">
                            <div className="category__item d-flex align-items-center gap-3">
                                <div className="category__img">
                                    <img src={img4} alt="img1"/>
                                </div>
                                <h6>Cold Drinks</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-5">
                <div className="container">
                    <div className="row">
                        <div className="text-center col-lg-12">
                            <h5 className="feature__subtitle mb-4">What we serve</h5>
                            <h2 className="feature__title">Just sit back at home</h2>
                            <h2 className="feature__title">we will  <span>take care</span></h2>
                            <p className="mb-1 mt-4 feature__text">At Fresh Bites, we serve a delectable array of dishes crafted with care and made with the freshest ingredients.</p>
                            <p className="feature__text">From wholesome salads to savory entrees and delightful desserts, there's something to satisfy every craving. </p>
                        </div>
                        <div className="mt-5 col-lg-4">
                            <div className="feature__item text-center px-5 py-3">
                                <img src={img5} alt=""/>
                            </div>
                            <h5 className=" fw-bold mb-3 text-center text-dark">Quick Delivery</h5>
                            <p className="text-center">Experience lightning-fast delivery with Fresh Bites, ensuring your meal arrives swiftly to your doorstep.</p>
                        </div>
                        <div className="mt-5 col-lg-4">
                            <div className="feature__item text-center px-5 py-3">
                                <img src={img6} alt=""/>
                            </div>
                            <h5 className=" fw-bold mb-3 text-center text-dark">Super Dine In</h5>
                            <p className="text-center">Experience the ultimate dining convenience with Super Dine In, where delicious meals are just a click away.</p>
                        </div>
                        <div className="mt-5 col-lg-4">
                            <div className="feature__item text-center px-5 py-3">
                                <img src={img7} alt=""/>
                            </div>
                            <h5 className=" fw-bold mb-3 text-center text-dark">Easy Pick Up</h5>
                            <p className="text-center">Enjoy the convenience of easy pick-up options, making your Fresh Bites experience even more seamless.</p>
                        </div>
                    </div>
                </div>        
            </section>
            <section className="food-pop mt-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="text-center col-lg-12 food__text"><h2>Popular Foods</h2></div>
                        <div className="col-lg-12">
                        <div className="food__category">
                        <button
                        className={`all__btn ${activeCategory === "All" ? "foodBtnActive" : ""}`}
                        onClick={() => handleCategoryClick("All")}
                        >
                            All
                        </button>
                        <button
                        className={`d-flex align-items-center gap-2 ${activeCategory === "Burger" ? "foodBtnActive" : ""}`}
                        onClick={() => handleCategoryClick("Burger")}
                        >
                            <img src={img8} alt="" />
                            Burger
                        </button>
                        <button
                        className={`d-flex align-items-center gap-2 ${activeCategory === "Pizza" ? "foodBtnActive" : ""}`}
                        onClick={() => handleCategoryClick("Pizza")}
                        >
                            <img src={img9} alt="" />
                            Pizza
                        </button>
                        <button
                        className={`d-flex align-items-center gap-2 ${activeCategory === "Bread" ? "foodBtnActive" : ""}`}
                        onClick={() => handleCategoryClick("Bread")}
                        >
                            <img src={img11} alt="" />
                            Snacks
                        </button>
                        <button
                        className={`d-flex align-items-center gap-2 ${activeCategory === "Drinks" ? "foodBtnActive" : ""}`}
                        onClick={() => handleCategoryClick("Drinks")}
                        >
                            <img src={img10} alt="" />
                            Drinks
                        </button>
                    </div>
                    <div className="row">
                        {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    </div>  
                    </div>  
                </div>
            </section>
            <section className="why__choose-us mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <img src={location} alt="why-fresh-bites" className="w-100"/>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="why__fresh-bites">
                                <h2 className="fresh-bites-title mb-4">Why <span>Fresh Bites?</span></h2>
                                <p className="fresh__bites-desc">At Fresh Bites, we're not just a food service — we're a culinary journey. Discover the unparalleled freshness and taste that sets us apart. From farm-fresh ingredients to expertly crafted dishes, every bite is an experience worth savoring.</p>
                                <ul className="mt-4 list-group">
                                    <li className="border-0 ps-0 list-group-item">
                                        <p className=" choose__us-title d-flex align-items-center gap-2 ">
                                            <i className="ri-checkbox-circle-line"></i> Fresh and tasty foods</p>
                                        <p className="choose__us-desc">Indulge in a world of fresh and tasty foods meticulously prepared by our talented chefs. Each dish is a masterpiece of flavor, showcasing the finest ingredients and culinary expertise.</p>
                                    </li>
                                    <li className="border-0 ps-0 list-group-item">
                                        <p className="choose__us-title d-flex align-items-center gap-2 ">
                                            <i className="ri-checkbox-circle-line"></i> Quality support</p>
                                        <p className="choose__us-desc">At Fresh Bites, we pride ourselves on delivering not only exceptional food but also outstanding customer support.</p>
                                    </li>
                                    <li className="border-0 ps-0 list-group-item">
                                        <p className="choose__us-title d-flex align-items-center gap-2 ">
                                            <i className="ri-checkbox-circle-line"></i>Order from any location </p>
                                        <p className="choose__us-desc">With our convenient platform, delicious food is always just a tap away.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-0 mt-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="text-center mb-7 col-lg-12 hot__pizza"><h2>Hot Pizza</h2></div>
                            {products
                                .filter((product) => product.category === "Pizza")
                                .slice(0, 4)
                                .map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                    </div>
                </div>
            </section>
            <section className="mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <div className="testimonial ">
                                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                                <h2 className="testimonial__title mb-4">What our <span>customers</span> are saying</h2>
                                <p className="testimonial__desc">Fresh Bites truly lives up to its name! Every bite bursts with freshness and flavor. From the crisp salads to the hearty sandwiches, each dish is a delightful journey for the taste buds.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <img src={network} alt="testimonial-img" className="w-100"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home