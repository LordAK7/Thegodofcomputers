import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.45, // Trigger when 45% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section ref={ref}>
      <div className="p-10 text-center md:p-20" style={{ backgroundColor: '#000005' }}>
        <motion.p
          className="mt-8 text-3xl font-extrabold tracking-tight text-white lg:text-6xl"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          Want to{' '}
          <span
            className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent"
            style={{ background: 'linear-gradient(to right, #34d399, #10b981)', WebkitBackgroundClip: 'text', color: 'transparent' }}
          >
            work
          </span>{' '}
          with{' '}
          <span
            className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent"
            style={{ background: 'linear-gradient(to right, #34d399, #10b981)', WebkitBackgroundClip: 'text', color: 'transparent' }}
          >
            me
          </span>
          ?
        </motion.p>
        <motion.p
          className="mx-auto mt-4 text-base font-medium text-gray-300"
          style={{ whiteSpace: 'pre-line' }}
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          {'\n'}Labore libero saepe veniam quidem adipisci rem quisquam excepturi!
          {'\n'}Fugit non, dolor aperiam amet iusto.
        </motion.p>

        <form className="w-full max-w-xs mx-auto mt-8">
          <div className="flex flex-col w-full gap-2 lg:flex-row">
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <motion.input
              name="email"
              id="email-address"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              aria-describedby="emailHelp"
              required
              className="block w-full h-12 px-4 py-2 text-black duration-200 border rounded-lg appearance-none bg-white border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
              initial="hidden"
              animate={controls}
              variants={variants}
              transition={{ duration: 1, delay: 0.9 }}
            />
            <span id="emailHelp" className="sr-only">Please enter your email address to subscribe.</span>
            <motion.button
              type="submit"
              aria-label="Primary action"
              className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-black duration-200 bg-white md:w-auto rounded-xl hover:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial="hidden"
              animate={controls}
              variants={variants}
              transition={{ duration: 1, delay: 1.1 }}
            >
              Contact
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
