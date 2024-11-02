import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Profile />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
