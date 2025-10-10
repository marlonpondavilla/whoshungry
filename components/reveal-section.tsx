"use client";

import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** IntersectionObserver threshold (0 to 1). */
  threshold?: number | number[];
  /** Root margin to tweak trigger point (e.g., "0px 0px -10% 0px"). */
  rootMargin?: string;
  /** If true, stays visible after first reveal. */
  once?: boolean;
};

export default function RevealSection({
  children,
  className = "",
  threshold = 0.35,
  rootMargin = "0px 0px -10% 0px",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return (
    <section
      ref={(node) => {
        ref.current = (node as HTMLElement) || null;
      }}
      className={`transition-all duration-700 ease-out will-change-transform motion-reduce:transition-none ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-3 scale-[0.99]"
      } ${className}`}
    >
      {children}
    </section>
  );
}
