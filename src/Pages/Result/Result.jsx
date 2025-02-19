import React, { useState, useEffect } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard"
import classes from "./result.module.css"
import Loder from "../../Components/Loder/Loder";


function Result() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const { categoryName } = useParams();
  useEffect(() => {
    
    axios.get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
      });
  }, []);

  return (
    <LayOut>
      <section>
        
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}> Category / {categoryName} </p>
        <hr/>
        {isLoading? (<Loder/>) : (<div className={classes.products_container}>
          
          {results?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
        

      </section>
    </LayOut>
  );
}

export default Result;
