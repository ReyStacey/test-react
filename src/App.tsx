import React from 'react'
// import { QuotesOne, QuotesTwo } from './pages/Quotes'
import { Quotes } from './pages/Quotes'
import { Home } from './pages/Home'
import { Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quotes" element={<Quotes />}>
          {/* <Route index element={<QuotesOne />}></Route>
          <Route path="/one" element={<QuotesOne />}></Route>
          <Route path="/two" element={<QuotesTwo />}></Route> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
