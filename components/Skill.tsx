import { motion } from 'framer-motion';
import React from 'react';
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function skill({ skill, directionLeft}: Props) {
  return (<div className="group relative flex cursor-pointer">
    <motion.img 
    initial={{
      x: directionLeft ? -100 : 100,
      opacity: 0, }}
      transition={{duration: 1}}
      whileInView={{ opacity: 1, x: 0  }}
      src={urlFor(skill?.image).url()}
      className="rounded-full overflow-hidden border object-scale-down border-gray-500 w-20 h-20 md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
    />
      <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300
      ease-in-out group-hover:hg-bg-black h-20 w-20 md:h-28 md:w-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
        <p className="text-2xl font-bold text-orange-500">{skill.progress}%</p>
        </div>
    </div>
   </div>
  )
}

export default skill