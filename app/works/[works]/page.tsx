'use client';
import { subWork } from '@/src/data';
import { ChevronRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { usePathname, useRouter } from 'next/navigation';

const SubWork = () => {
  const pathname = usePathname();
  const lastPathname = pathname
    ? decodeURIComponent(pathname.split('/').filter(Boolean).pop() as string)
    : '';
  const { back } = useRouter();
  return (
    <div className="py-[clamp(0.5rem,8vw,2rem)] flex  flex-col justify-start gap-[clamp(0.5rem,5vw,3rem)]">
      <div className=" flex items-center ">
        <p
          className="cursor-pointer text-[clamp(0.6rem,2vw,1rem)]"
          onClick={() => back()}
        >
          Works
        </p>
        <div className="flex gap-[clamp(0.2rem,1vw,0.5rem)] pl-[clamp(0.2rem,1vw,0.5rem)] items-center">
          <ChevronRight className="size-[clamp(0.5rem,2vw,0.8rem)]" />
          <p className="text-[clamp(0.6rem,2vw,1rem)] font-bold">
            {lastPathname}
          </p>
        </div>
      </div>
      <div>
        {Object.entries(subWork).map(([category, items]) => (
          <div key={category}>
            {category === lastPathname && (
              <div className="items-center flex flex-wrap gap-[clamp(1rem,8vw,4rem)] w-full h-full justify-center">
                {items.map((item, index) => (
                  <Link
                    href={item.link ?? '#'}
                    key={index}
                    className="flex flex-col h-full sm:w-full "
                  >
                    <div className="gap-3 flex items-center sm:border-white sm:border rounded-[clamp(2.2rem,5vw,5rem)] sm:w-full h-fit sm:p-[clamp(1.2rem,4vw,3rem)] justify-between sm:flex-row flex-col w-fit">
                      <div className="hidden sm:flex h-fit sm:h-full flex-col  justify-between w-2/3">
                        <p className="text-[clamp(0.5rem,3.5vw,3rem)] font-bold leading-tight ">
                          {item.title}
                        </p>
                        <div className="flex flex-col gap-[clamp(0.8rem,3vw,1.5rem)]">
                          <p className="text-[clamp(0.8rem,1.5vw,1.1rem)] line-clamp-3">
                            {item.paragraph}
                          </p>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center cursor-pointer text-[clamp(0.8rem,2vw,1.5rem)] gap-2 font-bold"
                          >
                            Open
                            <ExternalLink className="size-[clamp(0.8rem,2vw,1.5rem)]" />
                          </a>
                        </div>
                      </div>
                      <Image
                        src={item.img}
                        width={100}
                        height={100}
                        alt={item.title}
                        className="rounded-[clamp(0.6rem,3vw,2rem)] w-[clamp(9rem,20vw,19rem)] h-[clamp(9rem,20vw,19rem)] border border-white"
                      />
                      <p className="text-[12px] w-[170px] font-bold flex sm:hidden text-wrap text-center justify-center">
                        {item.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className=" flex items-center py-[clamp(1rem,5vw,2rem)] sm:hidden">
        <div className="ml-[-2px] w-0 h-0 border-solid border-transparent border-l-white border-t-[clamp(0.3rem,0.8vw,1rem)] border-b-[clamp(0.3rem,0.8vw,1rem)] border-l-[clamp(0.4rem,0.8vw,0.6rem)]"></div>

        <div className=" dashed-line"></div>
        <div className="w-0 h-0 border-solid border-transparent border-r-white mr-[-1px] border-t-[clamp(0.3rem,0.8vw,1rem)] border-b-[clamp(0.3rem,0.8vw,1rem)] border-r-[clamp(0.4rem,0.8vw,0.6rem)]"></div>
      </div>
    </div>
  );
};

export default SubWork;
