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
        <span className="font-intro">
             <h4>I am person who likes to learn new things specially when it comes (IOT) internet of things technology.</h4>
             <h4> I am very passionate and enthusiastic about creating constructive and efficient solutions. </h4>
            <h4> I believe that having an open mind can help you remain creative and grasp ideas from any subject to implement it in your field!</h4> 
        </span>   
    </div>
  )
}

export default HeroImg;