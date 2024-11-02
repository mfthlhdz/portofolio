import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1>MIFTAHUL HUDAIZA ASMARA LUBIS</h1>
      <nav>
        <a href="#profile">Profile</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
      </nav>
      <div className="contact-info">
        <a href="mailto:miftahul.hudaiza@gmail.com">📧</a>
        <a href="https://linkedin.com/in/mfthldz/" target="_blank" rel="noopener noreferrer">🔗</a>
      </div>
    </header>
  );
}

export default Header;
