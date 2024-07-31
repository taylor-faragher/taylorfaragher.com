/* eslint-disable @next/next/no-img-element */
import { projects } from "@/data";
import { companies } from "@/data";

import { PinContainer } from "./ui/PinContainer";
import { FaLocationArrow } from "react-icons/fa6";
import { InfiniteScrollingCards } from "./ui/InfiniteScrollingCards";

const RecentProjects = () => {
    return (
        <section id="projects">
            <h1 className="heading">
                A Small Selection of {' '}
                <span className="text-purple">Recent Projects</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-24 sm:gap-40 md:gap-38 lg:gap-24 mt-16">
                {projects.map(({id, title, des, img, iconLists, link}) => (
                    <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
                        <PinContainer title={title} href={link}>
                            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[30vh] lg:h-[25vh] mb-10">
                                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl" style={{ backgroundColor: "#13162D"}}>
                                    <img src="/bg.png" alt="bg-img" />
                                </div>
                                <img src={img} alt={title} className="z-10 absolute bottom-0" />
                            </div>
                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clmap-1 ">{title}</h1>
                            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">{des}</p>

                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {iconLists.map((icon, index) => (
                                        <div key={icon} className="border border-white/[0.2x] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" style={{transform: `translateX(-${5 * index * 2}px)`}}>
                                            <img src={icon} alt="cover" className="p-2" />
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="flex justify-center items-center">
                                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">See on Github</p>
                                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                                </div>
                            </div>            
                        </PinContainer>
                    </div>
                ))}
            </div>
            <h1 className="heading pb-5 pt-28">
                Additional 
                <span className="text-purple"> Skills and Technologies</span>
            </h1>

            <div className="flex flex-col items-center">
                <div
                className="h-[10rem] md:h-[10rem] rounded-md flex flex-col antialiased  items-center justify-between overflow-hidden"
                >
                <InfiniteScrollingCards
                    companies={companies}
                    direction="right"
                />
                </div>
            </div>
        </section>
    )
}

export default RecentProjects;