"use client";

import React from "react";

import MagicButton from "./ui/MagicButton";

const Resume = () => {
    const downloadResume = () => {
        const URL = ''
    }
    return (
        <section id="resume" className="pb-20">
        <h1 className="heading mt-10 pb-5">
            My Latest Resume
        </h1>
        <div className="flex justify-center text-center min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap">
            <div className="w-[90vw] max-w-full relative rounded-2xl border flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]">
                    <h3 className="text-sm md:text-lg leading-[1.6] text-white font-normal">
                        Want to download my latest resume?
                    </h3>
                    <a href='/Taylor Faraghers Resume.pdf' download='Taylor Faragher&#39;s Resume'>
                        <MagicButton 
                            title="Taylor Faragher's Resume.pdf"
                            icon=""
                            position=""
                        />
                    </a>
            </div>
        </div>
        </section>
    );
};

export default Resume;