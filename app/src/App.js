import './App.css';
import Home from './home/home'
import Food from './food/food'
import Cart from './cart/cart'
import Contact from './contact/contact'
import Login from './login/login'
import Signup from './signup/signup'
import Checkout from './checkout/checkout'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import {Provider} from "react-redux"
import Store from './store/Store';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import Description from './description/description';
function App() {
  return (
    <div>
        <Provider store={Store}>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="Food" element={<Food/>}/>
            <Route path="Cart" element={<Cart/>}/>
            <Route path="Contact" element={<Contact/>}/>
            <Route path="Login" element={<Login/>}/>
            <Route path="Register" element={<Signup/>}/>
            <Route path="Checkout" element={<Checkout/>}/>
            <Route path="Food/:id" element={<Description />}/>
          </Routes>
          <Footer/>   
        </Router>
        </Provider>
    </div>
  );
}
export default App;