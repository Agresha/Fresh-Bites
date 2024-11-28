import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../assets/images/res-logo.png'
import './footer.css'
function Footer(){
    return(
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className=" footer__logo text-start">
                                <img src={logo} alt="logo"/>
                                <h5>Fresh Bites</h5>
                                <p>Welcome to Fresh Bites, your ultimate destination for delicious and fresh online food ordering!</p>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <h5 className="footer__title">Delivery Time</h5>
                                <ul className="deliver__time-list list-group">
                                    <li className=" delivery__time-item border-0 ps-0 list-group-item">
                                        <span>Monday - Friday</span>
                                        <p>10:00am - 11:00pm</p>
                                    </li>
                                    <li className=" delivery__time-item border-0 ps-0 list-group-item">
                                        <span>Saturday - Sunday</span>
                                        <p>Full Day</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <h5 className="footer__title">Contact</h5>
                                <ul className="deliver__time-list list-group">
                                    <li className=" delivery__time-item border-0 ps-0 list-group-item">
                                        <span>Location: Sola, Ahmedabad</span>
                                    </li>
                                    <li className=" delivery__time-item border-0 ps-0 list-group-item">
                                        <span>Phone: 9765438290</span>
                                    </li>
                                    <li className=" delivery__time-item border-0 ps-0 list-group-item">
                                        <span>Email: freshbites@gmail.com</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <h5 className="footer__title">Newsletter</h5>
                                <p>Subscribe our newsletter</p>
                                <div className="newsletter">
                                    <input type="email" placeholder="Enter your email"/>
                                    <span><i className="ri-send-plane-line"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 row">
                            <div className="col-md-6 col-lg-6">
                                <p className="copyright__text">Copyright - 2024, website made by Agresha shah. All Rights Reserved.</p>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="social__links d-flex align-items-center gap-4 justify-content-end">
                                    <p className="m-0">Follow: </p>
                                    <span> <a href="#"><i className="ri-facebook-line"></i></a> </span>
                                    <span><a href="#"><i className="ri-github-line"></i></a></span>
                                    <span> <a href="#"><i className="ri-youtube-line"></i></a> </span>
                                    <span> <a href="#"><i className="ri-linkedin-line"></i></a> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
        </div>
    )
}
export default Footer