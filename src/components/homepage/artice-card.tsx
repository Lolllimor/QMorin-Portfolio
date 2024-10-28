import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const ArticleCard = ({
  name,
  topic,
  paragraph,
  url,
}: {
  name: string;
  topic: string;
  paragraph: string;
  url: string;
}) => {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      className="flex flex-col h-[clamp(13rem,45vw,24.5rem)] w-[clamp(12rem,40vw,25.9rem)] p-[clamp(1rem,2vw,2.1rem)] border border-white rounded-[clamp(0.6rem,2vw,1.5rem)] group"
    >
      <p className="text-[clamp(0.5rem,2vw,1rem)] font-medium ">{name}</p>
      <div className="pt-[clamp(0.4rem,5vw,1.5rem)] gap-[clamp(0.5rem,3vw,1.5rem)] flex flex-col mb-auto">
        <p className="text-[clamp(0.8rem,3vw,1.5rem)]  line-clamp-2 font-medium">
          {topic}
        </p>
        <p className="line-clamp-3 md:line-clamp-4 text-[clamp(0.4rem,2vw,1rem)] font-normal ">
          {paragraph}
        </p>
      </div>
      <div className="w-full flex justify-end ">
        <div className="flex items-center gap-[7px] ">
          <ExternalLink className=" md:size-5 size-3" />
          <div className="group-hover:block hidden">
            <p className="sm:flex hidden font-medium text-[clamp(0.8rem,5vw,1.2rem)] ">
              Read this article
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
