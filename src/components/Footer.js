import "./FooterStyle.css";
import React from 'react';
import CodeStyle from "../assets/code.png";
import {FaHome,FaMobile, FaMailBulk, FaTwitter, FaInstagram, FaLink,FaFacebook, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
                <div className="footer-container">

                   <div className="left">
                        <div className="location">
                            <FaHome size={70} style={{color:"#fff", marginRight: "2rem"}} />
                            <p>Upper Anas,Brgy. Atipolo
                               Naval, Biliran</p>
                        </div>
                        <br/>
                        <div className="mobile">
                            <FaMobile size={50} style={{color:"#fff", marginRight: "2rem"}} />
                            <p>09473957986</p>
                        </div>
                        <br/>
                        <div className="email">
                            <FaMailBulk size={50} style={{color:"#fff", marginRight: "2rem"}} />
                            <p>bags7digiprint@gmail.com</p>
                        </div>
                    </div>
                
                    <div className="center "> 
                        <div className="social">
                            <img className="code-img" src={CodeStyle} alt="CODEImg"/>                   
                        </div>          
                    
                        <div className="social">
                           <h3> My Media Link</h3>
                           <a href="https://web.facebook.com/ge.akuino"> 
                               <FaFacebook size={40} style={{color:"#fff", marginRight: "1rem"}}/> 
                           </a>
                            <FaTwitter size={40} style={{color:"#fff", marginRight: "1rem"}} />
                            <FaInstagram size={40} style={{color:"#fff", marginRight: "1rem"}} />
                           <a href="https://linkedin.com/in/gerry-alkuino-236975216"> 
                               <FaLinkedin size={40} style={{color:"#fff", marginRight: "1rem"}}/> 
                           </a>
                        </div>
                    </div>                                
                    <div className="right">
                          <h3> My Location Site</h3>                            
                          <iframe className="googlemap" 
                                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13147.506004904719!2d124.39814653442338!3d11.567843524636158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1665469843955!5m2!1sen!2sph">            
                            
                             </iframe>
                    </div>                  
                </div> 
              </div> 
  )
}

export default Footer