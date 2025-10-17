import Link from 'next/link';
import RevealSection from '@/components/reveal-section';
import { Facebook, Mail, Phone, MessageSquare } from 'lucide-react';

export const metadata = {
  title: "Contact Us | Who's Hungry?",
  description: 'Get in touch via Facebook, email, phone, or Messenger.',
};

export default function ContactsPage() {
  return (
    <div className="min-h-screen text-neutral-900 mt-8">
      <RevealSection className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-3xl">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Contact Us</h1>
          <div className="mt-2 h-1 w-16 rounded-full bg-red-500" />
          <p className="mt-3 text-neutral-600">
            We’d love to hear from you. Reach us through any of the channels below.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Facebook */}
          <Link
            href="https://www.facebook.com/whoshungryyyy"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex size-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
              <Facebook size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-neutral-800">Facebook</div>
              <div className="truncate text-sm text-neutral-600">facebook.com/whoshungryyyy</div>
            </div>
            <span className="text-sm text-red-500 opacity-0 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0">
              Open
            </span>
          </Link>

          {/* Email */}
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=Whoshungry@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex size-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
              <Mail size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-neutral-800">Email</div>
              <div className="truncate text-sm text-neutral-600">Whoshungry@gmail.com</div>
            </div>
            <span className="text-sm text-red-500 opacity-0 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0">
              Open Gmail
            </span>
          </Link>

          {/* Phones */}
          <div className="flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
            <div className="flex size-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
              <Phone size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-neutral-800">Phone</div>
              <div className="text-sm text-neutral-600">0936 376 9483</div>
              <div className="text-sm text-neutral-600">0975 360 7860</div>
            </div>
          </div>

          {/* Messenger name */}
          <div className="flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
            <div className="flex size-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
              <MessageSquare size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-neutral-800">Messenger</div>
              <div className="truncate text-sm text-neutral-600">Patrick Reyes</div>
            </div>
          </div>
        </div>
      </RevealSection>
    </div>
  );
}
