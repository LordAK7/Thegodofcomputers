import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Project = () => {
  // Variable for padding
  const [padding, setPadding] = useState('gap-7'); // Default padding

  // Framer Motion animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4, // 40% of the viewport
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section className="bg-[#000005]">
      {/* Container */}
      <div ref={ref} className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* Component */}
        <div className="flex flex-col items-center">
          {/* Heading Div */}
          <motion.div
            className="mb-8 max-w-[800px] text-center md:mb-12 lg:mb-16"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="mb-4 mt-6 text-3xl font-extrabold text-white md:text-5xl"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              The latest and greatest news
            </motion.h2>
            <motion.p
              className="mx-auto mt-4 max-w-[528px] text-[#636262]"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              Lorem ipsum dolor sit amet elit ut aliquam
            </motion.p>
          </motion.div>
          {/* Blog Content */}
          <div className={`grid w-full grid-cols-1 ${padding} md:grid-cols-2 lg:grid-cols-3`}>
            {/* Blog Item */}
            <motion.a
              href="https://neo-saas.webflow.io/blog-posts/7-things-about-web-design-your-boss-wants-to-know"
              className="flex max-w-full flex-col gap-4 rounded-md px-4 md:px-2"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.img
                alt=""
                src="https://assets.website-files.com/646f6c0e32ec6f9ad7a4504c/646f6c1b66883bd637dfb14a_image9.jpeg"
                className="inline-block h-60 w-full rounded-2xl object-cover"
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { scale: 0.9 },
                  visible: { scale: 1 },
                }}
                transition={{ duration: 0.8 }}
              />
              <div className="flex h-full w-full flex-col items-start justify-around px-0 py-4">
                <div className="mb-4 flex flex-col items-start gap-4">
                  <motion.p
                    className="text-xl font-bold md:text-2xl text-white"
                    initial="hidden"
                    animate={controls}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    7 Things About Web Design Your Boss Wants To Know
                  </motion.p>
                  <div className="flex flex-col items-start md:flex-row lg:items-center">
                    <p className="text-sm text-[#636262]">Laila Bahar</p>
                    <p className="ml-2 mr-2 hidden text-sm text-[#636262] md:block">-</p>
                    <p className="text-sm text-[#636262]">6 mins</p>
                  </div>
                </div>
                <div className="rounded-md bg-[#121212] px-2 py-1.5 text-white hover:bg-[#3a3a3a]">
                  <p>Marketing</p>
                </div>
              </div>
            </motion.a>
            {/* Blog Item */}
            <motion.a
              href="https://neo-saas.webflow.io/blog-posts/7-of-the-best-examples-of-beautiful-blog-design"
              className="flex max-w-full flex-col gap-4 rounded-md px-4 md:px-2"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.img
                alt=""
                src="https://assets.website-files.com/646f6c0e32ec6f9ad7a4504c/646f6c1b66883bd637dfb14e_image14.jpeg"
                className="inline-block h-60 w-full rounded-2xl object-cover"
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { scale: 0.9 },
                  visible: { scale: 1 },
                }}
                transition={{ duration: 0.8 }}
              />
              <div className="flex h-full w-full flex-col items-start justify-around px-0 py-4">
                <div className="mb-4 flex flex-col items-start gap-4">
                  <motion.p
                    className="text-xl font-bold md:text-2xl text-white"
                    initial="hidden"
                    animate={controls}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    7 of the Best Examples of Beautiful Blog Design
                  </motion.p>
                  <div className="flex flex-col items-start md:flex-row lg:items-center">
                    <p className="text-sm text-[#636262]">Laila Bahar</p>
                    <p className="ml-2 mr-2 hidden text-sm text-[#636262] md:block">-</p>
                    <p className="text-sm text-[#636262]">6 mins</p>
                  </div>
                </div>
                <div className="rounded-md bg-[#121212] px-2 py-1.5 text-white hover:bg-[#3a3a3a]">
                  <p>Docs</p>
                </div>
              </div>
            </motion.a>
            {/* Blog Item */}
            <motion.a
              href="https://neo-saas.webflow.io/blog-posts/the-history-of-web-design"
              className="flex max-w-full flex-col gap-4 rounded-md px-4 md:px-2"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.img
                alt=""
                src="https://assets.website-files.com/646f6c0e32ec6f9ad7a4504c/646f6c1b66883bd637dfb144_image19.jpeg"
                className="inline-block h-60 w-full rounded-2xl object-cover"
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { scale: 0.9 },
                  visible: { scale: 1 },
                }}
                transition={{ duration: 0.8 }}
              />
              <div className="flex h-full w-full flex-col items-start justify-around px-0 py-4">
                <div className="mb-4 flex flex-col items-start gap-4">
                  <motion.p
                    className="text-xl font-bold md:text-2xl text-white"
                    initial="hidden"
                    animate={controls}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  >
                    The History Of Web Design
                  </motion.p>
                  <div className="flex flex-col items-start md:flex-row lg:items-center">
                    <p className="text-sm text-[#636262]">Laila Bahar</p>
                    <p className="ml-2 mr-2 hidden text-sm text-[#636262] md:block">-</p>
                    <p className="text-sm text-[#636262]">6 mins</p>
                  </div>
                </div>
                <div className="rounded-md bg-[#121212] px-2 py-1.5 text-white hover:bg-[#3a3a3a]">
                  <p>Payment</p>
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
