import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Categories from './components/Categories'
import About from './components/About'
import { Profile } from './components/Profile'
import Contact from './components/contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <div style={{margintop:'80px'}}>
      <Routes>
        <Route path="/h" element={<Home/>}/>
        <Route path="/c" element={<Categories/>}/>
        <Route path="/a" element={<About/>}/>
        <Route path="/con" element={<Contact/>}/>
        <Route path="/p" element={<Profile/>}/>

      </Routes>
      </div>
       
    </>
  )
}

export default App
