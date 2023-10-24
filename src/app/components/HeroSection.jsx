"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import useDownloader from "react-use-downloader";

const HeroSection = () => {

    const { size, elapsed, percentage, download,
        cancel, error, isInProgress } = useDownloader();

    const fileUrl = "/files/CV.pdf";
    const fileName = "CV.pdf";

    const handleHireMe = () => {
        window.location.href = "https://www.linkedin.com/in/jackson-fernando-merma-portocarrero-284337214/"
    };

    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
                            Hello, I'm {" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                "Jackson",
                                1000,
                                "Web developer",
                                1000,
                                "Data scientist",
                                1000,
                                "AR/VR developer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    Programming is like composing poetry in the language of machines, where each line of code is a verse and each program, a digital masterpiece.
                    </p>
                    <div>
                        <button
                            className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-green-500 via-cyan-500 to-blue-500 hover:bg-slate-200 text-white"
                            onClick={handleHireMe}
                        >
                            Hire Me
                        </button>
                        <button
                            className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-green-500 via-cyan-500 to-blue-500 hover:bg-slate-800 text-white mt-3"
                            onClick={() => download(fileUrl, fileName)}
                        >
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[300px] lg:h[300px] relative">
                        <Image
                            src="/images/avatar2-profile.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={400}
                            height={400}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;