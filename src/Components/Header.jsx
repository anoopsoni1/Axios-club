import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Join Us', path: '/join' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-13 flex items-center justify-between">
        <motion.div
          className="text-2xl font-extrabold tracking-wide text-orange-500"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Axios
        </motion.div>

      
        <ul className="hidden md:flex gap-8 font-semibold text-black">
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.05, color: '#f97316' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `${isActive ? 'text-orange-400' : 'text-black'}`
                }
              >
                {link.name}
              </NavLink>
            </motion.li>
          ))}
        </ul>

   
        <motion.div
          className="hidden md:flex items-center gap-3 font-semibold"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <span>Follow us:</span>
          <motion.img
            src="https://t4.ftcdn.net/jpg/03/92/71/99/360_F_392719944_L0LYv3e7QozB2tsj3CfUN0HPC8eZQOWb.jpg"
            alt="Instagram"
            width={75}
            height={75}
            className="rounded-full mt-1"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </motion.div>

      
        <motion.button
          className="md:hidden text-3xl font-bold text-black"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? '✕' : '☰'}
        </motion.button>
      </div>

  
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white px-4 py-6 shadow-md absolute top-16 left-0 right-0"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <ul className="flex flex-col gap-4 font-semibold text-lg">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 10, color: '#3b82f6' }}
                  transition={{ type: 'tween' }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block"
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
