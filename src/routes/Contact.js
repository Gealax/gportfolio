import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Form1 from '../components/Form1';


const Contact = () =>  { 

    return (
            <div>
                <Navbar/>
                <HeroImg2 heading="CONTACT US"/>
                 <Form1/>
                <Footer/>
            </div>
    )
}


export default Contact;