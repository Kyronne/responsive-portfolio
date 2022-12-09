import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity';
import { Experience } from "../typings"


type Props = {
  experience: Experience;
}

function ExperienceCard({ experience }: Props) {
  return (
  <article className="flex flex-col rounded-lg items-center  space-y-7 space-x-7 flex-shrink-0 w-[400px] md:w[500px] xl:w-[700px] snap-center bg-[#D7D1D1] p-10 hover:opacity-80 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden">
    <motion.img 
     initial={{ y: -100, opacity: 0 }}
     transition={{duration: 1.5}}
     whileInView={{ opacity: 1, y: 0  }}
     viewport={{ once: true}}
    className="w-32 h-32 rounded-full md:rounded-full xl:[w-200px] xl:h-[200px] object-cover object-start" src={urlFor(experience?.companyImage).url()} alt="company logos"
    />
    <div className="px=0 md:px-10">
        <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="flex space-x-2 my-2">{experience?.company}</p>
        <div className='flex space-x-2 my-2'>
            {experience.technologies.map((technology) =>(
              <img 
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology.image).url()}
              />
            ))}
        </div>
        <p className="uppercase py-5 text-black">
          {new Date(experience.dateStarted).toDateString()} - {" "}
          {experience.isCurrentlyWorkingHere
          ? "Present" 
          : new Date(experience.dateEnded).toDateString()}
          </p>

        <ul className="list-disc space-y-4 text-lg h-96  overflow-y-scroll scrollbar-thumb-green-500">
           {experience.points.map(point => (
            <li key={point}>{point}</li>
           ))}
        </ul>
    </div>
    </article>
  )
}

export default ExperienceCard