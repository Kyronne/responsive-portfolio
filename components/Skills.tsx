import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill';
import { Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
}

function Skills({ skills }: Props) {
  return (

    <motion.div 
    initial={{ opacity: 0 }}
    transition={{duration: 1.5}}
    whileInView={{ opacity: 1 }}
    className="flex relative flex-col text-center md:text-left xl:flex-row max-w-full xl:px-10 
    h-auto min-h-screen overflow-auto justify-center mx-auto xl:space-y-0 items-center">
        <h3 className="absolute top-0 uppercase tracking-[15px] text-gray-500 text-2xl">
            Skills</h3>
        <h3 className="absolute top-8 uppercase tracking-[3px] text-gray-500 text-sm"> 
        Hover over a skill for current proficiency.</h3>
    
        <div className="absolute top-24 grid grid-cols-2 lg:grid-cols-3 gap-1 max-w-screen" >
            {skills?.slice(0, skills.length / 2).map(skill => (
              
            <Skill key={skill._id} skill={skill} />
            
            ))}

            {skills?.slice(skills.length / 2, skills.length).map(skill => (
              
            <Skill key={skill._id} skill={skill} directionLeft />
              
            ))}

          
        </div>
    </motion.div>

  )
}

export default Skills
