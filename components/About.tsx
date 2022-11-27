import React from 'react';
import { motion } from 'framer-motion';
import { PageInfo}  from '../typings'
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo
}
// Make text not take up as much of the width of the page //

function About({ pageInfo }: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    transition={{duration: 1.5}}
    whileInView={{ opacity: 1 }}
    className="flex flex-col relative h-fit min-h-screen overflow-auto text-center md:text-left md:flex-row lg:w-3/5 max-w-full px-10 justify-evenly lg:justify-center lg:content-center mx-auto items-center">
        <h3 className="absolute pb-10 top-0 uppercase tracking-[15px] text-gray-500 text-2xl">
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
        src={urlFor(pageInfo?.profilePic).url()}
        className="mb-20 md:nb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-tg md:w-64 md:h-95 xl:w-[256px] xl:h-[256px]"/>
        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl md:text-2xl font-semibold">Here is a <span className="underline">little</span> background
            </h4>
            <p  className="text-base overflow-auto"> {pageInfo?.backgroundInformation}</p>
        </div>
    </motion.div>
  )
}

export default About