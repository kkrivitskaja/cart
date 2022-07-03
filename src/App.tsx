import { Routes, Route, Navigate } from 'react-router-dom'

import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { About } from './pages/About'
import { Navbar } from './components/Navbar/Navbar'
import PageNotFound from './pages/PageNotFound/PageNotFound'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="*" element={<Navigate replace to="/404" />} />
          <Route path="/404" element={<PageNotFound />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App
