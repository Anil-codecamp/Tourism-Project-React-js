import React from 'react'
import './about.scss';
// import styles from './About.module.scss';

const About = () => {
  return (
    <>
    <section className='about section'>
      <div className="secContainer">
        <div className="title">
          Why Hikings?
        </div>

        <div className="mainContent container grid">
          <div className="singleItem">
            <img src="images/hiking.jpg" alt="Image" />
            <h3>2000+ Hikings</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quis dignissimos doloremque eveniet amet eligendi nisi nobis exercitationem ipsa voluptatem debitis, odio ex sunt ratione vel et iste iure. Doloribus.</p>            
          </div>

          <div className="singleItem">
            <img src="images/mountain.jpg" alt="Image" />
            <h3>1000+ Mountains</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quis dignissimos doloremque eveniet amet eligendi nisi nobis exercitationem ipsa voluptatem debitis, odio ex sunt ratione vel et iste iure. Doloribus.</p>            
          </div>

          <div className="singleItem">
            <img src="images/customer.jpg" alt="Image" />
            <h3>8000+ Customer</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quis dignissimos doloremque eveniet amet eligendi nisi nobis exercitationem ipsa voluptatem debitis, odio ex sunt ratione vel et iste iure. Doloribus.</p>            
          </div>
        </div>

        <div className="videoCard container">
          <div className="cardContent">
            <div className="cardText">
              <h2>Wonderful experience in here</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum soluta at placeat voluptatibus magni maxime incidunt, impedit, sunt commodi labore eius nobis autem illum perspiciatis? Tempora corporis architecto cumque quaerat.</p>

            </div>

            <div className="cardVideo">
              <video src="images/video.mp4"autoPlay loop muted type='video/mp4'></video>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default About
