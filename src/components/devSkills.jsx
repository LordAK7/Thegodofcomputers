import React from 'react';
import { motion } from 'framer-motion';
import matplotlibSVG from '/dev/matplotlib.svg';
import numpySVG from '/dev/numpy.svg';
import pandasSVG from '/dev/pandas.svg';
import pythonSVG from '/dev/python.svg';
import pytorchSVG from '/dev/pytorch.svg';
import tensorflowSVG from '/dev/tensorflow.svg';
import kerasSVG from '/dev/keras.svg';
import javaSVG from '/dev/java.svg';
import kubernetesSVG from '/dev/kubernetes.svg';
import opencvSVG from '/dev/opencv.svg';

const SkillBadge = ({ svg, name, className, size }) => (
  <motion.div
    initial={{ opacity: 0, y: 5 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 'all' }}
    transition={{ duration: 0.3 }}
  >
    <img
      src={svg}
      alt={name}
      className={className}
      style={{ height: size, width: 'auto' }}
    />
  </motion.div>
);

const DevSkills = () => {
  const logoSize = '63.99px'; // You can change this value to increase/decrease the size of all logos

  return (
    <>
      <div className="flex items-center justify-center bg-[#000005]">
        <div className="mb-12 flex w-full flex-wrap items-center justify-center gap-10 px-5 sm:mb-24 sm:w-4/5 sm:px-0 lg:gap-16 xl:w-3/5">
          <SkillBadge svg={pythonSVG} name="Python" size={logoSize} />
          <SkillBadge svg={numpySVG} name="NumPy" size={logoSize} />
          <SkillBadge svg={tensorflowSVG} name="TensorFlow" size={logoSize} />
          <SkillBadge svg={matplotlibSVG} name="Matplotlib" size={logoSize} />
          <SkillBadge svg={kerasSVG} name="Keras" size={logoSize} />
          <SkillBadge svg={pytorchSVG} name="PyTorch" size={logoSize} />
          <SkillBadge svg={pandasSVG} name="Pandas" size={logoSize} />
          <SkillBadge svg={opencvSVG} name="OpenCV" size={logoSize} />
          <SkillBadge svg={kubernetesSVG} name="Kubernetes" size={logoSize} />
          <SkillBadge svg={javaSVG} name="java" size={logoSize} />
        </div>
      </div>
      <div className="bg-[#000005] h-32"> {/* Adjust the height as needed */}
        {/* This div section is of color #121212 */}
      </div>
    </>
  );
};

export default DevSkills;
