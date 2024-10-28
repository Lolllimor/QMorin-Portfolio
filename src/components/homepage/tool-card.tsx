import Image from 'next/image';
import React from 'react';
import StarRating from './star-rating';

export const ToolCard = ({
  imageSrc,
  toolName,
  colImage,
  noOfYears,
  starImg,
  stars,
}: {
  imageSrc: string;
  toolName: string;
  colImage: string;
  noOfYears: string;
  stars: number;
  starImg: string;
}) => {
  return (
    <div className="group border border-white p-[clamp(0.8rem,2vw,1.5rem)] h-[clamp(5rem,40vw,19.2rem)] w-[clamp(7.6rem,30vw,14.5rem)] flex flex-col rounded-[clamp(0.8rem,0.5vw,1.5rem)] justify-between relative">
      <div className='group-hover:hidden transition-opacity duration-500 ease-in-out'>
        <Image
          src={imageSrc}
          width={48}
          height={48}
          alt={toolName}
          className="w-[clamp(1.5rem,2vw,2.5rem)]"
        />
      </div>
      <p className="text-[clamp(0.8rem,2vw,1.3rem)] group-hover:hidden hover:opacity-25 transition-opacity duration-500 ease-in font-normal text-left">
        {toolName}
          </p>
          <div className='hidden group-hover:flex flex-col justify-between h-full'>
              <Image src={colImage} width={88} height={88} className='w-[clamp(1.2rem,9vw,10rem)]' alt={toolName} />
              <div className='flex flex-col '>
                  <div className='flex'>
                      <StarRating value={stars} totalStars={5}/>
                  </div>
                  <p className='text-[clamp(0.8rem,2vw,1.2rem)] font-medium'>{ noOfYears}+ Years</p>
              </div>
          </div>
    </div>
  );
};
