import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="pt-36">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
                <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple"/>
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
            </div>
            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>
            <div className="flex justify-center relative mt-5 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">Welcome to my Professional Portfolio</p>

                    <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl" words="Building digital experiences with Node.js, React, and AWS" />

                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">Hi I&apos;m Taylor Faragher, </p>
                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">a Full Stack Software Engineer</p>
                    <Image src='/HeroShot.png' alt="Picture of Taylor Faragher" width={250} height={100} className="rounded-full mt-3 mb-6 lg:mb-0 " />
                    <a href="#projects">
                        <MagicButton title="Show My Work" icon={<FaLocationArrow />} position="right" buttonClasses="mt-10" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;