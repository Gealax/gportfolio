import "./NavbarStyles.css";
import Logo from "../assets/port.gif";
import React, { useState } from 'react';
import {ReactDOM} from "react-router-dom";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick =() => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor =() => {
        if (window.scrollY >=100){
            setColor(true);
        } 
        else 
        {
            setColor(false);
        } 
        };
         window.addEventListener("scroll",changeColor);
        

   
  return (
    <div className={color ? "header header-bg" : "header"}> 
            <Link to="/" className="pro-logo" target="_blank">
                    <img src={Logo} alt="port" width = "300" height = "100"/>           
            </Link>
       <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/"> Home </Link>
                </li>
                <li>
                    <Link to="/project"> Project </Link>   
                </li>
                <li>
                    <Link to="/skills"> Skills </Link>
                </li>
                <li>
                    <Link to="/contact"> Contact </Link>
                </li>
       </ul>
    
   
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={50} style={{color:"#fff"}}/>)
                     :
                    (<FaBars size={50} style={{color:"#fff"}}/> )
            }            
       </div>
   </div>
    
  );
};

export default Navbar;