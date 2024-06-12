import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Dev = () => {
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
            I'm Also a God damn,
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
            <span 
              className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
              style={{ background: 'linear-gradient(to right, #a855f7, #7e22ce)', WebkitBackgroundClip: 'text', color: 'transparent' }}
            >
              Machine-learning&nbsp;
            </span>
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
            who likes to solve 
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
              real world
            </span> problems using..
          </motion.span>
        </motion.h2>
      </motion.div>
    </div>
  );
}

export default Dev;
