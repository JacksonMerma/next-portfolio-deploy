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
                <li>Tool 1</li>
                <li>Tool 2</li>
                <li>Tool 3</li>
                <li>Tool 4</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>collage 1</li>
                <li>collage 2</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>certification 1</li>
                <li>certification 2</li>
                <li>certification 3</li>
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

    return (
        <section id='about' className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="/images/about-section.jpeg" width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl fond-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        I'm a passionate programmer with 4 years of experience. I have a strong interest in areas sach as <strong>data science</strong>, <strong>backend development</strong>, <strong>algorithm development</strong>, <strong>AR/VR development</strong>, <strong>competitive programming</strong>, and others. I'm committed to continually pushing the boundaries of technology and contributing to the growth of the software industry.
                        <br/><br/>
                        Currently, I'm a part of the team at 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-cyan-500">
                        <a href='https://herostartup.com/'><strong> Hero Startup</strong></a>
                        </span>
                        , where I've gained valuable experience and had the opportunity to contribute to the project's success. However, my curiosity and desire for learning drive me to explore even further in the software industry and tackle exciting challenges in the future.
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