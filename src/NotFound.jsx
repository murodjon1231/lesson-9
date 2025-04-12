import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-2xl mb-6">NotFound</p>
      <NavLink to="/" className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-lg transition duration-300">
        Home Pages
      </NavLink>
    </div>
  );
};

export default NotFound;
