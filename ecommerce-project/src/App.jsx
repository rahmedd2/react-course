import { HomePage } from './pages/HomePage/HomePage'
import { Checkout } from './pages/Checkout/CheckOut'
import { Orders } from './pages/Orders/Orders'
import { Tracking } from './pages/Tracking/Tracking'
import './App.css'
import { Routes, Route } from 'react-router'

function App() {
  

  return (
    <>
      <Routes>
        <Route index /*the main page, u can also use:  path="/" */ element={<HomePage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders/>} />
          <Route path="/tracking" element={<Tracking/>} />
      </Routes>
    </>
  )
}

export default App
