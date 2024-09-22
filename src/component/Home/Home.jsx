import React from 'react'
import './home.css';
import './home.scss';
import Popular from '../Popular/Popular';
import Offer from '../Offers/Offer';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Myshop from '../shop/Myshop';


const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='secContainer container grid'>
          <div className='homeText'>
             <h1 className='title'>
              Plan your Trip with <span>Ghumfir</span>
            </h1>
            <p className='subTitle'>
              Travel to your favourite city with respectful of the environment!
            </p>
            <button className='btn'>
              <a href="#">Explore Now</a>
            </button>
          </div>
          
          <div className="homeCard grid">
            <div className="locationDiv">
              <label htmlFor="location">Location</label>
              <input type="text"placeholder=' Dream Destination' />
            </div>

            <div className="distDiv">
              <label htmlFor="distance">Distance</label>
              <input type="text"placeholder=' 11/meters' />
            </div>
            <div className="priceDiv">
              <label htmlFor="location">Price</label>
              <input type="text"placeholder=' $140-$500' />
            </div>
            
            <button className='btn'>Search</button>

          </div>
  
        </div>

      </section>
      <Popular/>  
      <Myshop/>   
      <Offer/>
      <About/>
      <Blog/>
      
      

    </>
  )
}

export default Home
