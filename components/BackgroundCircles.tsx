import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function BackgroundCircles({}: Props) {
  return ( <motion.div
      initial={{
        opacity: 0,
      }} 
      animate={{
        scale: [1,1],
        opacity: [1, 0.6], 
      }}
      transition={{
        duration: 2.5,
      }}
    className="relative flex justify-center items-center"
    >
      <div className=" absolute border rounded-full border-teal-300 h-[500px] w-[500px] mt-52 animate-ping"/>
      <div className=" absolute border rounded-full border-gray-500 opacity-25 h-[500px] w-[500px] mt-52 animate-pulse"/>
    </motion.div>
  );
} 

export default BackgroundCircles;