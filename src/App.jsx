import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './components/Layout'


function App() {
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
