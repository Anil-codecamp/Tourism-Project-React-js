import React from 'react'
import "./cart.css"
import Cartpage from '../shop/Cartpage'



const Cart = () => {
 
  return (
    <>
    <section className='blog1'>
        <div className='blogSection'>
            <div className='Title'>
                <h1>Cart</h1>
                <a href="/">Home</a>
                <span>»Cart</span>

            </div>
        </div>
        
    </section>
    <Cartpage/>


    

    </>
  )}

export default Cart


