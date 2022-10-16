import "./Projec.css"
import React from 'react'
import Vendo from "../assets/vendo.png";
import Mags from "../assets/Mags.png";
import Portfolio from "../assets/portfolio.png";
import  "../assets/vendo.png"

const Projec = () => {
  return ( <div className="contain">
     <h1 className='reviewTitle text-center'> Website Projects</h1>
            <div class="row row-cols-1 row-cols-md-3 row-cols-sm-3 ">              
                <div class="col">                
                  <div class="card h-100">
                    <div className="proglogo">                                
                            <a   href="https://gealax.github.io/gepro1.github.io/" target="_blank">
                                <img src={Vendo} alt="VENDO MACHINE"/>
                            </a>
                          
                            <h5 class="card-title text-center">Passive Vendo Machine</h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                      <div className="proglogo">                                
                              <a   href="https://kodego-group-project.vercel.app/?fbclid=IwAR2SgDadyYMqeRT7ltv6PRprtGIG3V534Sx98NNXeALglWqPCRu0gqusq6o" target="_blank">
                                  <img src={Mags} alt="MAGS AUTO REPAIR"/>              
                               </a>
                              <h5 class="card-title text-center">Mags Auto Repair</h5>
                      </div>                          
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                      <div className="proglogo">                                
                                <a   href="https://gportfolio.vercel.app/" target="_blank">
                                    <img src={Portfolio} alt="PORTFOLIO"/>
                                </a>
                                <h5 class="card-title text-center">Portfolio</h5>
                       </div>          
                  </div>
                </div>
              </div>
          </div>            
  )
}
export default Projec;


