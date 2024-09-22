import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getCartTotal,increaseItemQuantity,removeItem,decreaseItemQuantity } from '../../features/cartslice'
// import { decreaseItemQuantity, getCartTotal } from '../../features/cartSlice'
//  import { getCartTotal, increaseItemQuantity, removeItem, decreaseItemQuantity } from '../features/cartslice'


const Cartpage = () => {
    const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allCart)

   

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart])


    return (
        <>
       

            <div className="font-sans md:max-w-4xl max-md:max-w-xl min-w-full mx-auto bg-white py-4">
                <div className="grid md:grid-cols-3 gap-7 mt-32">
                    <div className="md:col-span-2 bg-gray-100 p-4 rounded-md shadow-lg ml-4">
                        <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
                        <hr className="border-gray-300 mt-4 mb-8" />
                        {
                            cart.map((curElm) => {
                                const { id, title, price, img, quantity } = curElm;


                                return (


                                    <div className="space-y-4">
                                        <div className="grid grid-cols-3 items-center gap-4">
                                            <div className="col-span-2 flex items-center gap-4">
                                                <div className="w-29 h-28 shrink-0 bg-white p-2 rounded-md">
                                                    <img src={img} className="w-full h-full object-contain" />
                                                </div>

                                                <div>
                                                    <h3 className="text-[1rem] font-bold text-gray-800">{title}</h3>
                                                    <h6 className="text-[1rem] text-red-500 cursor-pointer mt-0.5" onClick={() => dispatch(removeItem(id))}>Remove</h6>

                                                    <div className="flex gap-4 mt-4">
                                                        <div className="relative group">


                                                        </div>

                                                        <div>
                                                            <button type="button"
                                                                className="flex items-center px-3 py-1.4 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                                <span className='text-[2rem] mb-2' onClick={() =>
                                                                    dispatch(decreaseItemQuantity(id))}>-</span>

                                                                <span className="mx-2.5 text-2xl" >{quantity}</span>

                                                                <span className='text-[1.8rem] mb-2' onClick={() =>
                                                                    dispatch(increaseItemQuantity(id))}>+</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ml-auto">
                                                <h4 className="text-base font-bold text-gray-800">Rs {price}</h4>
                                            </div>
                                        </div>
                                        <hr />





                                    </div>


                                )




                            })
                        }
                    </div>


                    <div className="bg-gray-100 rounded-md p-4 lg:sticky top-0 mr-4 drop-shadow-lg">
                    <div className="card-header py-3">
                  <h5 className="mb-0 text-2xl">Order Summary</h5>
                </div>

                        <ul className="text-gray-800 mt-8 space-y-4">
                            
                            <li className="flex flex-wrap gap-4 text-base">Total Quantity <span className="ml-auto font-bold">{totalQuantity}</span></li>
                            <li className="flex flex-wrap gap-4 text-base font-bold">Total Price <span className="ml-auto">Rs {totalPrice}</span></li>
                        </ul>

                        <div className="mt-8 space-y-2">
                            <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded-md">Checkout</button>
                            <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md"><NavLink to="/shop">Continue Shopping</NavLink></button>
                        </div>
                    </div>
                </div>
            </div>

            
            

        </>
    )
}

export default Cartpage
