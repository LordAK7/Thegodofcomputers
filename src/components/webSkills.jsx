import React from 'react';
import { motion } from 'framer-motion';
import expressSVG from '../../public/assets/express.svg';
import framerMotionSVG from '../../public/assets/framermotion.svg';
import graphQLSVG from '../../public/assets/graphql.svg';
import mongoDBSVG from '../../public/assets/mongodb.svg';
import nestJSVG from '../../public/assets/nestjs.svg';
import nextSVG from '../../public/assets/nextjs.svg';
import nodeSVG from '../../public/assets/nodejs.svg';
import reactSVG from '../../public/assets/react.svg';
import recoilSVG from '../../public/assets/recoiljs.svg';
import socketIoSVG from '../../public/assets/socketio.svg';
import tailwindSVG from '../../public/assets/tailwindcss.svg';
import typescriptSVG from '../../public/assets/typescript.svg';
import webRTCSVG from '../../public/assets/webrtc.svg';

const SkillBadge = ({ svg, name, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 5 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 'all' }}
    transition={{ duration: 0.3 }}
  >
    <img
      src={svg}
      alt={name}
      className={className || 'h-10 w-auto md:h-12 lg:h-16'}
    />
  </motion.div>
);

const Skills = () => {
  return (
    <div className="flex items-center justify-center bg-[#000005]">
      <div className="mb-12 flex w-full flex-wrap items-center justify-center gap-10 px-5 sm:mb-24 sm:w-4/5 sm:px-0 lg:gap-16 xl:w-3/5">
        <SkillBadge svg={typescriptSVG} name="TypeScript" />
        <SkillBadge svg={nextSVG} name="Next.js" />
        <SkillBadge svg={reactSVG} name="React.js" />
        <SkillBadge svg={recoilSVG} name="Recoil.js" />
        <SkillBadge svg={nestJSVG} name="Nest.js" />
        <SkillBadge svg={expressSVG} name="Express.js" />
        <SkillBadge svg={nodeSVG} name="Node.js" />
        <SkillBadge svg={mongoDBSVG} name="MongoDB" />
        <SkillBadge svg={graphQLSVG} name="GraphQL" />
        <SkillBadge svg={socketIoSVG} name="Socket.io" />
        <SkillBadge svg={tailwindSVG} name="TailwindCSS" className="h-7 w-auto lg:h-10" />
        <SkillBadge svg={framerMotionSVG} name="Framer-motion" />
        <SkillBadge svg={webRTCSVG} name="WebRTC" className="h-7 w-auto lg:h-10" />
      </div>
    </div>
  );
};

export default Skills;
