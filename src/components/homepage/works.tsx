import { ExternalLink } from 'lucide-react';

export const Works = () => {
  return (
    <section className="flex  py-[clamp(0.5rem,6vw,4.5rem)] border-b border-white  max-[500px]:flex-col sm:gap-0 gap-6 mr-[clamp(0.5rem,6vw,5rem)]">
      <div className="flex justify-between w-2/3 h-full sm:border-r sm:border-white pr-3 ">
        <p className="text-[clamp(0.8rem,2vw,1.5rem)]">What I do</p>
        <ExternalLink className="sm:flex hidden rotate-180 scale-x-[-1]" />
      </div>
      <div className="grid grid-rows-2 w-full gap-[clamp(0.5rem,6vw,2.5rem)] sm:pl-10">
        <div className="grid gap-[clamp(0.5rem,2vw,1.25rem)] grid-cols-2 border-b pb-10  border-white">
          <div className="border-r border-white flex pr-4 flex-col gap-[clamp(0.5rem,2vw,1.25rem)]">
            <p className="text-[clamp(1rem,3vw,2rem)] font-normal ">
              UX Design
            </p>
            <p className="text-[clamp(0.7rem,2vw,1.2rem)] font-light">
              Crafting captivating digital experiences through creative design
              and technical expertise. One product at a time.
            </p>
          </div>
          <div className="gap-[clamp(0.5rem,2vw,1.25rem)] flex flex-col pl-3">
            <p className="text-[clamp(1rem,3vw,2rem)] font-normal ">
              Art Direction
            </p>
            <p className="text-[clamp(0.7rem,2vw,1.2rem)] font-light">
              Guiding visual storytelling with precision and flair. I elevate
              brands through artful visual style & communication.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="border-r border-white gap-[clamp(0.5rem,2vw,1.25rem)] pr-4 flex flex-col">
            <p className="text-[clamp(1rem,3vw,2rem)] font-normal ">
              Illustration
            </p>
            <p className="text-[clamp(0.7rem,2vw,1.2rem)] font-light">
              Transforming ideas & stories into vibrant digital masterpieces.
              Illustrating narratives with creativity and precision.
            </p>
          </div>
          <div className="gap-[clamp(0.5rem,2vw,1.25rem)] flex flex-col pl-3">
            <p className="text-[clamp(1rem,3vw,2rem)] font-normal ">
              Design Leadership
            </p>
            <p className="text-[clamp(0.7rem,2vw,1.2rem)] font-light">
              Fostering design excellence through leadership and mentorship,
              guiding aspiring designers toward their fullest potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
