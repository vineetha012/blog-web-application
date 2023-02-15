import React from "react";
import { useNavigate } from 'react-router-dom'

export const Nav = () => {
    const navigate = useNavigate()
    return (
        <div className="NavBar">
            <div className="logo">
            <i className="fa fa-bold" aria-hidden="true" style={{ fontSize: "25px", color: "white", border: "1px solid white", borderRadius: "5px", padding: "3px" ,height:"23px" }}></i>
            <div style={{color:"white",marginLeft:"10px"}}>BLOG APP</div>
            </div>
            <div className="buttons">
                <button onClick={() => navigate('/')}>home</button>
                <button onClick={() => navigate('/postBlog')}>Create Blog</button>                
            </div>
        </div>
    )
}