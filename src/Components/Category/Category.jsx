import React from "react";
import { categoryInfos } from "./categoryFullinfos.js";
import CategoryCard from "./CategoryCard.jsx";
import classes from "./category.module.css";

function Category() {
  return (
    <section className={classes.category__container}>
      {categoryInfos.map((infos, i) => (
        // data is contains info about single category name,title and image
        <CategoryCard data={infos} key={i}/>
      ))
      }
    </section>
  );
}

export default Category;
