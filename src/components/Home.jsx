import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.title = 'Talal Irfan | Portfolio';
  }, []);

  useEffect(() => {
    const path = location.pathname.replace('/', '') || 'home';
    const targetId = location.hash ? location.hash.slice(1) : path;
    const element = document.getElementById(targetId);

    if (element) {
      window.setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 30);
    }
  }, [location]);

  return (
    <>
      <section id="home" className="home">
        <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">
            Hi, I'm <span className="highlight">Talal Irfan</span>
          </h1>
          <h2 className="home-subtitle">
            Frontend Developer with Basic Backend Knowledge
          </h2>
          <p className="home-description">
            I am a passionate web development student focused on building modern, responsive and user-friendly websites. 
            I am continuously improving my frontend and backend skills to become a professional software engineer.
          </p>
          <div className="home-buttons">
            <button className="btn primary" onClick={() => navigate('/projects')}>
              View My Work
            </button>
            <button className="btn secondary" onClick={() => navigate('/contact')}>
              Get In Touch
            </button>
          </div>
        </div>
        <div className="home-visual">
          <div className="hero-shape">
            <div className="shape-circle"></div>
            <div className="shape-triangle"></div>
            <div className="shape-square"></div>
          </div>
        </div>
      </div>
    </section>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
