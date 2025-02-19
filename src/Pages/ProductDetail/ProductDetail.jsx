import React, {useEffect, useState} from 'react'
import LayOut from "../../Components/LayOut/LayOut"
import classes from "./product.module.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../Components/Product/ProductCard'
import Loder from '../../Components/Loder/Loder'

function ProductDetail() {
  const {productId} = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
   axios.get(`${productUrl}/products/${productId}`)
   .then((res) => {
    setProduct(res.data)
    setIsLoading(false)
   }).catch((err) =>{
    console.log(err);
    setIsLoading(false)
   })

  }, [])
  

  return (
    <LayOut>
      {isLoading?(<Loder/>):(<ProductCard product={product} flex={true} renderDesc={true}/>)}
      
    </LayOut>
  )
}

export default ProductDetail