import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./product.module.css"
import Loder from "../Loder/Loder";

function Product() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
 
    useEffect(() => { 
        setIsLoading(true)
        axios.get("https://fakestoreapi.com/products") 
        .then((res) => { 
            setProducts(res.data); 
            setIsLoading(false)
        }) 
        
        .catch((err) => { 
            console.log(err); 
            setIsLoading(false)
        }); 
    }, []); 

    
  return ( 
  
   <>
  
   {
    isLoading?(<Loder/>) : ( <section className={classes.products_container}>
        {products?.map((singleProduct) => { 
            return <ProductCard renderAdd={true} product={singleProduct} key={singleProduct.id} />; 
        })} 
        </section>)
   } 
   </>
    
  )
}

export default Product



 