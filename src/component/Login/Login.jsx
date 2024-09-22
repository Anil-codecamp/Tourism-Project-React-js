import React, { useState } from 'react'
import "./login.css"

const Login = () => {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[conPassword,setconPassword]=useState("")


  const handleSubmit=(e)=>{
    e.preventDefault();

    const loginData={
      email,
      password,
      conPassword
      
  
    }
    console.log(loginData);
  }
  
 
  

 
  

    
  return (
    <>
   
  
   <div className="main-container">
                    <input type="checkbox" id='check' />
                    <div className="login form">
                      <header>Login</header>
                      <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <a href="#">Forgot password?</a>
                        <input type="submit" class="button" value="Login"/>
                        {/* <button type='submit'>Login</button> */}
                       

                      </form>

                      <div className="signup">
                        <span className='signup'>Don't have an account
                          <label htmlFor="check">Signup</label>
                        </span>
                      </div>
                    </div>

                    <div className="registration form">
                      <header>Signup</header>
                      <form action="#" onSubmit={handleSubmit}>
                        <input type="text" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <input type="password" placeholder='Create your password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <input type="password" placeholder='Confirm your password' value={conPassword} onChange={(e)=>setconPassword(e.target.value)} />
                        <input type="submit" className='button' value="Signup" />
                      </form>

                      <div className="signup">
                        <span className='signup'>Already have an account
                          <label htmlFor="check">Login</label>
                        </span>
                      </div>
                    </div>

                  </div>

                



    </>
  )
}

export default Login
