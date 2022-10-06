import "./HeroImgStyles.css";
import React from 'react'
import FrontImg from "../assets/fimg.gif";
import MyPic   from "../assets/Mypic.png";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="front-img" src={FrontImg} alt="FrontImg"/>
        </div>         
        <div className="content" >
            <img className="profile" src={MyPic} alt = "Mypic"/>
            <h2>Gerry Alkuino</h2>
                <p>a freelance </p>
                <h1>Fullstack Developer</h1>
             <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
             </div>                      
        </div>     
      </div>  
  )
}

export default HeroImg;