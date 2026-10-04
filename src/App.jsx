import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import Vans from './Pages/Vans'
import Layout from './components/Layout'
import VanDetails from './Pages/VanDetails'
import HostLayout from './components/HostLayout'
import HostVan from './Pages/HostPage/HostVan'
import Income from './Pages/HostPage/Income'
import Review from './Pages/HostPage/Review'
import Dashboard from './Pages/HostPage/Dashboard'
import HostVanDetails from './Pages/HostPage/HostVanDetails'
import Photos from './Pages/HostPage/Photos'
import Pricing from './Pages/HostPage/Pricing'
import VanInfo from './Pages/HostPage/VanInfo'
import NotFound from './Pages/HostPage/NotFound'



function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="about" element={<AboutPage/>}/>
            <Route path="vans" element={<Vans/>}/>
            <Route path="vans/:id" element={<VanDetails/>}/>

          <Route path="host" element={<HostLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="income" element={<Income/>}/>
            <Route path="review" element={<Review/>}/>
            <Route path="van" element={<HostVan/>}/>
            
            <Route path="van/:id" element={<HostVanDetails/>}>
              <Route index element={<VanInfo/>}/>
              <Route path="pricing" element={<Pricing/>}/>
              <Route path="photos" element={<Photos/>}/>
            </Route>
          </Route>
            <Route path="*" element={<NotFound/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App