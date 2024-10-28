import { galleryImages } from '../../data';
import { GalleryCard } from './gallery-card';

export const Gallery = () => {
  return (
    <div className="w-full py-[clamp(0.5rem,6vw,4.5rem)] border-white border-b h-full ">
      <div className="flex flex-col gap-10 w-full">
        <p className="text-[clamp(0.8rem,2vw,1.5rem)]">GALLERY</p>
        <div className="flex overflow-x-auto no-scrollbar space-x-[clamp(-150px,30vw,-120px)] ">
          {galleryImages.map((item, idx) => (
            <GalleryCard
              hover={item.hover}
              name={item.title}
              key={idx}
              month={item.month}
              year={item.year}
              ImageSrc={item.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
