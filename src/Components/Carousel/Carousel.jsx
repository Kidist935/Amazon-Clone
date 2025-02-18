import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { image } from './img/data'
import { Carousel } from 'react-responsive-carousel'

import classes from "../Carousel/carousel.module.css"

function CarouselEffect() {
  return (
    <div>
     <Carousel autoPlay={true} infiniteLoop={true} showIndicators={false} showThumbs={false}>
      {
       image.map((ImageListLink, i) =>{
        return <img src={ImageListLink} alt="" key={i}/>
       })

      }

     </Carousel>
     <div className={classes.hero__img}>

     </div>
    </div>
  )
}

export default CarouselEffect