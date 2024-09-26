
import React from "react";
import Slider from "react-slick";
import "./carousel.scss"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageApi from "./ImageApi";
import { BsArrowRight } from "react-icons/bs";

function ImageCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
    
  };
  return (
   <>
   <div className="select">
    <h2>Select your activity</h2>
    <h1>Explore Activities</h1>

   </div>
    
    <div className="bg-stone-300">
    <div className="slider-container w-[90%] mx-auto" id="slider-boxes">
      <Slider {...settings} >
      {
              ImageApi.map(({id,image,name,location})=>{
                return(
                <div className="myDestination" id="yourDestination">
              <div className="destImage justify-evenly">
                <img src={image} alt="Image title" className="mx-auto" />

                <div className="overlayInfo">
                  <h3>{name}</h3>
                  <p>{location}</p>
                  
                  <BsArrowRight className='icon'/>
                </div>

              </div>

              <div className="destFooter">
                <div className="number">
                  {id}
                </div>

                <div className="destText flex">
                  <h6>{location}</h6>
                  
                </div>
              </div>
            </div>

              )})
            }
      </Slider>
    </div>
    </div>
    </>
  );
}
export default  ImageCarousel