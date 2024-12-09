import React from 'react'
import './popular.scss';
import { BsArrowRight } from "react-icons/bs";
import PopularApi from './PopularApi';
import { NavLink } from 'react-router-dom';




const Popular = () => {



  return (
    <>
      {/* <section className='popular section container'>
        <div className="secContainer">
          <div className="secHeader flex">
            <div className="textDiv">
              <h2 className="secTitle">
                Popular Destination
              </h2>
              <p>Best popular Destination sites all over the world,Let's visit here and explore</p>
            </div>

           // iconsn div
            <div className="iconsDiv flex">
              <BsArrowLeft className='icon leftIcon' />
              <BsArrowRight className="icon" />

            </div>

          </div>

          <div className="mainContent grid">
          {
            
              PopularApi.map((product,id) => {
                // const destination=getSingleDestination(product.title)
                // console.log(destination);
                
                return(
                
                <PopularDestination product={product} key={id} />
                )
              })
            }
    
            


          </div>


        </div>

      </section>  */}

      <div className='flex mt-60 max-w-[1320px] mx-auto justify-center items-center'>
        <div className='text-center'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl'>Popular Destination</h1>
          <p className='text-xs sm:text-sm md:text-base lg:text-lg px-9 mt-3 text-gray-600'>Best popular Destination sites all over the world,Let's visit here and explore</p>
        </div>

      </div>
      <div className="grid gap-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-8 mt-5">
        {

          PopularApi.map((product, id) => {
            // const destination=getSingleDestination(product.title)
            // console.log(destination);

            return (

              <PopularDestination product={product} key={id} />
            )
          })
        }




      </div>

    </>
  )
}

export default Popular


function PopularDestination({ product }) {
  const { id, name, image, location } = product



  return (
    <div className="shadow-lg rounded-md overflow-hidden">

      <NavLink to={`/destination/${id}`}>  
      <div className="h-[200px] w-[100%] gap-5 overflow-hidden" >
        <img src={image} className='h-[100%] w-[100%] object-cover gap-4' alt="Image title" />


      </div>
      </NavLink>


      <div className="px-3 grid grid-cols mt-3 sm:flex justify-between py-4 ">
        <div>
          <p className='text-sm sm:text-xl font-medium'>{id}</p>
          <p className='text-gray-600 text-xl'>{location}</p>
        </div>

        <div className='text-xl sm:text-lg bg-orange-500 px-2 sm:px-4 py-1 text-white font-medium rounded-sm mt-4 sm:mt-0'>
          <NavLink to="/contact"><button className='hover:bg-orange-500'>Enquire</button></NavLink>
        </div>


      </div>
    </div>

  )
}
