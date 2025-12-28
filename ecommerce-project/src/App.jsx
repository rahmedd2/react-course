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
    useEffect(()=>{
      axios.get("/api/cart-items?expand=product")
      .then((response)=>{
        setCart(response.data);
      })
    },[]);
  

  return (
    <>
      <Routes>
        <Route index /*the main page, u can also use:  path="/" */ element={<HomePage cart={cart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
        <Route path="/orders" element={<Orders cart={cart} />} />
          <Route path="/tracking" element={<Tracking/>} />
      </Routes>
    </>
  )
}

export default App
