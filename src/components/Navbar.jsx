import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useAnimate, stagger, motion } from 'framer-motion';
import { navigationLinks } from '../constants';
import './Navbar.css';
import ParticleBackground from './ParticleBackground';

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => { 
    const menuAnimations = isOpen
      ? [
          [
            "nav.mobile-menu",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" }
          ]
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" }
          ],
          ["nav.mobile-menu", { transform: "translateX(-100%)" }, { at: "-0.1" }]
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" }
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" }
      ],
      ...menuAnimations
    ]);
  }, [isOpen]);

  return scope;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [atHome, setAtHome] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const homeElement = document.querySelector('#home');
      if (homeElement) {
        const homeHeight = homeElement.clientHeight;
        const currentScrollY = window.scrollY;
        setAtHome(currentScrollY < homeHeight);
        setScrolled(currentScrollY > 50);
        
        // Determine active section based on scroll position
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;
          if (currentScrollY >= sectionTop && currentScrollY < sectionTop + sectionHeight) {
            setActiveLink(`#${section.id}`);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scope = useMenuAnimation(isOpen);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-30 transition-all duration-300 ease-in-out flex items-center justify-between px-6 md:px-10 py-4 ${
        scrolled 
          ? 'backdrop-blur-md bg-black/60 shadow-lg shadow-violet-500/10 animated-navbar-bg' 
          : atHome ? 'bg-transparent' : 'bg-black/40 backdrop-blur-sm'
      }`}
    >
      {scrolled && <div className="absolute inset-0 overflow-hidden"><ParticleBackground /></div>}
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-white font-bold text-xl md:text-2xl relative z-10"
      >
        <span className="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent logo-glow">
          LORD AK7
        </span>
      </motion.div>
      
      <div className="hidden md:flex space-x-8 relative z-10">
        {navigationLinks.map((link, index) => (
          <motion.a
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            href={link.href}
            className={`text-white relative group py-2 nav-link-hover ${activeLink === link.href ? 'nav-link-active' : ''}`}
            key={link.name}
          >
            {link.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
        ))}
      </div>
      
      <div className="md:hidden relative z-10" ref={scope}>
        <button 
          onClick={toggleMenu}
          className="relative z-50 flex items-center justify-center w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm focus:outline-none hover:bg-black/50 transition-all duration-300"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-6 h-6">
            <span 
              className={`absolute h-0.5 w-6 bg-gradient-to-r from-violet-500 to-blue-500 rounded transform transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
              }`}
            />
            <span 
              className={`absolute h-0.5 w-6 bg-gradient-to-r from-violet-500 to-blue-500 rounded transform transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span 
              className={`absolute h-0.5 w-6 bg-gradient-to-r from-violet-500 to-blue-500 rounded transform transition-all duration-300 ${
                isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
              }`}
            />
          </div>
        </button>
        
        {isOpen && (
          <motion.nav 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu fixed inset-0 z-40 bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center"
          >
            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex flex-col items-center space-y-8"
            >
              {navigationLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1), duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    className={`text-white text-2xl font-medium hover:text-violet-500 transition-colors ${activeLink === link.href ? 'nav-link-active' : ''}`}
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
