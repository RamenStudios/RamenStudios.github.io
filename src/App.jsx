import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { About } from './components/About'
import { Portfolio } from './components/Portfolio/Portfolio'
import { Videos } from './components/Videos/Videos'
import { Projects } from './components/Projects/Projects'
import ramenLogo from '/icon.svg'
import { Spinner } from './assets/Spinner'
import { HashRouter, Routes, Route } from "react-router";

function App() {
  return (
    <div className="container-fluid gx-0">
      <HashRouter>
        <Header logo={ramenLogo}/>
        <div class="container-lg">
          <Spinner/>
          <p>very much under construction. pardon the mess!</p>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </HashRouter>
      <Footer/>
    </div>
  )
}

export default App
