import React from 'react'
// import './myabout.css'
import styles from "./MyAbout.module.css";
import ImageCarousel from './carousel/ImageCarousel'



const MyAbout = () => {  
  console.log(styles);
  
  
  return (
    <>
    <section className={styles.hero}>
        <div className={styles.heroSection}>
            <div className={styles.Title}>
                <h1>About</h1>
                <a href="/">Home</a>
                <span>»About</span>
            </div>
        </div>
    </section>



    <div className={styles.container}>

      <div className={styles.title}>
        <h2>Soulful adventure</h2>
        <h1>Making the adventure Happen</h1>       
        </div>

        <div className={styles.content}>
          <div className={styles.mycontent}>
            <h1>Activities that makes you thrilled.</h1>
            <div className={styles.small}></div>
            <p>Adventure is an essential form of exercise we need in our life. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore. Et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            <button>View Activities</button>
          

          </div>

          <div className={styles.imageContent}>
            <div className={styles.imageContent1}>
            <img src="images/a.jpg" alt="" />
            <img src="images/b.jpg" alt="" />
            </div>
            
            <div className={styles.imageContent2}> 
              <img src="images/c.jpg" alt="" />
             <h2>A Vision created for the activities to make sure you enjoy & get thrilled.</h2>
              
              </div>
           

          </div>
        </div>
    </div>


    {/* select activity */}

   <ImageCarousel/>


    
    </>
  )
}
  
export default MyAbout

