import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    transition={{duration: 1.5}}
    whileInView={{ opacity: 1 }}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
            About
        </h3>
        
        <motion.img
        initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true}}
        src="data:image/jpeg;base64,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" 
        className="-mb-20 md:nb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-tg md:w-64 md:h-95 xl:w-[256px] xl:h-[256px]"/>
        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">Here is a <span className="underline">little</span> background
            </h4>
            <p className="text-small">Full Stack Developer with a background in data and community development, 
            working for the leading charities & organisations in the third sector (TFL, Prince’s Trust, NCS, DWP). 
            I'm passionate about delivering user-centred approaches, utilising research, cross team collaboration & organisation to deliver the best websites and web apps. I have a keen interest in developing tools that can further human development. 
            </p>
            <p>
            I'm a member of several exciting organisations contributing my knowledge of tech, strategy & community engagement in my spare time.
            I’m currently part of a fellow of Kernel0x a community focused on using tech for good, its members include Forbes 30 under 30 and leaders within the tech space, with Vitalik Buterin being a contributor.
            </p>
        </div>
    </motion.div>
  )
}

export default About