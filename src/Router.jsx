import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from "./Pages/Landing/Landing"
import SignIn from "./Pages/Auth/Sighup"
import Payment from "./Pages/Payment/Payment"
import Orders from "./Pages/Orders/Orders"
import Cart from "./Pages/Cart/Cart"
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import Result from "./Pages/Result/Result"

function Routeing() {
  return (
   <Router>

      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/auth" element={< SignIn/>}/>
        <Route path="/payments" element={<Payment/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product" element={<ProductDetail/>}/>
        <Route path="/result" element={<Result/>}/>


      </Routes>

   </Router>


  )
}

export default Routeing