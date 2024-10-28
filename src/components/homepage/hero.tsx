import React from 'react';

export const Hero = () => {
  return (
    <section className="sm:min-h-[clamp(8rem,70dvh,50rem)] min-h-[22rem] pb-[clamp(0.8rem,8vw,4rem)] border-b flex items-end border-white gap-[clamp(3rem,_10vw,7.5rem)] ">
      <div className="flex gap-1 flex-col items-start h-full justify-end ">
        <p className="text-[clamp(1rem,10vw,8rem)] leading-none  font-medium">
          QUADRI
        </p>
        <p className="text-[clamp(2rem,12vw,9.3rem)] leading-none  font-medium">
          MORIN
        </p>
      </div>
      <div className=" justify-start">
        <p className="text-[clamp(0.5rem,3vw,1.5rem)] font-medium ">Lagos, Nigeria.</p>
      </div>
    </section>
  );
};
