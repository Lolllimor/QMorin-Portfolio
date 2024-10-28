'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { selectedWorkData } from '../../data';
import { WorkCard } from './work-card';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import useWindowSize from '@/hooks/useWindowSize';

export const SelectedWorks = () => {
  const windowSize = useWindowSize();
  return (
    <div className="w-full py-[clamp(0.5rem,6vw,4.5rem)] h-full ">
      {windowSize.width > 640 ? (
        <div className="flex flex-col gap-10 w-full">
          <div className="flex justify-between w-full items-center">
            <p className="text-[clamp(0.8rem,2vw,1.5rem)]">SELECTED WORKS</p>
            <div className="sm:hidden flex ">
              <ChevronLeft className="size-4" />
              <ChevronRight className="size-4" />
            </div>
          </div>
          <div className="flex overflow-auto h-full gap-[clamp(1rem,20vw,2rem)] no-scrollbar">
            {selectedWorkData.map((item, idx) => (
              <WorkCard
                type={item.type}
                name={item.name}
                imgSrc={item.imgSrc}
                link={item.link}
              />
            ))}
          </div>
        </div>
      ) : (
        <Carousel>
          <div className="flex flex-col gap-10 w-full">
            <div className="flex justify-between w-full items-center">
              <p className="text-[clamp(0.8rem,2vw,1.5rem)]">SELECTED WORKS</p>
              <div className="flex ">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </div>

            <CarouselContent className="flex gap-5">
              {selectedWorkData.map((item, idx) => (
                <CarouselItem className="basis-1/3 w-full">
                  <WorkCard
                    type={item.type}
                    name={item.name}
                    imgSrc={item.imgSrc}
                    link={item.link}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>
      )}
    </div>
  );
};
