import React from 'react'
import './popular.scss';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import PopularApi from './PopularApi';
import { NavLink} from 'react-router-dom';




const Popular = () => {
 


  return (
    <>
      <section className='popular section container'>
        <div className="secContainer">
          <div className="secHeader flex">
            <div className="textDiv">
              <h2 className="secTitle">
                Popular Destination
              </h2>
              <p>Best popular Destination sites all over the world,Let's visit here and explore</p>
            </div>

            {/* iconsn div */}
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

      </section>
    </>
  )
}

export default Popular


function PopularDestination({product}){
  const{id,name,image,location}=product

  
  
  return(
    <div className="singleDestination">
     
                   <NavLink to={`/destination/${id}`}>  <div className="destImage" >
                      <img src={image} alt="Image title" />

                     <div className="overlayInfo">
                        <h3>{name}</h3>
                        <p>{location}</p>
                        
                        <BsArrowRight className='icon' />
                      </div>

                    </div>
                    </NavLink>


                    <div className="destFooter">
                      <div className="number">
                        {id}
                      </div>

                      <div className="destText flex">
                        <h6>{location}</h6>

                      </div>

                      <div className='enquire'>
                        <NavLink to="/contact"><button>Enquire</button></NavLink>
                        </div>


                    </div>
                  </div>

  )
}
