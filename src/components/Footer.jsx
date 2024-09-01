/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../assets/react.svg"

function Footer() {
  return (
    <footer className="bg-gray-800 border-t-2 border-t-black py-2">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4">
        <div className="flex items-center mb-2 md:mb-0">
          <img src={Logo} alt="Logo" width="80px" />
        </div>
        <div className="flex space-x-6"> 
          <NavLink to="/" className={({ isActive }) => isActive ? "text-white" : "text-white hover:text-blue-500"}>
            Home
          </NavLink>
          <NavLink to="/visualizer" className={({ isActive }) => isActive ? "text-white" : "text-white hover:text-blue-500"}>
            Visualise
          </NavLink>
          <NavLink to="/readalgo" className={({ isActive }) => isActive ? "text-white" : "text-white hover:text-blue-500"}>
            ReadAlgo
          </NavLink>
        </div>
      </div>
      <div className="text-center text-sm text-gray-600 mt-2">
        &copy; Copyright 2024. All Rights Reserved by AlgoUi.
      </div>
    </footer>
  );
}

export default Footer;