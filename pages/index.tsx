import type { NextPage } from "next";
import Head from 'next/head'
import About from "../components/About";
import Header from '../components/Header';
import Hero from '../components/Hero';


export default function Home() {
  return (
    <div className="bg-[#f5F5f5] h-screen snap-y snap-proximity overflow-scroll z-0" >
      <Head>
        <title>Kyronne's Portfolio</title>
      </Head>
      
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start" >
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Exeprience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}

    </div>
  );
};