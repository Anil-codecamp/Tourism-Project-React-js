import React from 'react'
import './home.scss';
import Popular from '../Popular/Popular';
import Offer from '../Offers/Offer';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Myshop from '../shop/Myshop';


const Home = () => {
  const optionsLocation = [
    { destination: "pokhara" },
    { destination: "Mustang" },
    { destination: "Manang" },
    { destination: "kathmandu" },
  ]

  const optionsWhen = [

    { month: "January" },
    { month: "February" },
    { month: "March" },
    { month: "April" },
    { month: "May" },
    { month: "June" },
    { month: "July" },
    { month: "August" },
    { month: "September" },
    { month: "October" },
    { month: "November" },
    { month: "December" },

  ]
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

          <div className="homeCard grid h-screen">
            <div className="locationDiv">
              <label htmlFor="location">Location</label>
              
              <select className='w-full p-2 bg-gray-300 rounded-md '>
                {
                  optionsLocation.map((option) => {
                    return (
                      <option value={option.destination}>
                        {option.destination}

                      </option>
                    )
                  })
                }
              </select>

            </div>

            <div className="distDiv">
              <label htmlFor="distance">When?</label>
              
              <select className='w-[250px] p-2 bg-gray-300 rounded-md'>
                {
                  optionsWhen.map((options) => {
                    return (
                      <option value={options.month}>
                        {options.month}

                      </option>
                    )
                  })
                }
              </select>

            </div>
            <div className="priceDiv">
              <label htmlFor="location">Price</label>
              <input type="text" className=' bg-gray-300' placeholder=' $500-$1500' readOnly />
            </div>

            <button className='btn'>Search</button>

          </div>

        </div>

      </section>
      


      <Popular />
      <Myshop />
      <Offer />
      <About />
      <Blog />



    </>
  )
}

export default Home
