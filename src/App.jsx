import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { About } from './components/About'
import ramenLogo from '/icon.svg'
import { HashRouter, Routes, Route } from "react-router";

function App() {
  return (
    <div className="container-fluid gx-0">
      <HashRouter>
        <Header logo={ramenLogo}/>
        <div class="container-lg">
          <a href="/" target="_blank">
            <img src={ramenLogo} className="logo spin" alt="Ramen logo" />
          </a>
          <p>very much under construction. pardon the mess!</p>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
      <Footer/>
    </div>
  )
}

export default App
