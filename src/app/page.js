'use client';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Featured from './components/Featured';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    // Check localStorage for theme on component mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.add(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    if (document.body.classList.contains('light__theme')) {
      document.body.classList.remove('light__theme');
      localStorage.removeItem('theme');
      setTheme('');
    } else {
      document.body.classList.add('light__theme');
      localStorage.setItem('theme', 'light__theme');
      setTheme('light__theme');
    }
  };

  return (
    <>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main>
        <Hero />
        <About />
        <Featured />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}