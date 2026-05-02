import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { SkillsSection } from "@/components/SkillsSection";
import { Experience } from "@/components/Experienc";
import { Education } from "@/components/Education";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Education />
      <SkillsSection />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
