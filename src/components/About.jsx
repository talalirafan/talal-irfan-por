import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    document.title = 'Talal Irfan | About';
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate web development student with a strong focus on creating modern, 
              responsive, and user-friendly websites. My journey in web development began with a 
              curiosity about how websites work, and it has evolved into a dedicated pursuit of 
              mastering both frontend and backend technologies.
            </p>
            <p>
              Currently, I'm honing my skills in HTML, CSS, JavaScript, and React, while also 
              exploring backend technologies like databases and SQL. I believe in writing clean, 
              maintainable code and staying up-to-date with the latest industry trends and best practices.
            </p>
            <p>
              My goal is to become a professional software engineer who can build scalable, 
              efficient, and beautiful web applications that provide excellent user experiences. 
              I'm always eager to learn new technologies and take on challenging projects that 
              push my boundaries.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">6+</div>
              <div className="stat-label">Months Learning</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Technologies Learned</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
