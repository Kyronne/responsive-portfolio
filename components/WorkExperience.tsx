import { motion } from 'framer-motion';
import React from 'react'
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings'


type Props = {
  experiences: Experience[];
}

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
     initial={{ opacity: 0 }}
     transition={{duration: 1.5}}
     whileInView={{ opacity: 1 }}
     className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-0 uppercase tracking-[15px] text-gray-500 text-2xl">
            Experience 
        </h3> 

        <div className="w-full flex space-x-5 overflow-x-scroll top-24 p-20 snap-x snap-mandatory">
            {experiences?.map(experiences => (
            <ExperienceCard key={experiences._id} experience={experiences}  />
            ))}

        </div>
    </motion.div>
  )
}

export default WorkExperience;