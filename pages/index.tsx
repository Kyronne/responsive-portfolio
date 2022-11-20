import type { GetStaticProps, NextPage } from "next";
import Head from 'next/head'
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills }from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({pageInfo, experiences, projects, skills, socials}: Props) => {
  return (
    <div className="bg-[#f5F5f5] h-screen snap-y snap-proximity overfolow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-thumb-green-500" >
      <Head>
        <title>Kyronne's Portfolio</title>
      </Head>
      
      <Header socials={socials} />

      <section id="hero" className="snap-start" >
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>
      
      <section id="experience" className="snap-center">
        <WorkExperience /> 
      </section>

      
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id='contact' className="snap-start">
        <ContactMe />
      </section>

    </div>
  );
};

export default Home;


export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await  fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },

    revalidate: 200,
  }
};
