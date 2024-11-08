'use client';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { galleryImages } from '@/src/data';
import { ArrowDownToLine, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const Gallery = () => {
  const [activeImage, setActiveImage] = useState<{
    hover: string;
    imageSrc: string;
    title: string;
    month: string;
    year: string;
  }>({ hover: '', imageSrc: '', title: '', month: '', year: '' });
  return (
    <div className="flex flex-wrap py-[clamp(1rem,10vw,6rem)] overflow-auto gap-[clamp(0.5rem,8vw,4rem)] justify-center">
      <Dialog>
        {galleryImages.map((item, idx) => (
          <div className="relative flex h-fit w-fit group" key={idx}>
            <DialogTrigger onClick={() => setActiveImage(item)}>
              <ExternalLink className="size-[clamp(0.5rem,2vw,1.5rem)] absolute top-[clamp(0.5rem,2vw,1rem)] left-[clamp(0.5rem,2vw,1rem)]" />
            </DialogTrigger>
            <DialogContent className="p-0  w-fit flex justify-center items-center rounded-lg h-fit">
              <div className="h-[80vh] w-[80vw]">
                <Image
                  src={activeImage.hover}
                  alt={activeImage.title}
                  height={100}
                  width={200}
                  className="w-full h-full rounded-lg"
                />
              </div>
            </DialogContent>
            <Image
              src={item.imageSrc}
              alt={item.title}
              height={200}
              width={200}
              className="rounded-[clamp(0.4rem,2vw,1rem)] w-full object-cover h-[clamp(15rem,45vw,38rem)]"
            />
            <a
              href={item.hover}
              download={item.title}
              className="cursor-pointer flex items-center absolute bottom-[clamp(0.5rem,2vw,1rem)] right-[clamp(0.5rem,2vw,1rem)] gap-1"
            >
              <ArrowDownToLine className="size-[clamp(0.5rem,2vw,1.5rem)]" />
              <p className="text-[clamp(0.5rem,2vw,1.2rem)] sm:group-hover:flex sm:hidden font-medium">
                Download
              </p>
            </a>
          </div>
        ))}
      </Dialog>
    </div>
  );
};

export default Gallery;
