import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Projec from '../components/Projec';

const Project = () => {
  return (
            <div>
                <Navbar/>
                <HeroImg2 heading="PROJECTS AND DESIGN"/>
                
                <Projec/>
                <Footer/>
            </div>
  )
}


export default Project;