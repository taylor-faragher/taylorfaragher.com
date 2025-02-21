"use client";

import React from "react";
import MagicButton from "./ui/MagicButton";
import { BackgroundGradientAnimation } from "./ui/GradientBackground";

const Resume = () => {
    return (
        <section id="resume" className="pb-16 md:pb-0">
            <div className="flex justify-center text-center min-w-full shrink-0 gap-16 py-4 flex-nowrap h-[45vh] lg:h-[35vh] xl:h-[35vh] w-auto">
                    
                <div className="w-[100vw] max-w-full sm:max-w-[85%] md:max-w-[80%] relative rounded-2xl border flex-shrink-0 border-slate-800 h-[336px] md:w-[70vw] overflow-hidden" data-test-id="testId">
                    <BackgroundGradientAnimation containerClassName="rounded-2xl h-[50vh]">
                        <h3 className="heading leading-[1.6] text-white font-normal z-50 pt-10 pb-5">
                            Looking for my latest resume?
                        </h3>
                        <h3 className="heading leading-[1.6] text-white font-normal z-50 pb-14">
                            Download it here!
                        </h3>
                        <a href='/Taylor Faraghers Resume.pdf' download='Taylor Faragher&#39;s Resume' className="z-50 ">
                            <MagicButton 
                                title="Taylor Faragher's Resume.pdf"
                                icon=""
                                position=""
                                buttonClasses="z-50 h-20 md:w-96 max-w-[90%]"
                                otherClasses="text-xl"
                            />
                        </a>
                    </BackgroundGradientAnimation>
                </div>
            </div>
        </section>
    );
};

export default Resume;