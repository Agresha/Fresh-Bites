import React from "react";
import { Link } from "react-router-dom";
import Common from "../food/comon";
// import Navbar from "../navbar/navbar";
// import Footer from "../footer/footer";
function signup(){
    return(
        <div>
            <Common title="Signup"/>
            <section className="mt-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="m-auto text-center col-sm-12 col-md-6 col-lg-6">
                        <div className="container form_decor">
                        <form className="form mb-5">
                            <div className="form__group">
                                <input type="text" placeholder="Full name" required="" style={{backgroundColor:'#fde4e4'}}/>
                            </div><hr></hr><br></br>
                            <div className="form__group">
                                <input type="email" placeholder="Email" required="" style={{backgroundColor:'#fde4e4'}}/>
                            </div><hr></hr><br></br>
                            <div className="form__group">
                                <input type="password" placeholder="Password" required="" style={{backgroundColor:'#fde4e4'}}/>
                            </div><hr></hr><br></br>
                            <button type="submit" className="addTOCart__btn">Login</button>
                        </form>
                        </div>
                        <Link to="/login" 
                            style={{textDecoration:'none',color:'black'}}>Already have an account? Login</Link>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}
export default signup