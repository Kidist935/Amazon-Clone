import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Carousel from './Components/carousel/Carousel'
import Category from './Components/Category/Category'
import Product from './Components/Product/Product'

function App() {
  

  return (
    <>
      <Header />
      <Carousel />
      <Category />
      <Product />
    </>
  )
}

export default App
