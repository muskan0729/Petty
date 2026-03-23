import React, { useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './components/Layout'
import AOS from 'aos'
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import wb_icon from "./images/whatsapp_icon.png";



function App() {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
      mirror: true,
    });
  
  }, []);
  return (
    <>
      <Layout>
    <Routes>
     <Route path="/" element={<Home/>}/>
</Routes>
     </Layout>


     <div className="whatsapp-float">
    <a
      href="https://wa.me/9152663733?text=Hi%20I%20am%20interested%20in%20your%20products"
      target="_blank"
      rel="noopener noreferrer"
    >
        <span className="whatsapp-text">Click for enquiry</span>

      <img
       src={wb_icon}
       />
    </a>
  </div>
   
  


    </>
  )
}

export default App
