import React from 'react'
import BackgroundSquares from './BackgroundCircles';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from 'next/link';
import { PageInfo } from "../typings";
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo
    
};

function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
    words: [
        `Hi my name is ${pageInfo?.name}, but you can call me Ky 👋`, 
        "My background is in Data & Charity.", 
        "Passionate about community & sustainability"
    ],
    loop: true,
    delaySpeed: 350,
});
  return ( <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundSquares />
        <img className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo.heroImage).url()}
        alt="Profile Picture" 
        />
        <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500  tracking-[7px]">
         {pageInfo?.role}
        </h2>
        <h1 className="text-2xl lg:text-2xl font-semibold px-10">  
        <span>{text}</span>
        <Cursor cursorColor="gray"/>
            </h1>

            <div className="pt-5">
                <Link href="#about">
                    <button className="heroButtons">About</button>
                </Link>
                <Link href="#experience">
                    <button className="heroButtons">Experience</button>
                </Link>
                <Link href="#skills">
                    <button className="heroButtons">Skills</button>
                </Link>
                <Link href="#projects">
                    <button className="heroButtons">Projects</button>
                </Link>
            </div>
        </div> 
    </div>
  );
}

export default Hero