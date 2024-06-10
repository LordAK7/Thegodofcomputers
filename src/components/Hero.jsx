import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      {/* Change the height of this section as needed */}
      <section className="bg-[#000005] overflow-hidden relative h-[20vh] flex items-center justify-center">
        <div className="relative w-full mx-auto max-w-7xl">
          <div className="relative flex flex-col w-full p-5 mx-auto lg:px-16 md:flex-row md:items-center md:justify-center md:px-6">
            {/* Removed Windstatic text and related elements */}
          </div>
        </div>
      </section>

      {/* Change the height of this section as needed */}
      <section className="items-center justify-center bg-[#000005] flex h-[75vh]">
        <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12 lg:py-48">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-center"
          >
            <div>
              <motion.span 
                initial={{ scale: 0.8 }} 
                animate={{ scale: 1 }} 
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-auto px-6 py-3 rounded-full bg-white/5"
              >
                <span className="text-sm font-medium text-[#50d236]">This is a developer's portfolio</span>
              </motion.span>
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="mt-8 text-3xl font-extrabold tracking-tight text-white lg:text-6xl"
              >
                Some random text 
                <span className="md:block">would not like to be here</span>
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-slate-300"
              >
                Effortlessly create, pitch, and validate your early-stage business
                with our no-code landing page builder.
              </motion.p>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col justify-center max-w-sm gap-3 mx-auto mt-10 sm:flex-row"
            >
              {/* Add any buttons or links here */}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
