import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Views/home'
import NovoProduto from './Views/novoProduto'

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adicionar-produto" element={<NovoProduto />} />
        </Routes>
      </Router>
    </React.StrictMode>
  )
}

export default App
