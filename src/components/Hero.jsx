// Import necessary modules from React and Framer Motion
import React from "react";
import { motion } from "framer-motion";
import './Hero.css';

// Define a Hero component
const Hero = () => {
  return (
    // Hero section container with custom background and fixed height
    <div>
      {/* Section 1: Hero background with fixed height (20vh) */}
      <section 
        className="custom-bg-fixed overflow-hidden relative h-[20vh] flex items-center justify-center"
      >
        {/* Container for Hero section with maximum width and margin auto */}
        <div className="relative w-full mx-auto max-w-7xl">
          {/* Inner container with flex layout for Hero section */}
          <div 
            className="relative flex flex-col w-full p-5 mx-auto lg:px-16 md:flex-row md:items-center md:justify-center md:px-6"
          >
            {/* Currently empty, can add content here */}
          </div>
        </div>
      </section>

      {/* Section 2: Hero banner with fixed height (75vh) */}
      <section className="custom-bg-fixed items-center justify-center flex h-[75vh]">
        {/* Container for Hero banner with padding and margin auto */}
        <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12 lg:py-48">
          {/* Motion container for Hero banner animation */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* Hero banner content container */}
            <div>
              {/* Hero tagline container with motion animation */}
              <motion.span 
                initial={{ scale: 0.8 }} 
                animate={{ scale: 1 }} 
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-auto px-6 py-3 rounded-full bg-white/5"
              >
                {/* Hero tagline text */}
                <span className="text-sm font-medium text-[#50d236]">This is a developer's portfolio</span>
              </motion.span>
              {/* Hero banner title */}
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="mt-8 text-3xl font-extrabold tracking-tight text-white lg:text-6xl"
              >
                Empowering Innovation 
                <span className="md:block">Through Code</span>
              </motion.p>
              {/* Hero banner description */}
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-slate-300"
              >
                Turning ideas into interactive digital experiences that have real world meaning.
              </motion.p>
            </div>
            {/* Call-to-action buttons/container */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col justify-center max-w-sm gap-3 mx-auto mt-10 sm:flex-row"
            >
              {/* Add buttons or links here */}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;