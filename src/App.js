import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Navbar />
      <Hero />

      <main className="max-w-6xl mx-auto p-6 grid gap-8">
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;