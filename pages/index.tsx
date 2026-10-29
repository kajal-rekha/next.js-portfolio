import About from "@/components/About";
import Contact from "@/components/Contact";
import Github from "@/components/Github";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
//import Services from "@/components/Services";
import Skills from "@/components/Skills";

const HomePage = () => {
  return (
    <div className="overflow-x-clip">
      <Hero />
      <main>
        {/* <Services /> */}
        <Projects />
        <Skills />
        <About />
        <Github />
        <Contact />
      </main>
    </div>
  );
};

export default HomePage;
