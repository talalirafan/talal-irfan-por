import React, { useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  useEffect(() => {
    document.title = 'Talal Irfan | Projects';
  }, []);

  const projects = [
    {
      title: 'Task App',
      description: 'A modern task management application built with React. Features include adding, editing, deleting tasks, and local storage persistence.',
      technologies: ['React', 'CSS', 'Local Storage']
    },
    {
      title: 'Chat App',
      description: 'A real-time chat application with modern UI. Includes user authentication, message history, and responsive design.',
      technologies: ['React', 'Firebase', 'CSS']
    },
    {
      title: 'Login System',
      description: 'A secure login and registration system with form validation, password hashing, and user session management.',
      technologies: ['React', 'Node.js', 'MongoDB']
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="section-divider"></div>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-actions">
                <button className="btn project-btn">View Project</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
