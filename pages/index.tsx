
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const HomePage = () => {
    return (
        <div> 
            <Hero />
            <main>
                <Projects limit={6} />
                <About /> 
                <Skills />
                <Contact />
            </main>
        </div>
    );
};

export default HomePage;
