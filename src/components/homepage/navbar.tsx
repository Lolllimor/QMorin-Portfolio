'use client';
import Link from 'next/link';
import NAV_LINKS from './navLinks';
import { Button } from '../ui/button';

import { AlignJustify } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col w-full pr-[clamp(0.5rem,6vw,5rem)]">
      <section
        id="navbar"
        className="flex items-center border-b-[1px] border-white h-fit py-4 w-full justify-between "
      >
        <Link href="/" className="flex items-center justify-center" passHref>
          <img
            alt="home"
            className="md:h-[31px] lg:h-[41px] max-[500px]:h-[21px] max-w-fit"
            src="/images/sig.png"
          />
          <span className="sr-only">Home</span>
        </Link>
        <ul className="list-none gap-[clamp(0.5rem,0.5vw,1rem)] flex-shrink md:flex hidden">
          {NAV_LINKS.map((item) => (
            <ol>
              <Link key={item.href} href={item.href} passHref>
                <Button
                  variant="transparent"
                  className={`text-[clamp(0.2rem,1.5vw,1rem)] max-[850px]:pl-0  text-white ${
                    pathname.includes(item.name) && 'font-bold'
                  }`}
                >
                  <p className=""></p>
                  {item.label}
                </Button>
              </Link>
            </ol>
          ))}
        </ul>
        <Button
          asChild
          className="rounded-[37px] hover:text-sm md:flex hidden"
          size="lg"
          variant="white"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/18m4AO-PBBSi0Cyc0e7h_ZHEhpF_Z-2X5/view?usp=sharing"
            className=" text-[clamp(0.8rem,1vw,1rem)] !font-bold"
          >
            View Resume
          </a>
        </Button>
        <div className="md:hidden flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="transparent" className=" rounded-lg" size="icon">
                <AlignJustify className="size-4 shrink-0" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              side="bottom"
              className="px-4 text-white  py-3 border rounded-none border-white shadow-[0_1px_2px_2px_rgba(0,0,0,0.3)] bg-[#2b2c2e]"
            >
              {NAV_LINKS.map((item, idx) => (
                <>
                  <DropdownMenuItem>
                    <a
                      href={item.href}
                      className={`${
                        pathname.includes(item.name) && 'font-bold'
                      }`}
                    >
                      {item.label}
                    </a>
                  </DropdownMenuItem>
                  {idx < NAV_LINKS.length - 1 && <DropdownMenuSeparator />}
                </>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>
    </div>
  );
};
