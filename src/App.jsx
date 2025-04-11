import React from 'react'
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom"
import MurodPage from './pages/MurodPage'
import Aziz from './Aziz'
import Azizbek from './Azizbek'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <nav className='flex justify-around mt-[20px] text-2xl '>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">О бренде</NavLink>
          <NavLink to="/advantages">Преимущества</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={<MurodPage />} />
          <Route path='/about' element={<Aziz />} />
          <Route path='/advantages' element={<Azizbek />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App