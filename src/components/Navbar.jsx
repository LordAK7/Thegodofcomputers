import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useAnimate, stagger } from 'framer-motion';

const navigationLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => { 
    const menuAnimations = isOpen
      ? [
          [
            "nav",
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
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }]
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

  useEffect(() => {
    const handleScroll = () => {
      const homeElement = document.querySelector('#home');
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

  const scope = useMenuAnimation(isOpen);

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
      <div className="md:hidden" ref={scope}>
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
