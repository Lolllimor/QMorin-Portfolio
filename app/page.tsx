import { Footer } from '@/src/components/footer';
import { Article } from '@/src/components/homepage/article';
import { Bio } from '@/src/components/homepage/bio';
import { Gallery } from '@/src/components/homepage/gallery';
import { Hero } from '@/src/components/homepage/hero';
import { Navbar } from '@/src/components/homepage/navbar';
import { SelectedWorks } from '@/src/components/homepage/selected-works';
import { Tools } from '@/src/components/homepage/tools';
import { Works } from '@/src/components/homepage/works';

export default function Home() {
  return (
    <>
        <Hero />
        <Bio />
        <Works />
        <Tools />
        <SelectedWorks />
        <Gallery />
        <Article />
    </>
  );
}
