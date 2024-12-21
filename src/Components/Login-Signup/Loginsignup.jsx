
import './Loginsignup.css';
import React from 'react';

import user_icon from '../../Assets/peron.png'; 
import  email_icon from '../../Assets/mail.png';
import password_icon from '../../Assets/person.png';



const Loginsignup =() => {


  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
       <div className="underline"></div>
      </div>

      <div className="inputs">
      <div className="input">
        <img src={user_icon} alt="peron.png"/>
        <input type="text" placeholder="Name"/>
      </div>

      
      <div className="input">
      <img src={email_icon}alt="mail.png"/>
        <input type="email" placeholder="Email Id"/>
      </div>

      
      <div className="input">
         <img src={password_icon} alt="peron.png"/>
        <input type="password" placeholder="Password"/>
      </div>
      </div>
      <div className="forger-password">Lost Password? <span>Click Here!</span></div>
      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
        

      </div>
   </div>
  );
}

export default Loginsignup
