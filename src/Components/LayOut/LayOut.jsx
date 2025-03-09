import React from 'react'
import Header from '../Header/Header'
import Footer from '../../Components/Fotter/Footer'
function LayOut({children}) {
  return (
    <div>
     
      <Header />
       {children}
       <Footer/>
    </div>
  )
}

export default LayOut