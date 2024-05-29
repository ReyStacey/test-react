import React from 'react'
import { Quotes } from './pages/Quotes'
import { Home } from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from './pages/NotFound'
import { Layout } from './components/Layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="quotes/:id" element={<Quotes />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  )
}

export default App
