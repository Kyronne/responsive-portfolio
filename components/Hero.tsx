import React from 'react'
import BackgroundSquares from './BackgroundCircles';
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

function Hero({}: Props) {
    const [text, count] = useTypewriter({
    words: [
        "Hi my name is Kyronne, but you can call me Ky 👋", 
        "Full Stack Dev", 
        "Passionate about community"
    ],
    loop: true,
    delaySpeed: 1500,
});
  return ( <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundSquares />
        <img className="relative rounded-full h-32 w-32 mx-auto object-cover"src="https://avatars.githubusercontent.com/u/57007690?v=4"
        alt="Profile Picture" 
        />
        <div></div> 
        <h1>   
        <span>{text}</span>
        <Cursor cursorColor="gray"/>
    </h1>
    </div>
  );
}

export default Hero