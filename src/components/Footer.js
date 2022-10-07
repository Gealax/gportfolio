import "./FooterStyle.css"
import React from 'react'
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
                        <div className="mobile">
                            <FaMobile size={50} style={{color:"#fff", marginRight: "2rem"}} />
                            <p>09473957986</p>
                        </div>
                        <div className="email">
                            <FaMailBulk size={50} style={{color:"#fff", marginRight: "2rem"}} />
                            <p>bags7digiprint@gmail.com</p>
                        </div>
                    </div>
                
                <div className="right "> 
                    <div> 
                        <h4> My Media Link</h4>
                        <p> personal info</p>
                    </div>

                    <div className="social">
                           <a href="https://web.facebook.com/ge.akuino"> <FaFacebook size={50} style={{color:"#fff", marginRight: "1rem"}}/> </a>
                            <FaTwitter size={50} style={{color:"#fff", marginRight: "1rem"}} />
                            <FaInstagram size={50} style={{color:"#fff", marginRight: "1rem"}} />
                           <a href="https://linkedin.com/in/gerry-alkuino-236975216"> <FaLinkedin size={50} style={{color:"#fff", marginRight: "1rem"}} /> </a>
                    </div>
                </div>
                {/* <div className="left">
                        <div className="location">
                            <FaHome size={50} style={{color:"#fff", marginRight: "2rem"}} />
                            <p>Upper Anas,Brgy. Atipolo
                               Naval, Biliran</p>
                        </div>
                        <div className="mobile">
                            <FaMobile size={50} style={{color:"#fff", marginRight: "2rem"}} />
                            <p>09473957986</p>
                        </div>
                        <div className="email">
                            <FaMailBulk size={50} style={{color:"#fff", marginRight: "2rem"}} />
                            <p>bags7digiprint@gmail.com</p>
                        </div>
                    </div>
                 */}
                 
        </div>
    </div>
  )
}

export default Footer