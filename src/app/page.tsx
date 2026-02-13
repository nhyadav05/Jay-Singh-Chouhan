

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import EducationSection from '@/components/Education';
import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/types';
import styles from '../styles/page.module.css';
import { DATA } from '@/data/portfolioData';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';


export default function Home() {
  
  return (
    <main className={styles.mainWrapper}>
      {/*  Global Background Blobs */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>

      {/* Content */}
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <EducationSection />
      <section id="projects" className={styles.projectsContainer}>
        <h3 className={`${styles.sectionTitle} reveal`}>
          <span className={styles.line}></span> Projects
        </h3>

        <div className={styles.projectsGrid}>
          {DATA.projects.map((project: Project, index: number) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>

      <Contact />
      {/* <Footer /> */}
    </main>
  );
}

