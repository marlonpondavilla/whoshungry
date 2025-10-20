'use client';

import Image from 'next/image';
import { useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import RevealSection from '@/components/reveal-section';
import HeroMotion from '@/components/hero-motion';
import Autoplay from 'embla-carousel-autoplay';

export default function Home() {
  const autoplay = useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const slides = [
    { name: 'Bulk orders', src: '/img/meal1.png' },
    { name: 'Creamy French Fries', src: '/img/meal2.png' },
    { name: 'Kalamares', src: '/img/meal3.png' },
    { name: 'Pork Shanghai', src: '/img/meal4.png' },
    { name: 'Creamy Pork Sisig', src: '/img/meal5.png' },
    { name: 'Crispy Sisig', src: '/img/meal6.png' },
  ];

  // Dummy data for best sellers (replace with real data later)
  const bestSellers = [
    { name: 'French Fries', src: '/img/bestseller1.png' },
    { name: 'Pork Shanghai', src: '/img/bestseller2.png' },
    { name: 'Tofu Sisisg', src: '/img/bestseller3.png' },
    { name: 'Kalamares', src: '/img/bestseller4.png' },
  ];
  return (
    <div className="min-h-screen text-neutral-900 flex flex-col relative isolate overflow-hidden">
      {/* Background vertical text: fixed, bottom-to-top, behind content. */}
      <div
        aria-hidden
        className="pointer-events-none select-none fixed inset-y-0 right-[-1.5rem] md:right-[-2rem] lg:right-[-3rem] flex h-screen items-center justify-center z-0"
      >
        <span className="block uppercase font-extrabold tracking-tighter text-neutral-300/35 [writing-mode:vertical-rl] rotate-180 text-[7rem] sm:text-[9rem] md:text-[11rem] lg:text-[13rem] drop-shadow">
          Who&apos;s Hungry
        </span>
      </div>

      {/* Main content area */}
      <div className="flex-1 relative z-10 overflow-y-visible mt-12">
        {/* Section 1: hero with first-load animations */}
        <HeroMotion />

        {/* Section 2: reveal on scroll (block layout) with carousel */}
        <RevealSection className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          {/* Themed panel with subtle accent */}
          <div className="relative rounded-2xl border border-neutral-200 bg-white/70 backdrop-blur-sm shadow-sm p-6 sm:p-8 overflow-hidden">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">For Bulk Orders</h2>
              <div className="mt-2 h-1 w-16 rounded-full bg-red-500" />
              <p className="mt-3 text-neutral-600">
                Discover our mouthwatering comfort food made with love.
              </p>
            </div>

            <div className="mt-8">
              <Carousel
                className="mx-auto max-w-2xl"
                opts={{ loop: true }}
                plugins={[autoplay.current]}
              >
                <CarouselContent>
                  {slides.map((slide) => (
                    <CarouselItem key={slide.name}>
                      <div className="group flex flex-col items-center gap-3">
                        <div className="relative w-full aspect-[4/3] max-h-[320px] sm:max-h-[360px] md:max-h-[420px] rounded-xl border border-neutral-200 overflow-hidden bg-neutral-50">
                          {/* vertical textured strips on both sides */}
                          <div
                            aria-hidden
                            className="absolute left-0 top-0 bottom-0 w-[6px] sm:w-[8px] md:w-[10px] pointer-events-none"
                            style={{
                              backgroundImage:
                                'repeating-linear-gradient(to bottom, var(--brand-red) 0 14px, transparent 14px 28px)',
                              filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.15))',
                            }}
                          />
                          <div
                            aria-hidden
                            className="absolute right-0 top-0 bottom-0 w-[6px] sm:w-[8px] md:w-[10px] pointer-events-none"
                            style={{
                              backgroundImage:
                                'repeating-linear-gradient(to bottom, var(--brand-red) 0 14px, transparent 14px 28px)',
                              filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.15))',
                            }}
                          />
                          <Image
                            src={slide.src}
                            alt={slide.name}
                            fill
                            sizes="(min-width:1280px) 640px, (min-width:1024px) 560px, (min-width:768px) 520px, 90vw"
                            className="relative z-[1] object-contain transition-transform duration-300 ease-out will-change-transform group-hover:scale-[1.02]"
                            priority={false}
                          />
                        </div>
                        <span className="text-base text-neutral-800 font-semibold">
                          {slide.name}
                        </span>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="border border-neutral-200 bg-white/90 text-neutral-700 shadow-sm hover:bg-red-50" />
                <CarouselNext className="border border-neutral-200 bg-white/90 text-neutral-700 shadow-sm hover:bg-red-300" />
              </Carousel>
            </div>
          </div>
        </RevealSection>

        {/* Section 3: Best Sellers highlight */}
        <RevealSection className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold">See our Best Sellers</h2>
            <p className="mt-3 text-neutral-600">
              Pulutan o meryenda — you can’t go wrong with it.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {bestSellers.map((item) => (
              <div
                key={item.name}
                className="group relative rounded-xl border border-neutral-200 overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    sizes="(min-width:1024px) 560px, (min-width:768px) 50vw, 90vw"
                    className="object-cover sm:object-contain transition-transform duration-300 ease-out will-change-transform group-hover:scale-[1.02]"
                  />
                  {/* Top-left badge */}
                  <div className="absolute left-3 top-3">
                    <span className="rounded-full bg-red-500/90 text-white text-xs font-semibold px-3 py-1 shadow">
                      Best Seller
                    </span>
                  </div>
                  {/* Subtle gradient at bottom for text legibility */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/90 via-white/60 to-transparent" />
                </div>
                <div className="px-4 py-3 flex items-center justify-between">
                  <span className="font-medium text-neutral-800">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </div>
  );
}
