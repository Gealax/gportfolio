import "./SkillsImg.css"
import React from 'react'
import JavaStyle from "../proglogo/js.png";
import CasStyle from "../proglogo/css.png";
import HtmlStyle from "../proglogo/html.png";
import ReactStyle from "../proglogo/React-icon.svg.png";
import SasStyle from "../proglogo/sass.png";

const SkillsImg = () => {
  return (
    <div className="logo">
      <h3>SKILLS AQUIRED</h3>
        <div className="container">
                
                    <div className="proglogo">
                      <img className="react-img" src={ReactStyle} alt="REACTImg"/>
                      <h3>REACT</h3>
                   </div>
                   <div className="proglogo">
                      <img className="js-img" src={JavaStyle} alt="JAVASImg"/>
                      <h3>JAVASCRIPT</h3>
                   </div> 
                   <div className="proglogo">
                     
                      <img className="css-img" src={CasStyle} alt="CSSImg"/>
                      <h3>CSS</h3>
                   </div>
                   <div className="proglogo">
                      <img className="html-img" src={HtmlStyle} alt="HTMLImg"/>
                      <h3>HTML</h3>
                   </div>
                   <div className="proglogo">
                      <img className="sass-img" src={SasStyle} alt="SASSImg"/>
                      <h3>SASS</h3>
                   </div>
                  
        </div>
    </div>
  )
}

export default SkillsImg;