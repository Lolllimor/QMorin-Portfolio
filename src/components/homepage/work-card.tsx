'use client';
import useWindowSize from '@/hooks/useWindowSize';

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

import { Button } from '../ui/button';
import Link from 'next/link';

export const WorkCard = (item: {
  type: string;
  name: string;
  imgSrc: string;
  link: string;
}) => {
  const windowSize = useWindowSize();

  return (
    <div
      key={item.name}
      className="flex flex-col justify-center h-fit items-center "
    >
      {windowSize.width > 640 ? (
        <div className="container">
          <div className="card-wrapper flip-right  ">
            <div className="card w-[clamp(10.5rem,30vw,24.5rem)] h-[clamp(12.5rem,40vw,24.5rem)] ">
              <div className="front flex flex-col hover:rounded-lg  border-white border gap-[10px] p-5">
                <p className="text-[clamp(0.5rem,2vw,1.2rem)] font-medium w-full text-center px-1">
                  {item.type.toUpperCase()}
                </p>
                <hr className="w-5" />
                <p className="text-[clamp(1rem,3vw,1.5rem)] px-1 text-center font-medium">
                  {item.name}
                </p>
              </div>
              <div className="back flex flex-col items-center p-5 h-full">
                <Image
                  src={item.imgSrc}
                  alt={item.name}
                  width={387}
                  height={285}
                  className="w-[clamp(20%,30vw,100%)] h-[clamp(8.9rem,25vw,17.5rem)] rounded-lg"
                />
                <Link href={item.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    className=" rounded-3xl px-[clamp(0.8rem,7vw,2rem)] py-[clamp(,0.5rem,7vw,2rem)] "
                    variant="white"
                  >
                    <div className=" flex gap-2">
                      <p className="font-semibold text-[clamp(0.5rem,2vw,1.1rem)]">
                        Open
                      </p>
                      <ExternalLink className=" md:size-5 size-3" />
                    </div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col items-center gap-5 h-full">
          <div className="h-[113px] overflow-hidden w-[113px]">
            <Image
              src={item.imgSrc}
              alt={item.name}
              width={300}
              height={143}
              className="rounded-lg h-full w-full"
            />
          </div>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <Button
              className=" flex rounded-3xl px-[clamp(0.8rem,7vw,2rem)]  gap-2 py-[clamp(0.5rem,3vw,1.2rem)] hover:bg-[#f0f0f0]"
              variant="white"
            >
              <p className="font-semibold text-[clamp(0.5rem,2.5vw,1.1rem)]">
                Open
              </p>
              <ExternalLink className="size-0" />
            </Button>
          </a>
        </div>
      )}
    </div>
  );
};
