import React, { useState } from 'react'
import { OrderSummary } from '../shop/Cartpage'

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod')
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between gap-8 pt-5 px-10 sm:pt-14 min-h-[80vh] bg-slate-400'>
        <div className='flex flex-col gap-4 sm:max-w-[470px] mt-20 sm:mt-24 mb-24'>
          <div className='text-xl sm:text-2xl my-3'>
            <h1>Delivery Information</h1>

          </div>

          <div className='flex gap-3'>
            <input className='border border-gray-300 rounded py-2 px-4 w-full' type="text" placeholder='First name' />
            <input className='border border-gray-300 rounded py-2 px-4 w-full' type="text" placeholder='Last name' />
          </div>
          <input className='border border-gray-300 rounded py-2 px-4 w-full' type="email" placeholder='Email address' />
          <input className='border border-gray-300 rounded py-2 px-4 w-full' type="text" placeholder='Street' />

          <div className='flex gap-3'>
            <input className='border border-gray-300 rounded py-2 px-4 w-full' type="text" placeholder='City' />
            <input className='border border-gray-300 rounded py-2 px-4 w-full' type="text" placeholder='State' />
          </div>
          <div className='flex gap-3'>
            <input min={1} className='border border-gray-300 rounded py-2 px-4 w-full' type="number" placeholder='Zipcode' />
            <input className='border border-gray-300 rounded py-2 px-4 w-full' type="text" placeholder='Country' />
          </div>
          <input className='border border-gray-300 rounded py-2 px-4 w-full' type="number" placeholder='Phone' />
        </div>

        {/* ------------Right side------------ */}
        <div className='mt-24 mb-24'>
          <div className='mt-8  min-w-80'>
            <OrderSummary/>

          </div>

          <div className='mt-12'>
            <h1 className='uppercase text-xl'>Payment Method</h1>
          </div>

          {/* ---------Payment Method selection */}
          <div className='flex gap-3 flex-col md:flex-row mt-4'>
            <div onClick={() => setMethod('stripe')} className='flex items-center gap-3  border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : " "}`}></p>
              <img className='h-5 mx-4' src="images/stripe_logo.png" alt="" />
            </div>
            <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3  border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : " "}`}></p>
              <img className='h-5 mx-4' src="images/razorpay_logo.png" alt="" />
            </div>
            <div onClick={() => setMethod('cod')} className='flex items-center gap-3  border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : " "}`}></p>
              <p className='uppercase text-gray-900 text-sm font-medium mx-4'>Cash On delivery</p>
            </div>

          </div>

          <div className='w-full text-end mt-8'>
            
              <button className='bg-black text-white text-center px-12 py-2 rounded uppercase active:bg-slate-800'>Place Order</button>
            

          </div>

          <div>

          </div>

        </div>

      </div>
    </>
  )
}

export default PlaceOrder
