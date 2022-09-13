import "./FooterStyle.css"
import React from 'react'
import {FaHome,FaMobile, FaMailBulk, FaTwitter, FaInstagram, FaLink,FaFacebook} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
                <div className="footer-container">

                   <div className="left">
                        <div className="location">
                            <FaHome size={30} style={{color:"#fff", marginRight: "2rem"}} />
                            <p>Upper Anas,Brgy. Atipolo</p>
                            <p>Naval, Biliran</p>
                        </div>
                        <div className="mobile">
                            <FaMobile size={30} style={{color:"#fff", marginRight: "2rem"}} />
                            <p>09473957986</p>
                        </div>
                        <div className="email">
                            <FaMailBulk size={30} style={{color:"#fff", marginRight: "2rem"}} />
                            <p>bags7digiprint@gmail.com</p>
                        </div>
                    </div>
                
                <div className="right"> 
                    <div> 
                        <h4> About Company</h4>
                        <p> personal info</p>
                    </div>

                    <div className="social">
                            <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}} />
                            <FaTwitter size={30} style={{color:"#fff", marginRight: "1rem"}} />
                            <FaInstagram size={30} style={{color:"#fff", marginRight: "1rem"}} />
                            <FaLink size={30} style={{color:"#fff", marginRight: "1rem"}} />
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Footer