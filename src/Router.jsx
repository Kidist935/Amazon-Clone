import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from "./Pages/Landing/Landing"
import Auth from "./Pages/Auth/Auth"
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
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/payments" element={<Payment/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/category/:categoryName" element={<Result/>}/>
        <Route path="/products/:productId" element={<ProductDetail/>}/>
        <Route path="/cart" element={<Cart/>}/>
        
        


      </Routes>

   </Router>


  )
}

export default Routeing