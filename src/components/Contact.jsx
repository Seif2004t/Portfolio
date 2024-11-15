import React from 'react';
import '../assets/styles.css';

const Contact = () => {
    return (
        <section className="container my-5 text-center bg-light-gradient p-4 rounded">
            <h2 className="section-title">Contact</h2>
            <p>Email: <a href="mailto:your.email@example.com" className="text-decoration-none">Seif2004t@gmail.com</a></p>
            <p>Phone: +20 1026019173</p>
            <p><a href="https://www.linkedin.com/in/seif-tamer-203b7926a" className="text-decoration-none">LinkedIn</a></p>
        </section>
    );
};

export default Contact;
