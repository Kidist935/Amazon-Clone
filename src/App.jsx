import { useContext, useEffect, useState } from 'react'
import './App.css'
import Routeing from "./Router.jsx"
import { DataContext } from './Components/DataProvider/DataProvider.jsx'
import { Type } from './Utility/action.type.js'
import { auth } from './Utility/firebase.js'

function App() {
  
  const [{user}, dispatch]= useContext(DataContext)
  useEffect(()=>{
   auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      dispatch({
       type: Type.SET_USER,
       user: authUser,

      })
    }else{

      dispatch({
        type: Type.SET_USER,
        user: null,
 
       })
    }
   })



  },[])

  return (
    <>
      <Routeing/>
      
    </>
  )
}

export default App
