import Image from 'next/image';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export const GalleryCard = ({
  name,
  hover,
  month,
  year,
  ImageSrc,
  classname,
}: {
  ImageSrc: string;
  hover: string;
  classname?: string;
  name: string;
  month: string;
  year: string;
}) => {
  return (
    <div className="w-[clamp(30rem,40vw,31rem)] h-[clamp(18rem,40vw,31rem)] brightness-50 hover:brightness-100 flex contain rounded-3xl transition-transform transform hover:z-20 overflow-hidden hover:border-white hover:border relative ">
      <Dialog>
        <DialogTrigger>
          <Image
            src={ImageSrc}
            alt={name}
            width={500}
            height={500}
            className="h-[clamp(20rem,40vw,31rem)] w-full rounded-[clamp(0.5rem,2vw,1.2rem)]  object-cover "
          />
          <div className="flex flex-col absolute bottom-[20px] left-[20px]">
            <p className=" text-left font-medium text-[clamp(0.4rem,1.8vw,1rem)]">
              {name}
            </p>
            <p className="font-bold text-left text-[clamp(0.2rem,2vw,0.8rem)]">
              {month}, {year}
            </p>
          </div>
        </DialogTrigger>
        <DialogContent className="p-0 sm:[&>button]:hidden w-fit flex justify-center items-center rounded-lg h-fit ">
          <div className=" w-fit max-h-[80vh] ">
            <Image
              src={hover}
              alt={name}
              height={100}
              width={200}
              className="w-fit h-full rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
