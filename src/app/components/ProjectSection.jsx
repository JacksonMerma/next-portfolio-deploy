"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';

const projectsData = [
    {
        id: 1,
        title: "Chess Game",
        description: "Chess Game description",
        image: "/images/projects/chess-game.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Unu Map",
        description: "Unu Map description",
        image: "/images/projects/unuMap.png",
        tag: ["All"],
        gitUrl: "/",
        previewUrl: "/",
    },
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All");

    const handleTabChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    return (
        <section id='projects'>
            <h2 className='text-center text-4xl fon-bold text-white mt-4 mb-8 md:mb-12'>
                My Projects
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag onClick={handleTabChange} name="All" isSelected={tag === "All"} />
                <ProjectTag onClick={handleTabChange} name="Web" isSelected={tag === "Web"} />
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project) =>
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                )}
            </div>
        </section>
    );
};

export default ProjectSection