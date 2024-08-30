import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BsChevronUp } from 'react-icons/bs';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const setMouseVariant = {
    text: () => console.log('Mouse enter'),
    default: () => console.log('Mouse leave')
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative h-screen w-full bg-[#000005]" id="contact">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col items-center justify-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black dark:text-white leading-tight -mt-10 w-full px-10 text-center sm:mt-0"
            onMouseEnter={setMouseVariant.text}
            onMouseLeave={setMouseVariant.default}
            id="contact"
          >
            Let&apos;s work together.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-3 text-lg text-zinc-400 lg:mt-4 lg:text-xl"
          >
            aditya.kamble@thegodofcomputers.com
          </motion.p>
          <motion.a
            variants={itemVariants}
            className="bg-[#A1A1AA] text-black hover:bg-white hover:text-black mt-4 rounded-2xl p-2 px-4 text-lg font-extrabold transition-all duration-300 lg:mt-6 lg:p-3 lg:px-6 lg:text-xl"
            href="mailto:aditya.kamble@thegodofcomputers.com"
          >
            Contact me
          </motion.a>
        </motion.div>

        <motion.button
          className="absolute bottom-20 flex flex-col items-center rounded-lg bg-transparent text-white p-2 font-sans text-lg transition-colors hover:bg-zinc-800"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <BsChevronUp />
          Back to the top
        </motion.button>

        <div className="absolute bottom-0 h-20 w-full">
          <div className="flex h-full w-full items-center justify-center gap-5 text-lg text-zinc-400 lg:text-xl">
            <p>© {getCopyrightYear()} Aditya Kamble</p>
            <a
              href="https://www.linkedin.com/in/aditya-kamble-007071228/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="scale-btn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/LordAK7"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="scale-btn"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

const getCopyrightYear = () => {
  const date = new Date();
  const year = date.getFullYear();

  return year;
};
