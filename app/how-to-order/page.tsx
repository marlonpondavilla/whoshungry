import Link from 'next/link';
import RevealSection from '@/components/reveal-section';
import {
  ShoppingCart,
  Search,
  MessageSquare,
  CalendarCheck,
  Wallet,
  ArrowRight,
} from 'lucide-react';

export const metadata = {
  title: "How to Order | Who's Hungry?",
  description: 'Simple steps to place your order with us.',
};

export default function HowToOrderPage() {
  return (
    <div className="min-h-screen text-neutral-900 mt-8">
      <RevealSection className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-3xl">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">How to Order</h1>
          <div className="mt-2 h-1 w-16 rounded-full bg-red-500" />
          <p className="mt-3 text-neutral-600">
            Fast and easy. Follow these steps and we’ll take care of the rest.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:gap-6">
          {/* Step 1 */}
          <div className="group flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
              <Search size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 text-white text-xs font-semibold">
                  1
                </span>
                <h2 className="font-semibold text-neutral-900">Browse our Menu</h2>
              </div>
              <p className="mt-1 text-sm text-neutral-600">
                Explore our selections and note the items you want.
              </p>
              <div className="mt-3">
                <Link
                  href="/menu"
                  className="inline-flex items-center rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-800 shadow-sm transition-colors hover:bg-red-50"
                >
                  <ShoppingCart size={16} className="mr-1.5" /> Go to Menu
                </Link>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
              <MessageSquare size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 text-white text-xs font-semibold">
                  2
                </span>
                <h2 className="font-semibold text-neutral-900">Send us your order</h2>
              </div>
              <p className="mt-1 text-sm text-neutral-600">
                Message us with the items, quantity, pickup/delivery preference, name, and contact
                number.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <Link
                  href="https://www.facebook.com/whoshungryyyy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-800 shadow-sm transition-colors hover:bg-red-50"
                >
                  Facebook <ArrowRight size={14} className="ml-1.5" />
                </Link>
                <Link
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=Whoshungry@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-800 shadow-sm transition-colors hover:bg-red-50"
                >
                  Email <ArrowRight size={14} className="ml-1.5" />
                </Link>
                <Link
                  href="/contacts"
                  className="inline-flex items-center rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-800 shadow-sm transition-colors hover:bg-red-50"
                >
                  More contact options
                </Link>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
              <CalendarCheck size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 text-white text-xs font-semibold">
                  3
                </span>
                <h2 className="font-semibold text-neutral-900">Confirm and schedule</h2>
              </div>
              <p className="mt-1 text-sm text-neutral-600">
                We’ll confirm availability, total price, and pickup/delivery time. For bulk orders,
                kindly reach out early so we can prepare.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="group flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
              <Wallet size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 text-white text-xs font-semibold">
                  4
                </span>
                <h2 className="font-semibold text-neutral-900">Pay and enjoy</h2>
              </div>
              <p className="mt-1 text-sm text-neutral-600">
                Settle payment upon pickup or delivery, then enjoy your food. Thank you for
                supporting local!
              </p>
            </div>
          </div>
        </div>
      </RevealSection>
    </div>
  );
}
