import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import Vans from './Pages/Vans'
import Layout from './components/Layout'
import VanDetails from './Pages/VanDetails'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/vans" element={<Vans/>}/>
          <Route path="/vans/:id" element={<VanDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App