import { useState } from 'react'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { About } from './components/About'
import ramenLogo from '/icon.svg'
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <div className="container-fluid gx-0">
      <Header logo={ramenLogo}/>
      <div class="container-lg">
        <a href="/" target="_blank">
          <img src={ramenLogo} className="logo spin" alt="Ramen logo" />
        </a>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
