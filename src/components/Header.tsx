"use client";

import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Book", href: "#booking" },
  { label: "Reviews", href: "#reviews" },
];

function LogoMark() {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500 shadow-md shadow-sky-200">
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M7 3c2 0 2 2 5 2s3-2 5-2c2.5 0 4 2.5 3 5.5l-2 7c-.6 2.3-1.8 3.5-3.5 3.5-1.4 0-2-1.1-2.5-3.2-.5-2-1-3.8-2-3.8s-1.5 1.8-2 3.8c-.5 2.1-1.1 3.2-2.5 3.2-1.7 0-2.9-1.2-3.5-3.5l-2-7C3 5.5 4.5 3 7 3z" />
      </svg>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <a href="#" className="flex items-center gap-3">
          <LogoMark />

          <div>
            <p className="text-base font-extrabold leading-none tracking-tight text-slate-950 sm:text-lg">
              BrightSmile <span className="text-sky-500">Dental</span>
            </p>
            <p className="mt-1 text-[11px] font-medium text-slate-500 sm:text-xs">
              Modern dental care
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-bold text-slate-600 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="group relative">
              <span className="transition group-hover:text-slate-950">
                {item.label}
              </span>
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-sky-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="tel:1300123456"
          className="hidden items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-black text-white shadow-md shadow-sky-500/20 transition hover:bg-sky-600 active:scale-[0.98] md:inline-flex"
        >
          <Phone className="h-4 w-4" />
          Call 1300 123 456
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm md:hidden"
          aria-label="Open menu"
        >
          {open ? (
            <X className="h-5 w-5 text-slate-800" />
          ) : (
            <Menu className="h-5 w-5 text-slate-800" />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-3 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-bold text-slate-700">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl bg-slate-50 px-4 py-3 transition hover:bg-sky-50"
              >
                {item.label}
              </a>
            ))}

            <a
              href="tel:1300123456"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-4 font-black text-white shadow-lg shadow-sky-200"
            >
              <Phone className="h-5 w-5" />
              Call Clinic
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}