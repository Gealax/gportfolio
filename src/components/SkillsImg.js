import "./SkillsImg.css"
import React from 'react'
import JavaStyle from "../proglogo/js.png";
import CasStyle from "../proglogo/css.png";
import HtmlStyle from "../proglogo/html.png";
import ReactStyle from "../proglogo/React-icon.svg.png";
import SasStyle from "../proglogo/sass.png";
import GitStyle from "../proglogo/git.png";
import BootsStyle from "../proglogo/Bootstrap.png";
import GithubStyle from "../proglogo/github.png";
import NodeStyle from "../proglogo/node.png";
import ApiStyle from "../proglogo/api1.png";
import SqlStyle from "../proglogo/sql.png";
import LaravelStyle from "../proglogo/laravel.png";
import PostStyle from "../proglogo/post.png";
import VercelStyle from "../proglogo/vercel.png";
import SourceStyle from "../proglogo/source.png";
import NpmStyle from "../proglogo/npm.png";
import AsmStyle from "../proglogo/asm.png";
import TurboStyle from "../proglogo/turboc.png";
import PascalStyle from "../proglogo/pascal.png";
import Java1Style from "../proglogo/java.png";
import AccessStyle from "../proglogo/access.png";
import PhotoStyle from "../proglogo/photo.png";
import MaxStyle from "../proglogo/3ds.png";
import CoolStyle from "../proglogo/sound.png";
import IbmStyle from "../proglogo/ibm.png";
import CiscoStyle from "../proglogo/cisco.png";

const SkillsImg = () => {
  return (
    <div className="logo">
        <div className="container ">
          <span className="font-link">
           <h1 >KODEGO SKILLS AQUIRED</h1>
          </span>
                <div className="row  justify-content-around ">
                <div className="col d-flex justify-content-around col-sm col-lg " >
      
                   <div className="logoup col-2 col-lg">
                      <img className="html-img" src={HtmlStyle} alt="HTMLImg"/>
                      <h4>HTML</h4>
                   </div>
                   <div className="logoup col-2 col-lg ">                    
                      <img className="css-img" src={CasStyle} alt="CSSImg"/>
                      <h4>CSS</h4>
                   </div>
                   <div className="logoup col-2 col-lg">
                      <img className="js-img" src={JavaStyle} alt="JAVASImg"/>
                      <h4>JAVASCRIPT</h4>
                   </div> 
                   <div className="logoup col-2 col-lg">
                      <img className="sass-img" src={SasStyle} alt="SASSImg"/>
                      <h4>SASS</h4>
                   </div>
                   <div className="logoup col-2 col-lg">
                      <img className="git-img" src={GitStyle} alt="GITImg"/>
                      <h4>Git</h4>
                   </div>
                   <div className="logoup col-2 col-lg">
                      <img className="boots-img" src={BootsStyle} alt="BOOTSTRAPImg"/>
                      <h4>Bootstrap</h4>
                   </div>

                   <div className="logoup col-2 col-lg-2">
                      <img className="react-img" src={ReactStyle} alt="REACTImg"/>
                      <h4>REACT</h4>
                   </div>     
                   <div className="logoup col-2 col-lg-3">
                      <img className="source-img" src={SourceStyle} alt="SOURCETREEImg"/>
                      <h4>SourceTree</h4>
                   </div>                 
               </div>
            </div>   

            <div className="row  justify-content-around ">  
          <div className="col d-flex justify-content-around col-sm col-lg">

               <div className="logoup col-2">
                  <img className="github-img" src={GithubStyle} alt="GITHUBImg"/>
                  <h4>Github</h4>
               </div>
               <div className="logoup col-2">                    
                  <img className="node-img" src={NodeStyle} alt="NODEImg"/>
                  <h4>Node.js</h4>
               </div>
               <div className="logoup col-2">
                  <img className="npm-img" src={NpmStyle} alt="NPMImg"/>
                  <h4>NPM</h4>
               </div> 
               <div className="logoup col-2">
                  <img className="api-img" src={ApiStyle} alt="APIImg"/>
                  <h4>REST API</h4>
               </div> 
               <div className="logoup col-2">
                  <img className="sql-img" src={SqlStyle} alt="MYSQLImg"/>
                  <h4>My SQL</h4>
               </div>
               <div className="logoup col-2">
                  <img className="laravel-img" src={LaravelStyle} alt="LARAVELImg"/>
                  <h4>LARAVEL</h4>
               </div>
               <div className="logoup col-2">
                  <img className="post-img" src={PostStyle} alt="POSTMANImg"/>
                  <h4>Postman</h4>
               </div>

               <div className="logoup col-2">
                  <img className="vercel-img" src={VercelStyle} alt="VERCELImg"/>
                  <h4>Vercel</h4>
               </div>           
               </div>
             </div>
             </div>
           
             <br/> 
      
      
       <div className="container ">
          <span className="font-link">
           <h1 >COLLEGE  PROGRAM  AQUIRED</h1>
          </span>
              <div className="col d-flex justify-content-around col-sm col-md">
                  <div className="logoup">
                      <img className="asm-img" src={AsmStyle} alt="ASSEMBLY LANGUAGEImg"/>
                      <h4>Assembly Language</h4>
                   </div>
                   <div className="logoup">                    
                      <img className="turbo-img" src={TurboStyle} alt="TURBO C++Img"/>
                      <h4>Turbo C</h4>
                   </div>
                   <div className="logoup">
                      <img className="pascal-img" src={PascalStyle} alt="TURBO PASCALImg"/>
                      <h4>Turbo Pascal</h4>
                   </div> 
                   <div className="logoup">
                      <img className="java-img" src={Java1Style} alt="JAVAImg"/>
                      <h4>Java</h4>
                   </div> 
                   <div className="logoup">
                      <img className="access-img" src={AccessStyle} alt="ACCESSImg"/>
                      <h4>Microsoft Access</h4>
                   </div> 
           </div>    
     
     
      </div>     
   
      <br/> 
        <div className="container ">
          <span className="font-link">
           <h1 >GRAPICS/3D MODELING/SOUND EDIT</h1>
          </span>
             <div className="col d-flex justify-content-between col-sm col-md">
      
                   <div className="logoup">
                      <img className="photo-img" src={PhotoStyle} alt="ADOBE PHOTOSHOPImg"/>
                      <h4>Adobe Photoshop</h4>
                   </div>
                   <div className="logoup">                    
                      <img className="max-img" src={MaxStyle} alt="Autodesk 3ds MaxImg"/>
                      <h4>Autodesk 3ds Max</h4>
                   </div>
                   <div className="logoup">
                      <img className="cool-img" src={CoolStyle} alt="COOL EDITPROImg"/>
                      <h4>Cool Edit Pro</h4>
                   </div> 
           </div>    
      </div>
      
       <div className="container">
         <span className="font-link">
           <h1 >NETWORKING ACADEMY AQUIRE</h1>
          </span>
               <div className="col d-flex justify-content-around ">
      
                   <div className="logonet">
                           <a href="https://www.credly.com/badges/edd212e7-485b-4c2d-a1fc-69ed47a1a3e3/public_url" target="_blank">            
                              <img className="ibm-img" src={IbmStyle} alt="CLOUDNETWORKImg"/> 
                              <h4>CLOUD COMPUTING CORE</h4> 
                           </a>
                   </div>
                   <div className="logonet"> 
                           <a href="https://www.credly.com/badges/ae13462a-79f2-4cb3-aa9b-81cf62d68647/public_url" target="_blank">
                                <img className="cisco-img" src={CiscoStyle} alt="NETWORKImg" />
                                <h4>NETWORK ESSENTIAL CISCO</h4> 
                           </a>              
                    </div>
                   
           </div>    
      </div>

    
  </div>
  
    
  )
}

export default SkillsImg;