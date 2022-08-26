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
        <div className="container">
                <h3>SKILLS AQUIRED</h3>
                    <div className="proglogo">
                      <img className="react-img" src={ReactStyle} alt="REACTImg"/>
                   </div>
                   <div className="proglogo">
                      <img className="js-img" src={JavaStyle} alt="JAVASImg"/>
                   </div> 
                   <div className="proglogo">
                      <img className="css-img" src={CasStyle} alt="CSSImg"/>
                   </div>
                   <div className="proglogo">
                      <img className="html-img" src={HtmlStyle} alt="HTMLImg"/>
                   </div>
                   <div className="proglogo">
                      <img className="sass-img" src={SasStyle} alt="SASSImg"/>
                   </div>
                  
        </div>
    </div>
  )
}

export default SkillsImg;