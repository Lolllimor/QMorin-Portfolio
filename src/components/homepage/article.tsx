"use client"
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import { articleData } from '@/src/data';
import { ArticleCard } from './artice-card';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import useWindowSize from '@/hooks/useWindowSize';

export const Article = () => {
  const windowSize = useWindowSize();
  return windowSize.width > 640 ? (
    <div className="py-[clamp(0.5rem,6vw,4.5rem)] flex gap-10 flex-col">
      <div className="flex justify-between w-full">
        <p className="text-[clamp(0.8rem,2vw,1.5rem)]">ARTICLES</p>
        <div className="sm:hidden flex ">
          <ChevronLeft className="size-4" />
          <ChevronRight className="size-4" />
        </div>
      </div>
      <ScrollArea className="w-full overflow-x-auto ">
        <div className="flex gap-[clamp(1rem,5vw,2.2rem)] no-scrollbar">
          {articleData.map((item, idx) => (
            <ArticleCard
              url={item.url}
              key={idx}
              name={item.name}
              paragraph={item.paragraph}
              topic={item.topic}
            />
          ))}
        </div>

        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
    </div>
  ) : (
    <Carousel>
      <div className="py-[clamp(0.5rem,6vw,4.5rem)] flex gap-10 flex-col">
        <div className="flex justify-between mr-[clamp(0.5rem,6vw,5rem)] ">
          <p className="text-[clamp(0.8rem,2vw,1.5rem)]">ARTICLES</p>
          <div className="flex ">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>

        <CarouselContent className="flex gap-2">
          {articleData.map((item, idx) => (
            <CarouselItem className="basis-1/2 w-full">
              <ArticleCard
                url={item.url}
                key={idx}
                name={item.name}
                paragraph={item.paragraph}
                topic={item.topic}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
    </Carousel>
  );
};
