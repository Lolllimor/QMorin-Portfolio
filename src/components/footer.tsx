"use client"
import { usePathname } from 'next/navigation';
import React from 'react';

export const Footer = () => {
    const pathname = usePathname();
  return (
    <section className="flex flex-col pt-5 sm:p-6 p-0 h-full sm:mb-0 mb-5 mr-[clamp(0.5rem,6vw,5rem)]">
      <div className="flex flex-col sm:flex-row justify-between border-b border-white sm:h-72 h-full pb-10 sm:pb-0">
        <div className="flex sm:justify-between sm:flex-row sm:w-full flex-col sm:h-full h-fit gap-6 ">
          <div className="flex flex-col gap-[clamp(0.2rem,1vw,0.5rem)]">
            <p className="text-[clamp(1rem,3vw,1.3rem)] font-bold ">
              Quadri Morin
            </p>
            <p className="text-[clamp(0.5rem,3vw,0.9rem)] font-medium">
              Designer x Artist
            </p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p
              className={`text-[clamp(0.3rem,3vw,0.9rem)] hover:font-bold font-medium cursor-pointer ${
                pathname === '/' && '!font-bold !text-base sm:!text-lg'
              } `}
            >
              Home
            </p>
            <p
              className={`text-[clamp(0.3rem,3vw,0.9rem)] hover:font-bold font-medium cursor-pointer ${
                pathname.includes('works') && '!font-bold !text-lg'
              }  `}
            >
              Works
            </p>
            <p
              className={`text-[clamp(0.3rem,3vw,0.9rem)] hover:font-bold font-medium cursor-pointer ${
                pathname.includes('gallery') && '!font-bold !text-lg'
              } `}
            >
              Gallery
            </p>
            <p
              className={`text-[clamp(0.3rem,3vw,0.9rem)] hover:font-bold font-medium cursor-pointer ${
                pathname.includes('profile') && '!font-bold !text-lg'
              } `}
            >
              Profile
            </p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="text-[clamp(1rem,3vw,1.3rem)]  font-bold">Connect</p>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="              https://drive.usercontent.google.com/u/0/uc?id=18m4AO-PBBSi0Cyc0e7h_ZHEhpF_Z-2X5&export=download"
              className="text-[clamp(0.3rem,3vw,0.9rem)] font-medium hover:font-bold cursor-pointer  "
            >
              Download Resume
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href=" https://www.behance.net/quadrimorin"
              className="text-[clamp(0.3rem,3vw,0.9rem)] hover:font-bold font-medium cursor-pointer  "
            >
              Behance
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href=" https://dribbble.com/Quadmor"
              className="text-[clamp(0.3rem,3vw,0.9rem)] hover:font-bold font-medium cursor-pointer  "
            >
              Dribble
            </a>
          </div>
          <div className="gap-[24px] h-fit w-fit flex max-sm:gap-[10px]">
            <a
              href="https://www.instagram.com/quadmor/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer "
            >
              <img
                height={32}
                width={32}
                className="h-[clamp(1.2rem,3vw,2.1rem)]  sm:h-[clamp(1rem,3vw,2rem)] sm:hover:h-[clamp(1.2rem,5vw,2.2rem)] w-fit transition-all"
                src="/images/insta.png"
              />
            </a>
            <a
              href="https://x.com/Quadmor_"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img
                height={32}
                width={32}
                className="h-[clamp(1.2rem,3vw,2.1rem)]  sm:h-[clamp(1rem,3vw,2rem)] sm:hover:h-[clamp(1.2rem,5vw,2.2rem)] w-fit transition-all"
                src="/images/twit.png"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/quadmor/"
              className="cursor-pointer"
            >
              <img
                height={32}
                width={32}
                className="h-[clamp(1.2rem,3vw,2.1rem)]  sm:h-[clamp(1rem,3vw,2rem)] sm:hover:h-[clamp(1.2rem,5vw,2.2rem)] w-fit transition-all"
                src="/images/link.png"
              />
            </a>
          </div>
        </div>
      </div>
      <div className=" gap-[8px] pt-[clamp(1rem,3vw,2.1rem)] sm:flex hidden">
        <img
          src="/images/copywright.png"
          className="max-h-[16px]"
          height={16}
          width={16}
        />
        <p className="text-[clamp(0.4rem,3vw,0.72rem)] font-medium">2024</p>
        <p className="text-[clamp(0.4rem,3vw,0.72rem)] font-medium">
          Quadri Morin.
        </p>
        <p className="text-[clamp(0.4rem,3vw,0.72rem)] font-medium">
          All right reserved.
        </p>
      </div>
    </section>
  );
};
