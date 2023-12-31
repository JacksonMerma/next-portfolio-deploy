"use client"
import React from 'react'
import GithubIcon from '../../../public/github-icon.svg'
import LinkedinIcon from '../../../public/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
    return (
        <section id='contact' className='grid my-12 md:my-12 py-24 gap-4'>
            <div className='z-10'>
                <h5 className='text-xl font-bold text-white my-2'>Let&apos;s Connect</h5>
                <p className='text-[#ADB7BE] mb-4'>
                    {" "}
                    I&apos;m currently loking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi.
                </p>
                <div className='socials flex flex-row gap-2 '>
                    <Link href="https://github.com/JackMerma">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/jackson-fernando-merma-portocarrero-284337214/">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default EmailSection
