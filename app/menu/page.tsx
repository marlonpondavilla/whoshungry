import RevealSection from '@/components/reveal-section';
import Image from 'next/image';

type MenuItem = {
  name: string;
  src: string;
  price: string;
  badge?: string;
};

const items: MenuItem[] = [
  { name: 'Creamy Pork Sisig', src: '/img/meal5.png', price: '₱139', badge: 'New' },
  { name: 'Crispy Sisig', src: '/img/meal6.png', price: '₱129' },
  { name: 'Pork Shanghai', src: '/img/meal4.png', price: '₱119', badge: 'Best Seller' },
  { name: 'Kalamares', src: '/img/meal3.png', price: '₱109' },
  { name: 'Creamy French Fries', src: '/img/meal2.png', price: '₱79' },
  { name: 'Bulk orders', src: '/img/meal1.png', price: 'Message us' },
];

export default function Menu() {
  return (
    <div className="min-h-screen text-neutral-900 flex flex-col relative isolate overflow-hidden">
      <div className="flex-1 relative z-10 overflow-y-visible">
        <RevealSection
          className="mx-auto max-w-6xl px-4 sm:px-6 py-8"
          threshold={0}
          rootMargin="0px"
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Menu</h1>
              <div className="mt-2 h-1 w-16 rounded-full bg-red-500" />
              <p className="mt-3 text-neutral-600">Choose on our new and best sellers.</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, idx) => (
              <div
                key={item.name}
                className="group relative rounded-xl border border-neutral-200 bg-white/70 backdrop-blur-sm shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    sizes="(min-width:1280px) 420px, (min-width:1024px) 33vw, (min-width:768px) 50vw, 90vw"
                    className="object-contain sm:object-contain transition-transform duration-300 ease-out will-change-transform group-hover:scale-[1.02]"
                    priority={idx < 2}
                  />
                  {item.badge ? (
                    <div className="absolute left-3 top-3">
                      <span className="rounded-full bg-red-500/90 text-white text-xs font-semibold px-3 py-1 shadow">
                        {item.badge}
                      </span>
                    </div>
                  ) : null}
                </div>
                <div className="px-4 py-3">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-medium text-neutral-800">{item.name}</h3>
                    <span className="text-sm font-semibold text-red-600">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </div>
  );
}
