'use client';

import { Button } from '@/components/ui/button';
import { robotoSlab } from '@/fonts/custom-fonts';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HeroMotion() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(id);
  }, []);

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:py-18 grid grid-cols-1 md:grid-cols-2 gap-10 items-center border-b-4 border-l-4">
      {/* Left: hero copy */}
      <div
        className={`transition-all duration-700 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        <h1 className={`text-3xl sm:text-4xl font-semibold leading-tight`}>
          Welcome to{' '}
          <span className={`text-red-500 ${robotoSlab.className}`}>Who&apos;s Hungry? </span>
        </h1>
        <p
          className={`mt-4 text-neutral-600 transition-opacity duration-700 ease-out ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: mounted ? '120ms' : '0ms' }}
        >
          Rice Meal and Pulutan problem? We got you.{' '}
          <span className="font-medium">#NaimasReturns</span>
        </p>

        <div
          className={`mt-6 flex gap-3 transition-all duration-700 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          style={{ transitionDelay: mounted ? '200ms' : '0ms' }}
        >
          <Link href="/menu">
            <Button className="rounded-full bg-red-500 cursor-pointer">See Menu</Button>
          </Link>
        </div>
      </div>

      {/* Right visuals: two tilted flyers with mount animations */}
      <div className="relative w-full">
        <div className="relative mx-auto w-full max-w-sm sm:max-w-md md:max-w-3xl aspect-[4/3]">
          {/* Left flyer */}
          <div
            className={`absolute z-10 left-[2%] md:left-[6%] top-1/2 -translate-y-1/2 w-[56%] transition-all duration-700 ease-out ${
              mounted ? 'opacity-100 rotate-[-15deg]' : 'opacity-0 -translate-x-3 rotate-[-22deg]'
            }`}
            style={{ transitionDelay: mounted ? '220ms' : '0ms' }}
          >
            <div className="relative aspect-[3/4] rounded-lg border border-neutral-200 overflow-hidden bg-white shadow-xl drop-shadow-lg">
              <Image
                src="/img/flyer1.png"
                alt="Flyer 1"
                fill
                sizes="(min-width:1024px) 480px, (min-width:768px) 50vw, 90vw"
                className="object-contain p-3"
                priority
              />
            </div>
          </div>

          {/* Right flyer */}
          <div
            className={`absolute z-20 right-[2%] md:right-[-10%] top-1/2 -translate-y-1/2 w-[56%] transition-all duration-700 ease-out ${
              mounted ? 'opacity-100 rotate-[12deg]' : 'opacity-0 translate-x-3 rotate-[20deg]'
            }`}
            style={{ transitionDelay: mounted ? '320ms' : '0ms' }}
          >
            <div className="relative aspect-[3/4] rounded-lg border border-neutral-200 overflow-hidden bg-white shadow-xl drop-shadow-lg">
              <Image
                src="/img/flyer2.png"
                alt="Flyer 2"
                fill
                sizes="(min-width:1024px) 480px, (min-width:768px) 50vw, 90vw"
                className="object-contain p-3"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
