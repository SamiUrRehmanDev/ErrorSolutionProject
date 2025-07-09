import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
// import Projects from './components/Projects';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        {/* <section id="projects">
          <Projects />
        </section> */}
        <section id="about">
          <About />
        </section>
        <section id="team">
          <Team />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}

export default App;