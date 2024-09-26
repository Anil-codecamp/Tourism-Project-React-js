import React, { useState } from 'react'
 import styles from "./SingleDestination.module.css"
import { MdOutlineWatchLater } from "react-icons/md";
import { FaUserClock } from "react-icons/fa";
import { IoHeartCircle } from "react-icons/io5";
// import "./book.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { NavLink} from 'react-router-dom';


const SingleDestination = ({mydestination}) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        checkInDate: '',
        phone:'',
        guests: 1,
        roomType: 'Single',
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const validateForm = () => {
        const newErrors = {};
    
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.phone) newErrors.phone = 'Phone is required';
        if (!formData.checkInDate) newErrors.checkInDate = 'Check-in date is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          console.log('Form data:', formData);
          toast.success("Reseservation successful");
          
        }
        
      };
    const {location,name,price}=mydestination
  return (
    <>
    <div className='mt-20 mb-20 w-auto gap-96 text-start ml-24'>
        <div>
            <div>
                <h1 className='mb-2 font-mono text-[2.5rem]'>{location},{name}</h1>
                <span className='text-orange-500 font-medium'>${price}/per person</span>
                <p className='mt-7 w-[80%] font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi id ea corporis? Nobis perspiciatis molestias nostrum animi eaque reprehenderit et similique, ipsam eius error necessitatibus assumenda porro? Corporis, dolorum hic!</p>
            </div>

            <div className="flex mt-8 gap-12">
            <span className='text-[1.2rem]'> <MdOutlineWatchLater />15days</span>
            <span span className='text-[1.2rem]'><FaUserClock />18+ age</span>
           <span className='text-[1.2rem]'> <IoHeartCircle />Explore</span>                
            </div>

        
            <div className={styles.details}>            
                <ul>
                    <hr />
                    <div className={styles.detailsContent}>                       
                    <li>Destination</li>
                    <span>Trekking</span>
                    </div>
                    <hr />
                    <div className={styles.detailsContent}>
                    <li>Departure</li>
                    <span>	Please arrive by 9:15 AM for a prompt departure at 9:30 AM.</span>
                    </div>
                    <hr />
                    <div className={styles.detailsContent}>
                    <li>Departure Time</li>
                    <span>Approximately 8:30 PM.</span>
                    </div>
                    <hr />
                    <div className={styles.detailsContent}>
                    <li>Dress Code</li>
                    <span>Casual. Comfortable athletic clothing, hiking shoes, hat and warm jacket.</span>
                    </div>
                    <hr />
                    <div className={styles.detailsContent}>
                    <li>Destination</li>
                    <span>Trekking</span>
                    </div>
                    <hr />
                </ul>
            </div>
        

        </div>


     {/* <div className='mt-10'>
        
      <NavLink to="/book"> <button className='bg-orange-500 p-3 text-white font-medium'>Book Now</button></NavLink> 
     </div> */}

     <div className={styles.bookingContainer}>

<form onSubmit={handleSubmit} className={styles.bookform}>
    <h1 className='text-[1.5rem] font-bold text-center text-red-600'>Book this Tour</h1>
      <ToastContainer position="top-right"/>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange} placeholder='your name'
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange} placeholder='your email'
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleChange} placeholder='your phone number'
        />
        {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
      </div>

      <div>
        <label>Check-in Date:</label>
        <input
          type="date"
          name="checkInDate"
          value={formData.checkInDate}
          onChange={handleChange}
        />
        {errors.checkInDate && <p style={{ color: 'red' }}>{errors.checkInDate}</p>}
      </div>


      <div>
        <label>Number of Guests:</label>
        <input
          type="number"
          name="guests"
          min="1"
          value={formData.guests}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Room Type:</label>
        <select
          name="roomType"
          value={formData.roomType}
          onChange={handleChange}
        >
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Suite">Suite</option>
        </select>
      </div>

      <button type="submit" className='bg-blue-600 px-4 py-2 text-gray-50'>Book</button>
    

      
    </form>
    </div>
    
     
    </div>

    
    </>
     )
}

export default SingleDestination
