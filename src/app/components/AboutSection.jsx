"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Data structures and algorithms</li>
                <li>Machine Learning, Neural Networks, Data Analysis</li>
                <li>Java, C/C++, Python, C#, JavaScript, Perl, Bash Script</li>
                <li>Git, GitHub, GitLab</li>
                <li>Linux, Google Colaboratory</li>
                <li>Vim/nvim</li>
                <li>Competitive Programming</li>
                <li>English (intermediate level)</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>National University of San Agustin (2020 - present)</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>NASA International Space Apps Challenge 2023 certification</li>
                <li>Meta Hacker Cup 2023 -
                    recognition for progressing to
                    Round 1</li>
                <li>Top 50 Argeniss Codeclash - Beecrowd 2022</li>
                <li>4th place in competitive programming contest -
                    Computer Science UNSA 2022</li>
                <li>4th place in My first
                    investigation - Catholic
                    University of Santa Maria 2019</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    const videoContainerStyle = {
        borderRadius: '10px',
        overflow: 'hidden',
    };

    return (
        <section id='about' className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <div className='container' style={videoContainerStyle}>
                    <video width={370} loop muted autoPlay className='video'>
                        <source
                            src='/videos/video.mp4'
                            type='video/mp4'
                        />
                    </video>
                </div>
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl fond-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        I&apos;m a passionate programmer with 4 years of experience. I have a strong interest in areas sach as <strong>data science</strong>, <strong>backend development</strong>, <strong>algorithm development</strong>, <strong>AR/VR development</strong>, <strong>competitive programming</strong>, and others. I&apos;m committed to continually pushing the boundaries of technology and contributing to the growth of the software industry.
                        <br /><br />
                        Currently, I&apos;m a part of the team at
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-500">
                            <a href='https://herostartup.com/'><strong> Hero Startup</strong></a>
                        </span>
                        , where I&apos;ve gained valuable experience and had the opportunity to contribute to the project&apos;s success. However, my curiosity and desire for learning drive me to explore even further in the software industry and tackle exciting challenges in the future.
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className='mt-8'>
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
