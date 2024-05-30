import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ROUTES } from './config/routes'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {ROUTES.map((route, index) => (
          <Route
            path={route.path}
            element={route.element}
            index={route.index}
            key={index}
          />
        ))}
      </Route>
    </Routes>
  )
}

export default App
