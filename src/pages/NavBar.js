import React from "react";
import '../App.css';
export const Navbar =({goback,userName,logout})=>{
    return(
        <nav >
        <div className="nav-back">
 <button className="nav-button" onClick={goback}> <strong>{"<-"}</strong> </button>
            <p className="nav-name">{userName}</p>
           <button className="nav-button" onClick={logout}> <strong>{"Logout"}</strong> </button>
        </div>
           
        <hr />
       
        </nav>
    )
}