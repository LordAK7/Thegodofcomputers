import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { FaBriefcase, FaGraduationCap, FaProjectDiagram, FaStar, FaBook } from "react-icons/fa";
import { motion } from "framer-motion";

const Timeline = () => {
  const [expanded, setExpanded] = useState([true, true, true, true, true, true]);

  const toggleExpand = (index) => {
    setExpanded(expanded.map((exp, i) => (i === index ? !exp : exp)));
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom * 0.1 }, // Adjust the delay here
    }),
  };

  return (
    <div className="bg-[#121212] text-white p-8 relative">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">My experience over the years</h1>
        <div className="relative border-l border-gray-700">
          {/* Timeline Item 1 */}
          <motion.div
            className="mb-10 ml-4"
            initial="hidden"
            whileInView="visible"
            custom={0} // Custom value for delay
            variants={fadeInVariants}
            viewport={{ once: false }} // Set once to false to replay animation on every scroll
          >
            <div
              className="absolute w-3 h-3 bg-yellow-400 rounded-full mt-1.5 -left-1.5 border border-gray-700"
              title="Major Milestone"
            >
              <FaStar className="text-xs text-white" />
            </div>
            <div className="flex items-center mb-1 cursor-pointer" onClick={() => toggleExpand(0)}>
              <FaBriefcase className="text-gray-400 mr-2" />
              <div className="text-sm text-gray-400">January 2023</div>
            </div>
            <h2 className="text-2xl font-semibold">Timeline Heading 1</h2>
            {expanded[0] && (
              <p className="mt-2 text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            )}
            <div className="relative group mt-2 flex space-x-2">
              <span className="bg-red-500 text-gray-300 px-2 py-1 rounded-full text-xs">Work</span>
              <div className="absolute bottom-full left-0 mb-2 hidden w-48 p-2 bg-gray-700 text-white text-sm rounded-lg group-hover:block">
                Specific text about the work experience goes here.
              </div>
            </div>
          </motion.div>
          {/* Timeline Item 2 */}
          <motion.div
            className="mb-10 ml-4"
            initial="hidden"
            whileInView="visible"
            custom={1} // Custom value for delay
            variants={fadeInVariants}
            viewport={{ once: false }} // Set once to false to replay animation on every scroll
          >
            <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-gray-700"></div>
            <div className="flex items-center mb-1 cursor-pointer" onClick={() => toggleExpand(1)}>
              <FaGraduationCap className="text-gray-400 mr-2" />
              <div className="text-sm text-gray-400">February 2023</div>
            </div>
            <h2 className="text-2xl font-semibold">Timeline Heading 2</h2>
            {expanded[1] && (
              <p className="mt-2 text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            )}
            <div className="relative group mt-2 flex space-x-2">
              <span className="bg-blue-500 text-gray-300 px-2 py-1 rounded-full text-xs">Education</span>
              <div className="absolute bottom-full left-0 mb-2 hidden w-48 p-2 bg-gray-700 text-white text-sm rounded-lg group-hover:block">
                Specific text about the education experience goes here.
              </div>
            </div>
          </motion.div>
          {/* Timeline Item 3 */}
          <motion.div
            className="mb-10 ml-4"
            initial="hidden"
            whileInView="visible"
            custom={2} // Custom value for delay
            variants={fadeInVariants}
            viewport={{ once: false }} // Set once to false to replay animation on every scroll
          >
            <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-gray-700"></div>
            <div className="flex items-center mb-1 cursor-pointer" onClick={() => toggleExpand(2)}>
              <FaProjectDiagram className="text-gray-400 mr-2" />
              <div className="text-sm text-gray-400">March 2023</div>
            </div>
            <h2 className="text-2xl font-semibold">Timeline Heading 3</h2>
            {expanded[2] && (
              <p className="mt-2 text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            )}
            <div className="relative group mt-2 flex space-x-2">
              <span className="bg-green-500 text-gray-300 px-2 py-1 rounded-full text-xs">Project</span>
              <div className="absolute bottom-full left-0 mb-2 hidden w-48 p-2 bg-gray-700 text-white text-sm rounded-lg group-hover:block">
                Specific text about the project experience goes here.
              </div>
            </div>
          </motion.div>
          {/* Timeline Item 4 */}
          <motion.div
            className="mb-10 ml-4"
            initial="hidden"
            whileInView="visible"
            custom={3} // Custom value for delay
            variants={fadeInVariants}
            viewport={{ once: false }} // Set once to false to replay animation on every scroll
          >
            <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-gray-700"></div>
            <div className="flex items-center mb-1 cursor-pointer" onClick={() => toggleExpand(3)}>
              <FaBook className="text-gray-400 mr-2" />
              <div className="text-sm text-gray-400">April 2023</div>
            </div>
            <h2 className="text-2xl font-semibold">Timeline Heading 4</h2>
            {expanded[3] && (
              <p className="mt-2 text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            )}
            <div className="relative group mt-2 flex space-x-2">
              <span className="bg-purple-500 text-gray-300 px-2 py-1 rounded-full text-xs">Learning</span>
              <div className="absolute bottom-full left-0 mb-2 hidden w-48 p-2 bg-gray-700 text-white text-sm rounded-lg group-hover:block">
                Specific text about the learning experience goes here.
              </div>
            </div>
          </motion.div>
          {/* Timeline Item 5 */}
          <motion.div
            className="mb-10 ml-4"
            initial="hidden"
            whileInView="visible"
            custom={4} // Custom value for delay
            variants={fadeInVariants}
            viewport={{ once: false }} // Set once to false to replay animation on every scroll
          >
            <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-gray-700"></div>
            <div className="flex items-center mb-1 cursor-pointer" onClick={() => toggleExpand(4)}>
              <FaBook className="text-gray-400 mr-2" />
              <div className="text-sm text-gray-400">May 2023</div>
            </div>
            <h2 className="text-2xl font-semibold">Timeline Heading 5</h2>
            {expanded[4] && (
              <p className="mt-2 text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            )}
            <div className="relative group mt-2 flex space-x-2">
              <span className="bg-purple-500 text-gray-300 px-2 py-1 rounded-full text-xs">Learning</span>
              <div className="absolute bottom-full left-0 mb-2 hidden w-48 p-2 bg-gray-700 text-white text-sm rounded-lg group-hover:block">
                Specific text about the learning experience goes here.
              </div>
            </div>
          </motion.div>
          {/* Timeline Item 6 */}
          <motion.div
            className="mb-10 ml-4"
            initial="hidden"
            whileInView="visible"
            custom={5} // Custom value for delay
            variants={fadeInVariants}
            viewport={{ once: false }} // Set once to false to replay animation on every scroll
          >
            <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-gray-700"></div>
            <div className="flex items-center mb-1 cursor-pointer" onClick={() => toggleExpand(5)}>
              <FaBook className="text-gray-400 mr-2" />
              <div className="text-sm text-gray-400">June 2023</div>
            </div>
            <h2 className="text-2xl font-semibold">Timeline Heading 6</h2>
            {expanded[5] && (
              <p className="mt-2 text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            )}
            <div className="relative group mt-2 flex space-x-2">
              <span className="bg-purple-500 text-gray-300 px-2 py-1 rounded-full text-xs">Learning</span>
              <div className="absolute bottom-full left-0 mb-2 hidden w-48 p-2 bg-gray-700 text-white text-sm rounded-lg group-hover:block">
                Specific text about the learning experience goes here.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
