import { useState } from 'react'
import ramenLogo from '/icon.svg'
import { Header } from './components/Header'

function App() {
  return (
    <div>
      <Header logo={ramenLogo}/>
      <div class="container-lg">
        <a href="/" target="_blank">
          <img src={ramenLogo} className="logo spin" alt="Ramen logo" />
        </a>
      </div>
      <h1>Under construction</h1>
    </div>
  )
}

export default App
