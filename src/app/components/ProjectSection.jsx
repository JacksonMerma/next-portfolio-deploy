import React from 'react'
import ProjectCard from './ProjectCard'

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
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
]

const ProjectSection = () => {
    return (
        <section id='projects'>
            <h2 className='text-center text-4xl fon-bold text-white mt-4 mb-8 md:mb-12'>
                My Projects
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <button className='rounded-full border-2 border-green-500 px-6 py-3 text-xl cursor-pointer'>
                    All
                </button>
                <button className='rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer'>
                    Web
                </button>
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {projectsData.map((project) =>
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