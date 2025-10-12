'use client';

import { ArrowRight, Home, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change so it doesn't overlay content
  useEffect(() => {
    if (open) setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const activeHome = pathname === '/';
  const activeMenu = pathname.startsWith('/menu');
  const activeContacts = pathname.startsWith('/contacts');
  const activeTest = pathname.startsWith('/test');
  const desktopLinkBase =
    'font-semibold text-base hover:underline hover:scale-[1.03] transition-transform duration-200';
  const mobileLinkBase = 'block rounded-md px-3 py-2 hover:bg-neutral-100';
  return (
    <header className="w-full border-b border-neutral-200 sticky top-0 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/img/logo.png"
            alt="Who's Hungry Logo"
            width={100}
            height={100}
            priority
            className="h-14 w-auto sm:h-16 md:h-28"
          />
        </div>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-neutral-700">
            <Link
              href="/"
              aria-current={activeHome ? 'page' : undefined}
              className={`${desktopLinkBase} ${activeHome ? 'text-red-500 underline' : 'text-neutral-700'}`}
            >
              <div className="flex justify-center items-center gap-1">
                <Home size={18} /> Home
              </div>
            </Link>
            <Link
              href="/menu"
              aria-current={activeMenu ? 'page' : undefined}
              className={`${desktopLinkBase} ${activeMenu ? 'text-red-500 underline' : 'text-neutral-700'}`}
            >
              Menu
            </Link>
            <Link
              href="/contacts"
              aria-current={activeContacts ? 'page' : undefined}
              className={`${desktopLinkBase} ${activeContacts ? 'text-red-500 underline' : 'text-neutral-700'}`}
            >
              Contacts
            </Link>
            <Link
              href="/test"
              aria-current={activeTest ? 'page' : undefined}
              className={`group ${desktopLinkBase} ${activeTest ? 'text-red-500 underline' : 'text-neutral-700'}`}
            >
              <div className="flex justify-center items-center">
                How to order
                <ArrowRight
                  size={18}
                  aria-hidden
                  className="ml-1 opacity-0 -translate-x-1 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0"
                />
              </div>
            </Link>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:text-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <nav aria-label="Mobile">
          <ul className="px-4 pb-3 space-y-2 text-neutral-800">
            <li>
              <Link
                href="/"
                aria-current={activeHome ? 'page' : undefined}
                className={`${mobileLinkBase} ${activeHome ? 'text-red-500' : ''}`}
                onClick={() => setOpen(false)}
              >
                <div className="flex items-center gap-2">
                  <Home size={18} /> Home
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                aria-current={activeMenu ? 'page' : undefined}
                className={`${mobileLinkBase} ${activeMenu ? 'text-red-500' : ''}`}
                onClick={() => setOpen(false)}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                aria-current={activeContacts ? 'page' : undefined}
                className={`${mobileLinkBase} ${activeContacts ? 'text-red-500' : ''}`}
                onClick={() => setOpen(false)}
              >
                Contacts
              </Link>
            </li>
            <li>
              <Link
                href="/test"
                aria-current={activeTest ? 'page' : undefined}
                className={`group ${mobileLinkBase} ${activeTest ? 'text-red-500' : ''}`}
                onClick={() => setOpen(false)}
              >
                <div className="flex items-center">
                  How to order
                  <ArrowRight size={16} aria-hidden className="ml-1 opacity-70" />
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
