import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './assets/styles.css';

const App = () => {
    return (
        <div>
            <Header />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <footer className="footer">
                <p>© 2024 Seif's Portfolio. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;
