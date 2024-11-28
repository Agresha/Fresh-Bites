import React from "react";
import Common from "../food/comon";
// import Navbar from "../navbar/navbar";
// import Footer from "../footer/footer";
import './login.css'
import { Link } from 'react-router-dom';
function Login(){
    return(
        <div>
            <Common title="Login"/>
            <section className="mt-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="m-auto text-center col-sm-12 col-md-6 col-lg-6">
                        <div className="container form_decor">
                        <form className="form mb-5">
                            <div className="form__group">
                                <input type="email" placeholder="Email" required="" style={{backgroundColor:'#fde4e4'}}/>
                            </div><hr></hr><br></br>
                            <div className="form__group">
                                <input type="password" placeholder="Password" required="" style={{backgroundColor:'#fde4e4'}}/>
                            </div><hr></hr><br></br>
                            <button type="submit" className="addTOCart__btn">Login</button>
                        </form>
                        </div>
                        <Link to="/register" 
                            style={{textDecoration:'none',color:'black'}}>Don't have an account? Create an account</Link>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}
export default Login;