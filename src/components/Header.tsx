"use client";

import {
  CalendarCheck,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";

const navItems = [
  {
    label: "Home",
    href: "#top",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Why Us",
    href: "#why",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
];

/* =========================================================
   LOGO
========================================================= */

function LogoMark() {
  return (
    <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-sky-500 text-white shadow-[0_8px_22px_rgba(14,165,233,0.22)] sm:size-11 sm:rounded-2xl">
      <svg
        viewBox="0 0 24 24"
        className="h-[20px] w-[20px] sm:h-[21px] sm:w-[21px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7 3c2 0 2 2 5 2s3-2 5-2c2.5 0 4 2.5 3 5.5l-2 7c-.6 2.3-1.8 3.5-3.5 3.5-1.4 0-2-1.1-2.5-3.2-.5-2-1-3.8-2-3.8s-1.5 1.8-2 3.8c-.5 2.1-1.1 3.2-2.5 3.2-1.7 0-2.9-1.2-3.5-3.5l-2-7C3 5.5 4.5 3 7 3z" />
      </svg>
    </div>
  );
}

/* =========================================================
   HEADER
========================================================= */

export default function Header() {
  const [open, setOpen] =
    useState(false);

  function scrollToTop() {
    setOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <header className="relative z-50 border-b border-slate-100 bg-white/95 shadow-[0_3px_18px_rgba(15,23,42,0.035)] backdrop-blur-xl lg:sticky lg:top-0">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-4 px-4 sm:h-[72px] sm:px-6 lg:px-8">
        {/* =================================================
            BRAND
        ================================================== */}

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="BrightSmile Dental home"
          className="flex min-w-0 shrink-0 items-center gap-2.5 text-left sm:gap-3"
        >
          <LogoMark />

          <div className="min-w-0">
            <p className="whitespace-nowrap text-[15px] font-black leading-none tracking-[-0.035em] text-slate-950 sm:text-lg">
              BrightSmile{" "}
              <span className="text-sky-500">
                Dental
              </span>
            </p>

            <p className="mt-1 hidden text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400 sm:block">
              Modern Dental Care
            </p>
          </div>
        </button>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navItems.map((item) =>
            item.href === "#top" ? (
              <button
                key={item.label}
                type="button"
                onClick={scrollToTop}
                className="group relative py-2 text-sm font-bold text-slate-600 transition hover:text-slate-950"
              >
                {item.label}

                <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-sky-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="group relative py-2 text-sm font-bold text-slate-600 transition hover:text-slate-950"
              >
                {item.label}

                <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-sky-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ),
          )}
        </nav>

        {/* =================================================
            DESKTOP CTA
        ================================================== */}

        <a
          href="#booking"
          className="hidden min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 text-sm font-black text-white shadow-[0_10px_24px_rgba(14,165,233,0.20)] transition hover:-translate-y-0.5 hover:bg-sky-600 lg:inline-flex xl:px-6"
        >
          <CalendarCheck className="h-[17px] w-[17px]" />

          Book Appointment
        </a>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() =>
            setOpen(
              (previous) => !previous,
            )
          }
          aria-label={
            open
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={open}
          className="grid size-10 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:border-sky-200 hover:bg-sky-50 lg:hidden"
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      {open && (
        <div className="border-t border-slate-100 bg-white shadow-[0_16px_35px_rgba(15,23,42,0.06)] lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <nav className="grid gap-2">
              {navItems.map((item) =>
                item.href === "#top" ? (
                  <button
                    key={item.label}
                    type="button"
                    onClick={scrollToTop}
                    className="flex min-h-11 items-center rounded-xl px-4 text-left text-sm font-bold text-slate-700 transition hover:bg-sky-50 hover:text-sky-700"
                  >
                    {item.label}
                  </button>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() =>
                      setOpen(false)
                    }
                    className="flex min-h-11 items-center rounded-xl px-4 text-sm font-bold text-slate-700 transition hover:bg-sky-50 hover:text-sky-700"
                  >
                    {item.label}
                  </a>
                ),
              )}

              {/* BOOKING CTA */}

              <a
                href="#booking"
                onClick={() =>
                  setOpen(false)
                }
                className="mt-2 flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 text-sm font-black text-white shadow-[0_10px_25px_rgba(14,165,233,0.20)] transition hover:bg-sky-600"
              >
                <CalendarCheck className="h-[18px] w-[18px]" />

                Book Appointment
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}