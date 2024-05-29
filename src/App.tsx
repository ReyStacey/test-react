import React, { Suspense, lazy } from 'react'
import { Quotes } from './pages/Quotes'
import { Home } from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from './pages/NotFound'
import { Layout } from './components/Layout'
import { Loader } from './components/Loader'

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="quotes/:id" element={<Quotes />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
