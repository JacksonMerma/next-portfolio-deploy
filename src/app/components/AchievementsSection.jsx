"use client"
import React from 'react'
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(
    () => {
        return import('react-animated-numbers');
    },
    { ssr: false}
);

const achievementsList = [
    {
        metric: "Projects",
        value: "10",
        postfix: "+",
    },
    {
        prefix: "~",
        metric: "Users",
        value: "500"
    },
    {
        metric: "Awards",
        value: "7",
        postfix: "+",
    },
    {
        metric: "Years",
        value: "4"
    },
];

const AchievementsSection = () => {
    return (
        <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <div className='border-[#33353F] border rounded-md py-8 px-17 flex flex-row items-center justify-between flex-container'>
                {
                    achievementsList.map((achievement, index) => {
                        return (
                            <div key={index} className='flex flex-col items-center justify-center mx-4'>
                                <h2 className='text-white text-4xl font-bold flex flex-row'>
                                    {achievement.prefix}
                                    {achievement.value}
                                    {achievement.postfix}
                                </h2>
                                <p className='text-[#ADB7BE] text-base'>
                                    {achievement.metric}
                                </p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default AchievementsSection