"use client"
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";


const projectsData = [
    {
        id: 1,
        title: "Virtual Reality game: Statistics module",
        description: "This VR game enhances therapies for children with epileptic encephalopathy, allowing them to engage in therapeutic activities like virtual pizza-making. A notable feature is the collaborative implementation of a progress analysis module, enabling detailed monitoring of patient advancements during therapy sessions. This initiative underscores a shared commitment to improving therapies through innovative technology, offering a unique and engaging rehabilitation experience for these children.",
        image: "/images/projects/cepivirt.png",
        tag: ["All", "Desktop"],
        gitUrl: "null",
        previewUrl: "https://www.proquest.com/openview/7e21049be04640a4ca53fb9e01a36706/1?pq-origsite=gscholar&cbl=1006393",
    },
    {
        id: 2,
        title: "Conway's Game of Life",
        description: "Conway's Game of Life is an informative and inspirational project that explores the fascinating world of cellular automata. This project includes both 2D and 3D versions of the game, offering a unique and engaging perspective on emergent phenomena and computational experimentation. It invites exploration, creativity, and a deeper understanding of self-organizing systems, making it a valuable addition to the world of computer science and simulation.",
        image: "/images/projects/game-of-life.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/JackMerma/game-of-life",
        previewUrl: "https://conways-game-of-life-in-3d.vercel.app/",
    },
    {
        id: 3,
        title: "Unu Map",
        description: "UNU MAP is a web application that contains an interactive map where locations of endangered aquatic animals are marked, providing specific information about their name, scientific name, habitat, location, description, care, and an augmented reality view of the animal. This project aims to raise awareness through exploration of the Earth’s bodies of water about which aquatic animal species are in danger of becoming extinct.",
        image: "/images/projects/unuMap.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/DarwinJesusNeiraC/hackatonNasa",
        previewUrl: "null",
    },
    {
        id: 4,
        title: "Chess Game",
        description: "The chess game is a virtual platform that is part of a variety of games. Its purpose is to reinforce programming knowledge in Python through challenges in which users can solve problems to achieve the visualization of the pieces involved in these challenges. This platform has a look and mechanisms very similar to platforms like LeetCode, CodeChef, CodeForces, among others.",
        image: "/images/projects/chess-game.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/JackMerma/gamesProject",
        previewUrl: "null",
    },
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true});

    const handleTabChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id='projects'>
            <h2 className='text-center text-4xl fon-bold text-white mt-4 mb-8 md:mb-12'>
                My Projects
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag onClick={handleTabChange} name="All" isSelected={tag === "All"} />
                <ProjectTag onClick={handleTabChange} name="Web" isSelected={tag === "Web"} />
                <ProjectTag onClick={handleTabChange} name="Desktop" isSelected={tag === "Desktop"} />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) =>
                    <motion.li
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        key={index}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                )}
            </ul>
        </section>
    );
};

export default ProjectSection
