import { worksData } from '@/src/data';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Work = () => {
  return (
    <section className="flex flex-col w-full pt-[clamp(1rem,10vw,3rem)] ">
      <div className="mb-[clamp(2rem,20vw,20rem)] w-full sm:rounded-[clamp(0.8rem,30vw,3rem)] flex justify-between border border-white sm:p-[clamp(1rem,3vw,3rem)] sm:flex-row flex-col px-5 py-5 rounded-2xl sm:gap-0 gap-7">
        <p className=" text-[clamp(2rem,4.2vw,3.75rem)] font-medium sm:w-[clamp(10rem,38vw,35rem)] w-full">
          My love for Design started with Architecture
        </p>
        <div className="flex sm:items-end self-center">
          <div className=" grid grid-cols-2 grid-rows-2 p sm:gap-[clamp(1rem,2vw,2rem)] gap-6 ">
            {worksData.map((item, idx) => {
              return (
                <Link
                  key={item.title}
                  href={
                    item.title === 'UI/UX Design'
                      ? '/case-study'
                      : item.title === 'Brand Design'
                      ? '/works'
                      : item.url
                  }
                  className="h-full gap-2.5 flex flex-col group relative"
                >
                  <div className="border border-white h-[171px] w-[132px] flex items-end sm:w-[clamp(5rem,20vw,18.1rem)] sm:h-[clamp(5rem,28vw,24.9rem)] rounded-[clamp(0.5rem,3vw,1.2rem)]">
                    <ExternalLink
                      className="size-[clamp(0.5rem,2.5vw,2rem)] sm:hidden sm:group-hover:flex absolute flex top-[clamp(0.5rem,2vw,1.25rem)] right-[clamp(0.5rem,3vw,1.25rem)]"
                      color="#fff"
                    />

                    <div className="pb-[clamp(0.3rem,2vw,0.8rem)] pl-[clamp(0.4rem,2vw,1.25rem)]">
                      <Image
                        src={item.img}
                        alt={`${item.title} image`}
                        height={32}
                        width={32}
                        className="w-[clamp(2.2rem,6vw,5.5rem)] "
                      />
                    </div>
                  </div>
                  <p className="text-[clamp(0.7rem,2vw,1.5rem)] font-bold">
                    {item.title}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" flex items-center py-[clamp(1rem,5vw,2rem)] sm:hidden">
        <div className="ml-[-2px] w-0 h-0 border-solid border-transparent border-l-white border-t-[clamp(0.3rem,0.8vw,1rem)] border-b-[clamp(0.3rem,0.8vw,1rem)] border-l-[clamp(0.4rem,0.8vw,0.6rem)]"></div>

        <div className=" dashed-line"></div>
        <div className="w-0 h-0 border-solid border-transparent border-r-white mr-[-1px] border-t-[clamp(0.3rem,0.8vw,1rem)] border-b-[clamp(0.3rem,0.8vw,1rem)] border-r-[clamp(0.4rem,0.8vw,0.6rem)]"></div>
      </div>
    </section>
  );
};

export default Work;
