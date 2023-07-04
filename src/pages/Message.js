import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {Navbar} from './NavBar'
import '../App.css';
export const MessagePage =()=>{
    const navigate=useNavigate();
    const [mess,setMess]=useState([]);
 
    const locate=useLocation();
const {id}=locate.state;
useEffect(()=>{

    axios.post("http://localhost:3005/display",{id: id}).then(res=>{setMess(res.data)}).catch(err=>console.log(err))
},[])
const goBack =()=>{
    navigate(-1 );
}
const logout =()=>{
    navigate("/" );
}
const subject= useSelector((state)=>state.mail.subject);
    return (
    <div >
        
        <div className="formdis">
<Navbar goback={goBack} logout={logout} />
    
        <form>
            {console.log("sub:"+subject)}
     

   {mess.map((message,index)=>(
            <div key={index}>
                 
<p> <strong>{message.subject}</strong> </p>
<p>{message.content}</p>

            </div>
        ))}

</form>
    </div>
    </div>
  );
}