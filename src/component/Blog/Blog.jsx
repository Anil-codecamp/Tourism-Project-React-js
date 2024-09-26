import React from 'react'

import './blog.scss';
import { BsArrowRightShort } from "react-icons/bs";
import BlogApi from './BlogApi';




const Blog = () => {
  return (
    <>
    
    
    <section className='blog container section'>
      <div className="secContainer">
        <div className="secIntro">
          <h2>Our Best Blog</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia obcaecati maxime exercitationem adipisci, eum, magnam rerum, asperiores blanditiis sunt ea eius aliquid. Recusandae sint omnis repellat eaque iusto repudiandae adipisci.
          </p>
        </div>

        <div className="mainContainer grid">
          {
            BlogApi.map(({id,image,title,description})=>{
              return(
                <div className="singlePost grid" key={id}>
            <div className="imgDiv">
              <img src={image} alt="ImageName" />
            </div>

            <div className="postDetails">
              <h3>
                {title}
              </h3>
              <p>{description}</p>
            </div>
            <a href="#" className='flex'>
              Read more <BsArrowRightShort className='icon'/></a>

          </div>
              )

            })
          }
        </div>


      </div>
    </section>
    
    </>
  )
}

export default Blog
