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
    <div className="bg-[#f5F5f5] h-screen snap-y p-2 snap-proximity overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-thumb-green-500" >
      <Head>
        <title>{pageInfo?.name}'s Portfolio</title>
      </Head>
      
      <Header socials={socials} />

      <section id="hero">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" >
        <About pageInfo={pageInfo} />
      </section>
      
      <section id="experience" >
        <WorkExperience experiences={experiences}/> 
      </section>

      
      <section id="skills" >
        <Skills skills={skills}/>
      </section>

      <section id="projects" className="lg:snap-center">
        <Projects projects={projects} />
      </section>

      <section id='contact'>
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
