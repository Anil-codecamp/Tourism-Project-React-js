import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import PopularApi from './PopularApi'
import styles from "./DestinationDetails.module.css"
import SingleDestination from './singleDestination/SingleDestination'


const DestinationDetails = () => {
  const [singleDest,setSingleDest]=useState(PopularApi)
  const {id}=useParams()
  console.log(singleDest);
  

const mydestination= singleDest.find((curElm)=>curElm.id==id)
const {title,location,name}=mydestination;
console.log(mydestination);

  return (
    <>
      <section className={styles.adventure1}>
        <div className={styles.adventSection}>
            <div className={styles.Title}>
                <h1 className='font-mono'>{location}</h1>
                <a href="/">Home</a>
                <span>»{name}</span>

            </div>
        </div>        
    </section>    
    
     <SingleDestination mydestination={mydestination}/>
     </>
            
  )
}

export default DestinationDetails
