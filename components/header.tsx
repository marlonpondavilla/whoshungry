import { ArrowRight, Home } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="w-full border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/img/logo.png"
              alt="Who's Hungry Logo"
              width={100}
              height={100}
              priority
              className="h-28 w-auto"
            />
          </div>

          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-6 text-sm text-neutral-700">
              <Link href="/" className="hover:text-red-500 font-semibold text-base hover:underline hover:scale-103 transition-transform duration-200"><div className='flex justify-center items-center gap-1'><Home size={18} /> Home</div></Link>
              <Link href="/menu" className="hover:text-red-500 font-semibold text-base hover:underline hover:scale-103 transition-transform duration-200">Menu</Link>
              <Link href="/contacts" className="hover:text-red-500 font-semibold text-base hover:underline hover:scale-103 transition-transform duration-200">Contacts</Link>
              <Link href="/test" className="group hover:text-red-500 font-semibold text-base hover:underline hover:scale-103 transition-transform duration-200">
                <div className='flex justify-center items-center'>
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
        </div>
      </header>
  )
}

export default Header