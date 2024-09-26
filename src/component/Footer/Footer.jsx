import React from 'react'

import './footer.scss';
import { MdModeOfTravel } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";




const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="secContainer grid">
          <div className="logoDiv">
            <div className="footerLogo">
              <a href="#" className='logo flex'>
                <h1><MdModeOfTravel className="icon" />
                  ghumfir</h1>
              </a>
            </div>

            
            <div className="socials flex">
              
              <FaFacebook className="icon" />
              <FaTwitter className='icon' />
              <FaInstagram className="icon" />
              <FaDiscord className="icon" />
            </div>

            <div className="footerLinks">
            <span className="linkTitle">
                Information
              </span>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Explore</a>
              </li>
              <li>
                <a href="">Travel</a>
              </li>              
              <li>
                <a href="">Blog</a>
              </li>

            </div>


            <div className="footerLinks">
            <span className="linkTitle">
                Contact Us
              </span>

              <span className='phone'>9800000000</span>
              <span className='email'>anilchaudhari9848@gmail.com</span>
              

            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
