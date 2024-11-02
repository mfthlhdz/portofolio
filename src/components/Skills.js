import React from 'react';

function Skills() {
  const skillsData = [
    { name: 'JavaScript', icon: '🟨' },
    { name: 'UI/UX Design', icon: '🎨' },
    { name: 'Mobile Development', icon: '📱' },
    { name: 'Laravel', icon: '🔧' },
    { name: 'SQL', icon: '💾' },
    { name: 'HTML & CSS', icon: '🌐' },
    { name: 'ReactJS', icon: '⚛️' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Python', icon: '🐍' },
    { name: 'Bootstrap', icon: '📦' },
    { name: 'PHP', icon: '🐘' },
    { name: 'Java', icon: '☕' },
    { name: 'C', icon: '🔤' },         // Tambahkan C dengan ikon huruf untuk representasi umum
    { name: 'C++', icon: '➕➕' }      // Tambahkan C++ dengan ikon plus-plus untuk identifikasi
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-item" key={index}>
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
