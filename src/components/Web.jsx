import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Web = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const animationDuration = 0.5; // Change this value to adjust the speed of animation

  return (
    <div className="bg-[#000005] h-screen flex items-center justify-center px-8">
      <motion.div 
        ref={ref}
        className="text-center w-full mx-auto py-12 sm:px-6 lg:py-16 lg:px-8 z-20"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: { opacity: 1, scale: 1 }
        }}
        transition={{ duration: animationDuration, ease: 'easeInOut' }}
      >
        <motion.h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white dark:text-white leading-tight" 
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: { opacity: 1, scale: 1 }
          }}
          transition={{ duration: animationDuration, ease: 'easeInOut' }}
        >
          <motion.span 
            className="block"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: animationDuration, ease: 'easeInOut', delay: animationDuration * 0.5 }}
          >
            I'm Aditya, a
          </motion.span>
          <motion.span 
            className="block text-4xl sm:text-5xl lg:text-6xl text-[#ffffff]"
            initial="hidden"
            animate={controls}
            variants={{
               hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: animationDuration, ease: 'easeInOut', delay: animationDuration * 1 }}
          >
            Fullstack&nbsp;
            <span 
              className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
              style={{ background: 'linear-gradient(to right, #3b82f6, #2563eb)', WebkitBackgroundClip: 'text', color: 'transparent' }}
            >
              Developer
            </span>
          </motion.span>
          <motion.span 
            className="block text-4xl sm:text-5xl lg:text-6xl text-[#ffffff]"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: animationDuration, ease: 'easeInOut', delay: animationDuration * 1.5 }}
          >
            that creates interactive
          </motion.span>
          <motion.span 
            className="block text-4xl sm:text-5xl lg:text-6xl text-[#ffffff]"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: animationDuration, ease: 'easeInOut', delay: animationDuration * 2 }}
          >
            <span 
              className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
              style={{ background: 'linear-gradient(to right, #3b82f6, #2563eb)', WebkitBackgroundClip: 'text', color: 'transparent' }}
            >
              web
            </span> apps using..
          </motion.span>
        </motion.h2>
      </motion.div>
    </div>
  );
}

export default Web;
