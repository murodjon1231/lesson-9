import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import NotFound from "./NotFound"

const MurodPage = lazy(() => import('./pages/MurodPage'));
const Aziz = lazy(() => import('./Aziz'));
const Azizbek = lazy(() => import('./Azizbek'));

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <nav className='flex justify-around mt-[20px] text-2xl '>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">О бренде</NavLink>
          <NavLink to="/advantages">Преимущества</NavLink>
        </nav>

        <Suspense fallback={<h1 className='text-center text-8xl mt-[200px] text-red-600'>Loading...</h1>}>
          <Routes>
            <Route path='/' element={<MurodPage />} />
            <Route path='/about' element={<Aziz />} />
            <Route path='/advantages' element={<Azizbek />} />
            <Route path='*' element={<NotFound />} />          
            </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;