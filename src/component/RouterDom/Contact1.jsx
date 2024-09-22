import React from 'react'
import "./contact.css"
import styled from "styled-components";

const Contact1 = () => {
 

  return (
    <>
    <section className='myContact'>
        <div className='contactSection'>
            <div className='Title'>
                <h1>Contact</h1>
                <a href="/">Home</a>
                <span>»Contact</span>

            </div>
        </div>
        
    </section>

    <Wrapper>
      <h2 className="common-heading">Contact Us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.385157574532!2d84.40377637530062!3d27.70539197618366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb6fdfd935ed%3A0x29e6424f203a7aec!2sLUMBINI%20ICT%20CAMPUS!5e0!3m2!1sen!2snp!4v1712590880358!5m2!1sen!2snp" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


      <div className="container">
        <div className="contact-form">
          <form className="contact-inputs">
            <h1>Get in touch</h1>
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
    </>
  )
}

export default Contact1


const Wrapper = styled.section`
padding: 9rem 0 5rem 0;
text-align: center;

.container {
  margin-top: 6rem;
  

  .contact-form {
    max-width: 30rem;
    margin: auto;
    border:none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      padding:2rem 1rem;
      
      textarea{
      padding: 3px 15px;
      font-size:1rem;
       box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
       border:none;
      }

     

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;
        background-color:orange;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        width:8rem;
        font-size:1.4rem;
        border:none;

       
        }
      }
    }
  }
}
`;


