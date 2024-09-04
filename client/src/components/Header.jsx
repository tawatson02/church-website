import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/New AFA Logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <nav className="border-gray-200 bg-oxfordBlue dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-12" alt="Logo" />
        </Link>
        <button 
          data-collapse-toggle="navbar-hamburger" 
          type="button" 
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-300 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
          aria-controls="navbar-hamburger" 
          aria-expanded="false"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-9 h-9" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full`} id="navbar-hamburger">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-oxfordBlue dark:bg-gray-800 dark:border-gray-700 shadow-lg">
            <li>
              <Link to="/" className="block py-3 px-4 text-gray-200 hover:text-white hover:bg-darkerBlue rounded transition duration-200 dark:bg-oxfordBlue dark:hover:bg-indigo-700 onClick={closeMenu}">Home</Link>
            </li>
            <li>
              <Link to="/staff" className="block py-3 px-4 text-gray-200 hover:text-white hover:bg-darkerBlue rounded transition duration-200 dark:bg-oxfordBlue dark:hover:bg-indigo-700 onClick={closeMenu}">Staff</Link>
            </li>
            <li>
              <Link to="/about" className="block py-3 px-4 text-gray-200 hover:text-white hover:bg-darkerBlue rounded transition duration-200 dark:bg-oxfordBlue dark:hover:bg-indigo-700 onClick={closeMenu}">About Us</Link>
            </li>
            <li>
              <Link to="/calendar" className="block py-3 px-4 text-gray-200 hover:text-white hover:bg-darkerBlue rounded transition duration-200 dark:bg-oxfordBlue dark:hover:bg-indigo-700 onClick={closeMenu}">Calendar</Link>
            </li>
            <li>
              <Link to="/children" className="block py-3 px-4 text-gray-200 hover:text-white hover:bg-darkerBlue rounded transition duration-200 dark:bg-oxfordBlue dark:hover:bg-indigo-700 onClick={closeMenu}">Children's Ministries</Link>
            </li>
            <li>
              <Link to="/youth" className="block py-3 px-4 text-gray-200 hover:text-white hover:bg-darkerBlue rounded transition duration-200 dark:bg-oxfordBlue dark:hover:bg-indigo-700 onClick={closeMenu}">Youth Ministries</Link>
            </li>
            <li>
              <Link to="/tithe" className="block py-3 px-4 text-gray-200 hover:text-white hover:bg-darkerBlue rounded transition duration-200 dark:bg-oxfordBlue dark:hover:bg-indigo-700 onClick={closeMenu}">Tithe</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
