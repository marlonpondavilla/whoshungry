import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { robotoSlab } from "@/fonts/custom-fonts";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import RevealSection from "@/components/reveal-section";

export default function Home() {
  const slides = [
    { name: "Meal 1", src: "/img/meal1.png" },
    { name: "Meal 2", src: "/img/meal2.png" },
    { name: "Meal 3", src: "/img/meal3.png" },
    { name: "Meal 4", src: "/img/meal4.png" },
    { name: "Meal 5", src: "/img/meal5.png" },
    { name: "Meal 6", src: "/img/meal6.png" },
  ];
  return (
    <div className="min-h-screen text-neutral-900 flex flex-col relative isolate overflow-hidden">
      {/* Header: logo + navigation */}
      <Header />

      {/* Background vertical text: fixed, bottom-to-top, behind content. */}
      <div
        aria-hidden
        className="pointer-events-none select-none fixed inset-y-0 right-[-1.5rem] md:right-[-2rem] lg:right-[-3rem] flex h-screen items-center justify-center z-0"
      >
        <span
          className="block uppercase font-extrabold tracking-tighter text-neutral-300/35 [writing-mode:vertical-rl] rotate-180 text-[7rem] sm:text-[9rem] md:text-[11rem] lg:text-[13rem] drop-shadow"
        >
          Who&apos;s Hungry
        </span>
      </div>

      {/* Main: two columns - left hero text, right image */}
  <main className="flex-1 relative z-10 overflow-y-visible mt-12">
        {/* Section 1: hero (full screen height) */}
          <section className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:py-18 grid grid-cols-1 md:grid-cols-2 gap-10 items-center border-b-4 border-l-4">
          {/* Left: hero copy area (use your pasted content here) */}
          <div>
            <h1 className={`text-3xl sm:text-4xl font-semibold leading-tight`}>Welcome to <span className={`text-red-500 ${robotoSlab.className}`}>Who&apos;s Hungry? </span></h1>
            <p className="mt-4 text-neutral-600">Rice Meal and Pulutan problem? We got you. <span className="font-medium">#NaimasReturns</span></p>

            {/* Buttons (optional) */}
            <div className="mt-6 flex gap-3">
              <Button className="rounded-full bg-red-500 cursor-pointer">See Menu</Button>
              <Button variant={"outline"} className="rounded-full cursor-pointer">Services</Button>
            </div>
          </div>

          {/* Right: two flyers, close together and slightly tilted */}
          <div className="relative w-full">
            <div className="relative mx-auto w-full max-w-3xl aspect-[4/3]">
              {/* Left flyer */}
                <div className="absolute z-10 left-[6%] top-1/2 -translate-y-1/2 w-[56%] rotate-[-15deg]">
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
                <div className="absolute z-20 right-[-10%] top-1/2 -translate-y-1/2 w-[56%] rotate-[12deg]">
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

        {/* Section 2: reveal on scroll (block layout) with carousel */}
          <RevealSection className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-semibold">Cravings Start Here</h2>
              <p className="mt-3 text-neutral-600">Tingin pa lang, busog na!</p>
            </div>

            <div className="mt-8">
              <Carousel className="mx-auto max-w-xl sm:max-w-2xl">
                <CarouselContent>
                  {slides.map((slide) => (
                    <CarouselItem key={slide.name}>
                      <div className="group flex flex-col items-center gap-3">
                        <div className="relative w-full aspect-[4/3] max-h-[320px] sm:max-h-[360px] md:max-h-[420px] rounded-xl border border-neutral-200 overflow-hidden">
                          <Image
                            src={slide.src}
                            alt={slide.name}
                            fill
                            sizes="(min-width:1280px) 640px, (min-width:1024px) 560px, (min-width:768px) 520px, 90vw"
                            className="object-contain transition-transform duration-300 ease-out will-change-transform group-hover:scale-[1.02]"
                            priority={false}
                          />
                        </div>
                        <span className="text-sm text-neutral-600">{slide.name}</span>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </RevealSection>
      </main>

      {/* Footer (minimal) */}
      <footer className="w-full py-6 text-center text-sm text-neutral-500 border-t border-neutral-200 tracking-wide italic">
        <p className="hover:text-neutral-700 underline">Open Daily 9am-10pm
        300A Lovely Street, Canalate, Malolos, Bulacan. Pick up or Deliver thru FMRG
        </p>
      </footer>
    </div>
  );
}