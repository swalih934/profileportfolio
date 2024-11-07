import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Works from './Components/Works';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
function App() {

  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Works/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
