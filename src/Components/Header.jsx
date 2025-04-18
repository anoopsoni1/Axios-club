import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      
        <div className="text-xl font-bold">Axios</div>

  
        <ul className="hidden md:flex gap-8 font-semibold text-black">
        <li><NavLink to="" className={({isActive})=> 
         `${isActive ? "text-orange-400" : "text-black"}`}>Home</NavLink></li>
          <li><NavLink to="/about" className={({isActive})=> 
         `${isActive ? "text-orange-400" : "text-black"}`}>About</NavLink></li>
          <li><NavLink to="/team" className={({isActive})=> 
         `${isActive ? "text-orange-400" : "text-black"}`}>Team</NavLink></li>
          <li><NavLink to="/join" className={({isActive})=> 
         `${isActive ? "text-orange-400" : "text-black"}`}>Join Us</NavLink></li>
          <li><NavLink to="/contact" className={({isActive})=> 
         `${isActive ? "text-orange-400" : "text-black"}`}>Contact</NavLink></li>
        </ul>

      
        <div className="hidden md:flex items-center gap-3 font-semibold">
          <span>Follow us:</span>
            <img
              src="https://t4.ftcdn.net/jpg/03/92/71/99/360_F_392719944_L0LYv3e7QozB2tsj3CfUN0HPC8eZQOWb.jpg"
              alt="Instagram"
              width={75}
              height={75}
              className="rounded-full mt-1"
            />
        </div>

        <button
          className="md:hidden text-2xl font-bold text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-4 shadow-md">
          <ul className="flex flex-col gap-4 font-semibold">
            <li><NavLink to="/about" className="hover:text-blue-500">About</NavLink></li>
            <li><NavLink to="/team" className="hover:text-blue-500">Team</NavLink></li>
            <li><NavLink to="/join" className="hover:text-blue-500">Join Us</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-blue-500">Contact</NavLink></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
