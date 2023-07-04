import axios from "axios";
import { MessagePage } from './Message';
import { useEffect, useState } from "react";
import {Navbar} from './NavBar'
import '../App.css';
import { useLocation, useNavigate } from "react-router-dom";
export const InboxPage=()=>{
    const locate=useLocation();
const {email}=locate.state;
const [mess,setMess]=useState([]);

const [show,setShow]=useState(false) 
const navigate=useNavigate();
let unread=0
let read =0;
useEffect(()=>{

    axios.post("http://localhost:3005/message",{email: email}).then(res=>{setMess(res.data)}).catch(err=>console.log(err))
},[])
const play=(id)=>{
    return(
        <div>
{navigate('/Message',{ state: { id} })}
        </div>

    )
}

const logout =()=>{
    navigate("/" );
}
    return (
    <div className="formdis">
        
     {  show?
      <form>
          <Navbar goback={()=>setShow(false)} userName={email} logout={logout} />
      
<table>
    <thead>
    
    </thead>
    <tbody>
      
      {mess.map((r,i)=>(
          
          <tr key={i}  >
            
<td onClick={()=>play(r.Id)} style={{backgroundColor:(r.isRead)==="true"?"white":"grey"}}>  <strong> {r.subject } </strong>  <br /> {(r.content).substring(0,40)}  </td>
        </tr>
      ))}  
    </tbody>
</table>
</form>:<div> 
    <p>Hello {email}</p>
    
    {
        
    mess.map((r,i)=>{
        if(r.isRead==="false"){
            unread++;
            read++;
        }
        else{
            read++;
        }
    })

  
}
  
<p>You have {unread} Unmessages out of {read}</p>
<button className="btn-view" onClick={()=>setShow(true)}>View Message</button>
</div>}


    </div>
  );
}