import { HomePage } from './pages/HomePage'
import { Checkout } from './pages/CheckOut'
import { Orders } from './pages/Orders'
import { Tracking } from './pages/Tracking'
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
