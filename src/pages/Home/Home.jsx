import React, { useState } from 'react'
import { homeObjOne, homeObjTwo } from '../../components/InfoSection/Data';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';
import InfoSection from '../../components/InfoSection/InfoSection';
import Services from '../../components/Services/Services';
import Footer from '../../components/Footer/Footer';
import Contact from '../../components/Contact/Contact';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Services />
        <Contact />
        <Footer />
    </>
  )
}

export default Home