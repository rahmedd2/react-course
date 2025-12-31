import { HomePage } from './pages/HomePage/HomePage'
import { Checkout } from './pages/Checkout/CheckOut'
import { Orders } from './pages/Orders/Orders'
import { Tracking } from './pages/Tracking/Tracking'
import './App.css'
import { Routes, Route } from 'react-router'
import axios from "axios";
import {useState, useEffect} from "react"

function App() {
    const [cart, setCart] = useState([]);
    //using axios to fetch data

    //make a promise using async await
     const loadCartData = async ()=>{
        const response = await axios.get("/api/cart-items?expand=product")
        setCart(response.data);
      }
    useEffect(()=>{
      loadCartData();
    },[]);
  

  return (
    <>
      <Routes>
        <Route index /*the main page, u can also use:  path="/" */ element={<HomePage cart={cart} loadCartData = {loadCartData} />} />
        <Route path="/checkout" element={<Checkout cart={cart} loadCartData= {loadCartData} />} />
        <Route path="/orders" element={<Orders cart={cart} loadCartData= {loadCartData} />} />
          <Route path="/tracking" element={<Tracking cart={cart}/>} />
      </Routes>
    </>
  )
}

export default App
