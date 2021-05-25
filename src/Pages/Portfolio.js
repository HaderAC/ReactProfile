import React from 'react';
import Project from "../Components/Projects";

const projectsArr = [
    {
        title: "Project 1",
        description: "",
        src: "./Screenshots/Screen\ Shot\ 2020-12-23\ at\ 7.32.59\ PM.png"
    },
    {
        title: "#Moods",
        description: "",
        src: "./Screenshots/Screen Shot 2020-12-23 at 7.33.11 PM.png"
    },
    {
        title: "Code Pub",
        description: "",
        src: "./Screenshots/CODEPUB LOGO - Final.png"
    },
    {
        title: "React User Directory",
        description: "",
        src: "./Screenshots/Screen Shot 2020-12-23 at 7.32.59 PM.png"
    },
    {
        title: "sites",
        description: "",
        src: "https://img.freepik.com/free-vector/coming-soon-message-illuminated-with-light-projector_1284-3622.jpg?size=338&ext=jpg"
    }
]

const Portfolio = () => {
    return (
        <div className="row">
            {projectsArr.map(project => (
                <Project 
                src={project.src}
                title={project.title}
                description={project.description}
                key={projectsArr.indexOf(project)}
                />
            ))}
        </div>
    );
};

export default Portfolio;