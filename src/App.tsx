import { useGsapReveal } from './hooks/useGsapReveal';
import { ContactPrefillProvider } from './hooks/useContactPrefill';
import Header from './components/Header';
import Hero from './components/Hero';
import Security from './components/Security';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Approach from './components/Approach';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useGsapReveal();

  return (
    <ContactPrefillProvider>
      <Header />
      <main>
        <Hero />
        <Security />
        <About />
        <Projects />
        <Services />
        <Experience />
        <Testimonials />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </ContactPrefillProvider>
  );
}
