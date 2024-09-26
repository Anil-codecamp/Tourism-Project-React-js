import React, { useEffect, useState } from 'react'
import './navbar.css';
import './navbar.scss';


import { MdOutlineModeOfTravel } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import Login from '../Login/Login';
import Booking from '../Book/Booking';
import { BsCart } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
// import { getCartTotal } from '../../features/cartSlice';
import {getCartTotal} from '../../features/cartslice'



const Navbar = () => {

  //to show or hide navbar
  const [active, setActive] = useState("navBar");
  const [modaloverlay, setModalOverlay] = useState(false);
  const [modaloverlay1, setModalOverlay1] = useState(false);

  const {cart,totalQuantity}=useSelector((state)=>state.allCart)
 const dispatch=useDispatch()

 useEffect(()=>{
  dispatch(getCartTotal())
 },[cart])
 

  const showNav = () => {
    setActive('navBar activeNavbar')
  }
  const removeNav = () => {
    setActive('navBar ')
  }

  //code to add background to the navbar
  const [transparent, setTransparent] = useState('header');
  const addBg = () => {
    if (window.scrollY >= 5) {
      setTransparent('header activeHeader')
    }
    else {
      setTransparent('header')
    }
  }
  window.addEventListener('scroll', addBg)

  return (

    <>
      <div>
        <section className='navBarSection'>
          <div className={transparent}>
            <div className='logoDiv'>
              <NavLink to="/" className='logo'>
                <h1 className='flex'><MdOutlineModeOfTravel className='icon' />Ghumfir</h1>
              </NavLink>
            </div>
            <div className={active}>
              <ul className='navLists flex'>
                <li className='navItem'>
                  <NavLink to="/" className='navLink'>Home</NavLink>
                </li>

                <li className='navItem'>
                  <NavLink to="/about" className='navLink'>About</NavLink>
                </li>

                <li className='navItem'>
                  <NavLink to="/shop" className='navLink'>Shop</NavLink>
                </li>

                <li className='navItem'>
                  <NavLink to="/contact" className='navLink'>Contact</NavLink>
                </li>

                <li className='navItem'>
                  <NavLink to="/cart" className='navLink'> <BsCart className='icon'/> <span className=' top-10 text-white  text-[1.5rem] ml-7 absolute'>{totalQuantity}</span></NavLink>
                </li>



                
                <button className='btn loginBtn' onClick={() => setModalOverlay(true)}>
                  <NavLink to="#">Login</NavLink>
                </button>


                {/* modaloverlay */}


                <div onClick={() => setModalOverlay(false)} className={`overlay ${modaloverlay ? 'activeOverlay' : ''}`}></div>


                <div className={`showModalDiv ${modaloverlay ? 'activeModaldiv' : ''}`}>
                  <Login/>

                </div>
          
                <button className='btn loginBtn' onClick={() => setModalOverlay1(true)}>
                  <NavLink to="#" onClick={() => setModalOverlay1(true)}>Book</NavLink>
                </button>
               

                {/* modaloverlay */}


                <div onClick={() => setModalOverlay1(false)} className={`overlay1 ${modaloverlay1 ? 'activeOverlay1' : ''}`}></div>


                <div className={`showModalDiv ${modaloverlay1 ? 'activeModaldiv' : ''}`}>
                  
                  <Booking/>
                </div>

               
              </ul>

              <div className='closeNavbar' onClick={removeNav}>
                <IoCloseCircle className='icon' />
              </div>

              <div className='toggleNavbar hideBar' onClick={showNav}>
                <FaBarsStaggered className='icon' />
              </div>

            </div>
          </div>
        </section>
      </div>

    </>

  )
}

export default Navbar



