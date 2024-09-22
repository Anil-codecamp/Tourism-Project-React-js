import React from 'react'
import './offer.css';
import { MdKingBed,MdBathroom,MdWifi,MdAirportShuttle,MdLocationOn } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import './offer.scss';
import OfferApi from './OfferApi';


const Offer = () => {
  return (
    <>
    <section className='offer container section'>
      <div className="secContainer">
        <div className="secIntro">
          <h2 className='secTitle'>Special Offers</h2>
          <p>Special offers are only for you. let's enjoy the place and enjoy the view </p>
        </div>

        <div className="mainContent grid">
          {
            OfferApi.map(({image,location,price,off})=>{
              return(
                <div className="singleOffer">
            <div className="destImage">
              <img src={image} alt="Image" />
              <span className='discount'>{off} % off</span>
            </div>

            <div className="offerBody">
              <div className="price flex">
                <h4>{price}</h4>
                <span className='status'>For Rent</span>
              </div>

              <div className="amenities flex">
                <div className="singleAmenity flex">
                <MdKingBed className='icon' />
                <small>2 Beds</small>
                </div>

                <div className="singleAmenity flex">
                <MdBathroom  className='icon' />
                <small>1 Bath</small>
                </div>

                <div className="singleAmenity flex">
                <MdWifi className='icon' />
                <small>Wi-Fi</small>
                </div>

                <div className="singleAmenity flex">
                <MdAirportShuttle className='icon' />
                <small>Shuttle</small>
                </div>               
              </div>

              <div className="location flex">
              <MdLocationOn className='icon' />
              <small>{location}</small>
              </div>

              <button className='btn flex'>View Details
              <BsArrowRight className='icon'/>
              </button>
              

            </div>
          </div>
              )

            })
          }
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Offer
