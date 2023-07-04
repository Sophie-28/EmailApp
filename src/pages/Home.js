
   import React, {useState} from "react";

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import Axios from "axios";
import '../App.css';

import { navigate, useNavigate } from 'react-router-dom';
import {InboxPage} from "./InboxPage";

export const HomePage=()=>{
   
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
 
   const navigate=useNavigate();

  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3005/login", {
      email: email,
      password: password,
    }).then((response) => {
      if(response.data.message){
        setLoginStatus("Invalid Username OR Password!");
      }else{
          
       navigate('/Inbox',{ state: { email } });
     
      }
    })
  }

  return(
    
    <div className="formdis">
      
      <div className="loginForm">
        <form className="loginForm">
          <h4>Login Here</h4>
         <label htmlFor="email">Email Address*</label>
          <input className="textInput" type="text" name="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Enter your Email Address" required />
          <label htmlFor="password">Password*</label>
          <input className="textInput" type="password" name="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter your Password" required />
          <input className="button" type="submit" onClick={login} value="Login" />
          <h1 style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginStatus}</h1>
        </form>
      </div>
      
    </div>
  );
}

