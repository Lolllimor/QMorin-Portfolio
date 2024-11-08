import { caseStudyData } from '@/src/data';
import Image from 'next/image';
import { it } from 'node:test';

function CaseStudy() {
  return (
    <div className="flex flex-wrap gap-[clamp(2rem,8vw,5.3rem)] pt-[clamp(2rem,5vw,4rem)] pb-[clamp(8rem,10vw,10rem)] ">
      {caseStudyData.map((item, idx) => (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="gap-4 flex-col flex"
        >
          <p className="text-[clamp(0.5rem,2vw,1.4rem)] font-bold">
            {item.name}
          </p>
          <Image
            src={item.imgSrc}
            alt={item.name}
            width={100}
            height={100}
            className=" w-full object-fit h-[clamp(8rem,38vw,34rem)] rounded-lg"
          />
        </a>
      ))}
    </div>
  );
}

export default CaseStudy;
