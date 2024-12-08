import React from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home/Home'
import AboutMe from './Components/AboutMe/AboutMe'
import Skills from './Components/Home/Skills/Skills'
import Qualification from './Components/Qualification/Qualification'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <>
      <div className="project-container">
      <NavBar/>

      <Home/>
      <AboutMe/>
      <Skills/>
      <Qualification/>
      <Contact/>
      </div>
    </>
  )
}

export default App
