/* eslint-disable @next/next/no-img-element */
import { cn } from "@/utils/cn";
import { useState } from "react";
import MagicButton from "./MagicButton";
import { BackgroundGradientAnimation } from "./GradientBackground";
import GridGlobe from "./GridGlobe";

export const BentoGrid = ({className, children,}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto", className)}>
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    id,
    title,
    description,
    img,
    imgClassName,
    boxClassName,
    titleClassName,
    spareImg,
}: {
        className?: string;
        id: number;
        title?: string | React.ReactNode;
        description?: string | React.ReactNode;
        img?: string;
        imgClassName?: string;
        boxClassName?: string;
        titleClassName?: string;
        spareImg?: string;
    }) => {
    const leftLists = ["React", "JavaScript", "TypeScript"];
    const rightLists = ["Node.js", "AWS", "SQL"];

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const text = "faragher6@gmail.com";
        //This does not work on localhost with iOS devices. Needs to come from a https origin to work.
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 10000)
    };

    return (
    <div className={cn(
            "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.3] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
            className
        )}
        style={{
            background: "rgb(4,7,29)",
            backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}
    >
        <div className={`${id === 6 && "flex justify-center"} h-full`}>
            <div className="w-full h-full absolute">
                {img && (
                    <img
                        src={img}
                        alt={img}
                        className={cn(imgClassName, "object-center ")}
                    />
                )}
            </div>
            <div
                className={`absolute right-0 -bottom-5 ${id === 5 && "w-full"
                } `}
            >
                {spareImg && (
                <img
                    src={spareImg}
                    alt={spareImg}
                    width={220}
                    className="object-cover object-center w-full h-full"
                    data-test-id='TestId'
                />
                )}
            </div>
            {id === 6 && (
                <BackgroundGradientAnimation>
                    {copied && <div className="flex flex-row">
                        <img src="/confetti.gif" alt="confetti" className="w-52" data-test-id="confetti" /><img src="/confetti.gif" alt="confetti" className="w-52" />
                    </div>}
                </BackgroundGradientAnimation>
            )}

            <div
                className={cn(
                boxClassName,
                "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
                )}
            >
            <div className="font-sans font-extralight md:max-w-48 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                {description}
            </div>
            <div className={`font-sans text-lg lg:text-3xl font-bold z-20 ${titleClassName}`}>{title}</div>
                {id === 2 && <GridGlobe />}
                {id === 3 && (
                    <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                        <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                        {leftLists.map((item, i) => (
                            <span
                            key={i}
                            className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                            >
                            {item}
                            </span>
                        ))}
                        <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                        </div>
                        <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                            <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                            {rightLists.map((item, i) => (
                                <span
                                    key={i}
                                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                                    >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
                {id === 6 && (
                    <div className="mt-5">
                        <MagicButton
                            title={copied ? "Email is Copied!" : "Copy my email address"}
                            icon={''}
                            position=""
                            handleClick={handleCopy}
                            otherClasses="!bg-[#161A31]"
                        />
                    </div>
                )}
            </div>
        </div>
    </div>
    );
};
