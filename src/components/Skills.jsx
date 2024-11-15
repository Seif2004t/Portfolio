import React from 'react';
import '../assets/styles.css';

const Skills = () => {
    const skills = ["HTML", "CSS","JavaScript", "React", "Bootstrap", "Tailwind","JQuery"];

    return (
        <section className="container my-5">
            <h2 className="section-title">Skills</h2>
            <ul className="list-group list-group-horizontal justify-content-center">
                {skills.map((skill, index) => (
                    <li key={index} className="list-group-item m-1 bg-primary text-white rounded">
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
