import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { navigationLinks } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [atHome, setAtHome] = useState(true); // State to track if the viewport is at the Home section

  useEffect(() => {
    const handleScroll = () => {
      // Attempt to access the home element, handle cases where the element might not exist
      const homeElement = document.querySelector('[name="home"]');
      if (homeElement) {
        const homeHeight = homeElement.clientHeight;
        const scrolled = window.scrollY;
        setAtHome(scrolled < homeHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed top-0 w-full z-30 ${atHome ? 'bg-[#121212] opacity-100' : 'bg-transparent opacity-75'} transition-opacity duration-300 ease-in-out flex items-center justify-between px-10 py-4`}>
      <div className="text-white font-bold">
        LORD AK7
      </div>
      <div className="hidden md:flex space-x-4">
        {navigationLinks.map((link) => (
          <a
            href={link.href}
            className="text-white hover:text-violet-500 transition-colors"
            key={link.name}
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose size={28} color="white" /> : <AiOutlineMenu size={28} color="white" />}
        </button>
        {isOpen && (
          <div className="absolute top-16 right-0 bg-[#121212] w-full px-10 py-4 flex flex-col items-center">
            {navigationLinks.map((link) => (
              <a
                href={link.href}
                className="text-white hover:text-violet-500 transition-colors my-2"
                key={link.name}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
