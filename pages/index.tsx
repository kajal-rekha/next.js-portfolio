import About from "@/components/About";
import Contact from "@/components/Contact";
import Github from "@/components/Github";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
//import Services from "@/components/Services";
import Skills from "@/components/Skills";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <main>
        {/* <Services /> */}
        <Projects limit={6} />
        <Skills />
        <About />
        <Github />
        <Contact />
      </main>
    </div>
  );
};

export default HomePage;
