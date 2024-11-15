import React from 'react';
import '../assets/styles.css';

const Projects = () => {
    const projects = [
        {
            name: "Real Estate Website",
            description: "A responsive real estate page using react and bootstrap.",
            image: require("../assets/Real State.jpg"), // Add the image file in the public folder
            github: "https://github.com/Seif2004t/Real-State.git"
        },
        {
            name: "Tradex Website",
            description: "A website offering various services such as 'Onilne Marketing','Web Design', 'Graphic Design', 'Web development', 'Networking', 'Wordpress Theme'.",
            image: require("../assets/Tradex.jpg"), // Add the image file in the public folder
            github: "https://github.com/Seif2004t/Tradex.git"
        },
        {
            name: "AX IT Website",
            description: "Showcase site for a private business using HTML and CSS.",
            image: require("../assets/AX IT.jpg"), // Add the image file in the public folder
            github: "https://github.com/Seif2004t/AX-IT.git"
        },
    ];

    return (
        <section className="container my-5">
            <h2 className="section-title">Projects</h2>
            <div className="row">
                {projects.map((project, index) => (
                    <div key={index} className="col-md-4 d-flex align-items-stretch">
                        <div className="card mb-3">
                            <img src={project.image} className="card-img-top" alt={project.name} />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{project.name}</h5>
                                <p className="card-text">{project.description}</p>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
