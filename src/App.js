import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";
import LeadershipTraining from "./components/LeadershipTraining";

function App() {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experience />
      <LeadershipTraining />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;