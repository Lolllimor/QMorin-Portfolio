'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import { ToolCard } from './tool-card';
import { toolData } from '../../data';

import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import useWindowSize from '@/hooks/useWindowSize';

export const Tools = () => {
  const windowSize = useWindowSize();
  const star = '/images/star.png';
  return (
    <section className="flex border-t mt-[clamp(0.5rem,2vw,4rem)]  py-[clamp(0.5rem,6vw,4.5rem)]  border-white w-full max-[500px]:flex-col sm:gap-0 gap-6">
      {windowSize.width > 640 ? (
        <div className="flex flex-col gap-10 w-full">
          <div className="flex justify-between w-full items-center">
            <p className="text-[clamp(0.8rem,2vw,1.5rem)]">TOOLS</p>
           
          </div>
          <ScrollArea className="w-full overflow-x-auto ">
            <div className="flex gap-5 no-scrollbar">
              {toolData.map((item, index) => (
                <ToolCard
                  starImg={star}
                  key={index}
                  noOfYears={item.noOfYears}
                  colImage={item.colImage}
                  imageSrc={item.image}
                  toolName={item.name}
                  stars={item.stars}
                />
              ))}
            </div>

            <ScrollBar orientation="horizontal" className="hidden" />
          </ScrollArea>
        </div>
      ) : (
        <Carousel>
          <div className="flex flex-col gap-10 w-full">
            <div className="flex justify-between w-full items-center">
              <p className="text-[clamp(0.8rem,2vw,1.5rem)]">TOOLS</p>
              <div className="flex ">
                <CarouselPrevious/>
                <CarouselNext/>
              </div>
            </div>
            <CarouselContent className='flex gap-5'>
                {toolData.map((item, index) => (
                  <CarouselItem className="basis-1/3 w-full">
                    <ToolCard
                      starImg={star}
                      key={index}
                      noOfYears={item.noOfYears}
                      colImage={item.colImage}
                      imageSrc={item.image}
                      toolName={item.name}
                      stars={item.stars}
                    />
                  </CarouselItem>
                ))}
            </CarouselContent>
          </div>
        </Carousel>
      )}
    </section>
  );
};
