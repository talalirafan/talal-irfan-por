import React, { useEffect } from 'react';
import './Skills.css';

const Skills = () => {
  useEffect(() => {
    document.title = 'Talal Irfan | Skills';
  }, []);

  const skillGroups = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 50 },
        { name: 'React', level: 45 }
      ]
    },
    {
      title: 'Backend & Data',
      skills: [
        { name: 'Node.js', level: 10 },
        { name: 'SQL', level: 70 },
        { name: 'MongoDB', level: 0 },
        { name: 'REST APIs', level: 20 }
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', level: 86 },
        { name: 'GitHub', level: 88 },
        { name: 'Vite', level: 0 },
        { name: 'VS Code', level: 40 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
          <div className="section-divider"></div>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-card">
              <h3 className="skill-title">{group.title}</h3>
              <div className="skills-list">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-row">
                    <div className="skill-row-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={skill.level}
                      readOnly
                      className="skill-slider"
                      aria-label={`${skill.name} proficiency ${skill.level}%`}
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
