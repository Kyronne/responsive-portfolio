import { motion } from 'framer-motion';
import { title } from 'process';
import React from 'react'
import { urlFor } from '../sanity';
import { Project } from "../typings"

type Props = {
    projects: Project[];
}

function Projects({ projects }: Props) {
    return (
     <motion.div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
     initial={{ opacity: 0 }}
     transition={{duration: 1.5}}
     whileInView={{ opacity: 1 }} >
        <h3 className="absolute top-0 uppercase tracking-[15px] text-gray-500 text-2xl">
            Projects</h3>
         <div className='relative flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {projects?.map((project, i) => (
                <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:-44 h-screen'>
                    <motion.img className='max-w-3xl md:max-w-xl'
                        initial={{
                            y: -300,
                            opacity: 0,
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y:0 }}
                        viewport={{ once: true}}
                     src={urlFor(project?.image).url()}
                     alt=""   
                    />

                    <div className='space-y-10 px-0 md:px-10 max-w'>
                        <h4 className='text-2xl font-semibold text-center'>
                         <span className='underline decoration-[#bfc1c2]/50'>
                            Case Study {i + 1} of {projects.length}:
                            </span>{" "}
                         {project?.Title}
                        </h4>
                        <div className="flex items-center space-x-2 justify-center">
                        {project.technologies.map(technology => (
                            <img 
                            className='h-8 w-8'
                            key={technology._id}
                            src={urlFor(technology.image).url()}
                            />
                        ))}
                        </div>
                        <p className='text-lg text-center md:text-left min-w-[60%]'>
                        {project?.summary}
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <div className="w-full absolute top-[30%] bg-[#D7D1D1] left-0 h-[500px] -skew-y-6">

        </div>
          </motion.div>
)};

export default Projects      