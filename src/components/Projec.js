import "./Projec.css"
import React from 'react'
import Vendo from "../assets/vendo.png";
import Mags from "../assets/Mags.png";
import Trenz from "../assets/trenz.png";
import  "../assets/vendo.png"

const Projec = () => {
  return ( <div className="conatain">
     <h1 className='reviewTitle text-center'>Projects</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                         
                <div class="col">                
                  <div class="card h-100">
                    <div className="proglogo">                                
                            <a   href="https://gealax.github.io/gepro1.github.io/" target="_blank">
                                <img src={Vendo} alt="vendo"/>
                            </a>
                          <div>
                            <h5 class="card-title">Passive Vendo Machine</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natur</p>
                          </div>
                    </div>               
                  </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                      <div className="proglogo">                                
                              <a   href="https://kodego-group-project.vercel.app/?fbclid=IwAR2SgDadyYMqeRT7ltv6PRprtGIG3V534Sx98NNXeALglWqPCRu0gqusq6o" target="_blank">
                                  <img src={Mags} alt="vendo"/>
                              </a>
                              <h5 class="card-title">Mags Auto Repair</h5>
                              <p class="card-text">This is a wider card with supporting text below as a natur</p>
                      </div>                          
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                      <div className="proglogo">                                
                                <a   href="https://www.trenzcellian.ga/home" target="_blank">
                                    <img src={Trenz} alt="vendo"/>
                                </a>
                                <h5 class="card-title">Trenzcellian Marketing</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natur</p>
                        </div>          
                  </div>
                </div>
              </div>
          </div>            
  )
}
export default Projec;


