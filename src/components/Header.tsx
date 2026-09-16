"use client";

import { useState } from "react";

const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#style", label: "Your style" },
  { href: "#discover", label: "Discover" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 sm:h-20 sm:px-10">
        <a
          href="#top"
          className="text-[1.05rem] font-semibold tracking-[0.14em] text-ink"
          onClick={() => setOpen(false)}
        >
          FASHIONISTA
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#waitlist"
          className="hidden rounded-full border border-ink px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper md:inline-flex"
        >
          Get early access
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 block h-px w-5 bg-ink transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 bottom-0 block h-px w-5 bg-ink transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-line/70 bg-paper transition-[max-height] duration-300 ease-in-out md:hidden ${
          open ? "max-h-64" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-base text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full border border-ink px-5 py-2.5 text-center text-sm font-medium text-ink"
          >
            Get early access
          </a>
        </nav>
      </div>
    </header>
  );
}
