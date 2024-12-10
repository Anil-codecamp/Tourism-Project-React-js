import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../features/cartslice';



const Myshop = () => {
  const items=useSelector((state)=>state.allCart.items)
  //console.log(items);

  const dispatch=useDispatch();
  return (
    <>
    
    <div className="text-center mt-16">
      <h2 className='text-red-500 font-medium text-3xl'>Camping Shop</h2>
      <h1 className='text-gray-700 mt-2 text-base lg:text-xl'>Adventure Essential</h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10  "> 
      {
        items.map((curElm,id)=>{
          const {title,description,img,price}=curElm;
          return(

           
            <div className="border border-gray-300 shadow-md m-4 px-10" key={id}>
              <div className="w-[100%] gap-5">
                <img src={img} className='h-[300px] w-[250px] mx-auto object-cover' alt=""/>
              </div>
              <div className="text-center">
                <h2>{title}</h2>
                <h1 className='text-4xl font-mono'>{description}</h1>
                <p>${price}</p>
              
              <button className="mb-8 mt-4 bg-blue-600 text-white px-4 py-1" onClick={()=>dispatch(addToCart(curElm))}>Add to cart</button>
              </div>
            </div>
            
          )

        })
      }
    </div>
    </>
  )
}

export default Myshop
