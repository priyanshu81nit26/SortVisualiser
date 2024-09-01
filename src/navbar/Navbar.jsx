import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky  left-0 w-full z-50 bg-gray-800 p-4 shadow-md rounded top-0 ">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        <div className="text-white text-lg font-bold">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500" : "text-white hover:text-blue-500"}>
            ALGO
          </NavLink>
        </div>
        <div className="hidden lg:flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-11">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500" : "text-white hover:text-blue-500"}>
            Home
          </NavLink>
          <NavLink to="/visualizer" className={({ isActive }) => isActive ? "text-blue-500" : "text-white hover:text-blue-500"}>
            Visualize
          </NavLink>
          <NavLink to="/readalgo" className={({ isActive }) => isActive ? "text-blue-500" : "text-white hover:text-blue-500"}>
            ReadAlgo
          </NavLink>
         
        </div>
        <div className="lg:hidden relative">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 px-6 py-3 rounded-b-3xl">
              <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "block text-blue-500" : "block text-white hover:text-blue-500"}>
                Home
              </NavLink>
              <NavLink to="/visualizer" onClick={closeMenu} className={({ isActive }) => isActive ? "block text-blue-500" : "block text-white hover:text-blue-500"}>
                Visualize
              </NavLink>
              <NavLink to="/readalgo" onClick={closeMenu} className={({ isActive }) => isActive ? "block text-blue-500" : "block text-white hover:text-blue-500"}>
                ReadAlgo
              </NavLink>
              
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;