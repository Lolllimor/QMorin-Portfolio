import Image from 'next/image';
import React from 'react';

export const MoreInfo = () => {
  return (
    <div className="flex sm:flex-row flex-col-reverse gap-10 sm:gap-0 ">
      <div className="gap-[clamp(0.5rem,5vw,3.8rem)] w-2/5 flex items-end ">
        <a
          href="https://www.instagram.com/quadmor/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <Image
            alt="img"
            height={65}
            width={65}
            className="h-[clamp(1rem,5vw,4rem)] w-[clamp(1rem,5vw,4rem)]"
            src="/images/insta.png"
          />
        </a>
        <a
          href="https://x.com/Quadmor_"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <Image
            alt="img"
            height={65}
            width={65}
            className="h-[clamp(1rem,5vw,4rem)] w-[clamp(1rem,5vw,4rem)]"
            src="/images/twit.png"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/quadmor/"
          className="cursor-pointer"
        >
          <Image
            alt="img"
            height={65}
            width={65}
            className="h-[clamp(1rem,5vw,4rem)] w-[clamp(1rem,5vw,4rem)]"
            src="/images/link.png"
          />
        </a>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex flex-col items-center ">
          <div className="w-0 mt-[-4px] h-0 border-l-[clamp(0.5rem,2vw,1rem)] border-r-[clamp(0.5rem,2vw,1rem)] border-t-[clamp(1rem,2vw,2rem)] border-solid border-transparent border-t-white"></div>
          <div className="border border-white border-dashed w-0 h-[clamp(0.5rem,5vw,2rem)]"></div>
          <div className="w-0 h-0 mb-[-4px] border-l-[clamp(0.5rem,2vw,1rem)] border-r-[clamp(0.5rem,2vw,1rem)] border-b-[clamp(1rem,2vw,2rem)]  border-solid border-transparent border-b-white"></div>
        </div>

        <div className="flex flex-1 bg-white flex-col gap-[clamp(0.2rem,5vw,0.8rem)] px-[clamp(0.5rem,5vw,2rem)] py-[clamp(0.8rem,5vw,3rem)] rounded-[clamp(0.8rem,5vw,2rem)]">
          <p className="text-[clamp(0.5rem,2vw,1.2rem)] font-medium text-black ">
            My passion for design traces back to my fascination with
            architecture. From an early age, I've been drawn to the process of
            creation, exploring various creative outlets.
          </p>
          <p className="text-[clamp(0.5rem,2vw,1.2rem)] font-medium text-black ">
            Over the past six years, I've delved into the creative industry,
            wearing multiple hats as an Art Director, Graphic Designer, 3D
            Designer, and Illustrator. Currently, I serve as a Product Designer,
            driven by the desire to enhance user experiences and inspire fellow
            professionals in the field.
          </p>
          <p className="text-[clamp(0.5rem,2vw,1.2rem)] font-medium text-black ">
            I am eager to contribute to making the world a better place through
            design innovation.
          </p>
        </div>
      </div>
    </div>
  );
};
