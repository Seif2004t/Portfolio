import React from 'react';
import '../assets/styles.css';

const About = () => {
    return (
        <section className="about-section container my-5 p-4 rounded shadow-lg">
            <div className="row align-items-center">
                <div className="col-md-4 text-center">
                    <img src={require("../assets/Profile.jpg")} alt="Profile" className="rounded-circle img-fluid about-img" />
                </div>
                <div className="col-md-8">
                    <h2 className="section-title">About Me</h2>
                    <p className="lead">
                        Hi! I'm <span className="text-primary font-weight-bold">Seif</span>, a passionate computer science student from Egypt,
                        specializing in <span className="font-italic">web development</span> and <span className="font-weight-bold">React</span>.
                    </p>
                    <p>
                        I love creating applications that are <strong>responsive</strong> and visually appealing, focusing on user-centered design
                        and seamless experiences. I'm continuously learning and eager to apply my skills to real-world projects.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
