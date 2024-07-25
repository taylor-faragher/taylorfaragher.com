/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

export const InfiniteScrollingCards = ({
  companies,
  direction = "left",
  pauseOnHover = true,
  className,
}: {
  companies: {
    id: number;
    img: string;
    name: string;
    nameImg: string;
    imgClasses?: string;
    nameImgClasses?: string;
  }[];
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);


  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      //Duplicates the array items so that the carousel effect lasts longer
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
        containerRef.current.style.setProperty("--animation-duration", "40s")
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {companies.map((company, idx) => {
          return (
            <li className="flex flex-wrap items-center justify-center gap-4 md:gap-16" key={idx}>
              <div className="flex md:max-w-60 max-w-36 gap-2 items-center">
                  {company.img && (
                      <img
                          src={company.img}
                          alt={company.name}
                          className={`max-w-[48px] ${company.imgClasses}`}
                      />
                  )}
                  {company.nameImg && (
                      <img
                          src={company.nameImg}
                          alt={company.name}
                          className={`${company.nameImgClasses}`}
                      />
                  )}
                  {!company.nameImg && (
                      <h3 className={`text-2xl font-medium ${company.nameImgClasses}`}>{company.name}</h3>
                  )}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
};