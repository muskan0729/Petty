import React, { useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './components/Layout'
import AOS from 'aos'
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";



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

    </>
  )
}

export default App
