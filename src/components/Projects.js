import React from 'react';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>Toko Online</h3>
          <p>Aplikasi e-commerce menggunakan Laravel dan Bootstrap untuk menampilkan produk, manajemen checkout, dan pembayaran.</p>
        </div>
        <div className="project-card">
          <h3>Aplikasi Quiz</h3>
          <p>Aplikasi permainan kuis lintas platform dengan fitur poin dan manajemen pengguna.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
