import React from "react";
import { useState } from 'react';
import {Wrapper } from "../LoginStyle";
import { FaUser, FaLock} from "react-icons/fa";

function LoginSignUp(){
const [error ,setError] = useState(null);
const [state , setState] = useState({
  email: '',
  password: '',
});

const validateEmail = () =>{
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
const handleChange = (e) => {
  const {id ,value} = e.target;
  setState((e) => ({
    // ...prevState,
    [id]: value,
  }));

}

const handleSubmit = (e) =>{
  e.preventDefault();
  if (!validateEmail(state.email)){
    setError('Invalid Email');
  }
   if(state.password.length < 8 ){
    setError('Password must be at least 8character long');

  }
  if(!error == !password){
    
  }
}
return(
  <div>
     <Wrapper >
   
   <div className="login-page text-center">
   {/* {error && <div style={{ color: 'red' }}>{error}</div>} */}
      <h2>Welcome to Amplify Studio</h2>
      <form onSubmit={handleSubmit}
        className='form'
        id="form-holder"
      >
        
        <label>
          Email:</label>
          <input
            type="text"
            placeholder='Email'
            className='input-box'
            value={state.email}
            onChange= {handleChange}
          />
        <FaUser  className='icon'/>
        <br />
        <label>
          Password:
        </label>
          <input
            type="password"
            className='input-box'
            placeholder='Password'
            value={state.password}
            onChange= {handleChange}
          />
        
        <FaLock className='icon' />
       
        <br />
        <label >
        <input type="checkbox"  className='checkBox'/>Remember me
           </label>
          <a href=""> Forgot password</a>
        
        <div className='sign-up'>
        <p>Don't have an account ? <a href="">Sign Up</a></p>
        </div>
        <button type="submit" className='submit'>Login</button>
       
      </form>
    </div>

  
    </Wrapper>


  </div>
)

}


export default LoginSignUp