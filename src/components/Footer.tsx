"use client";

import {
  CalendarCheck,
  CheckCircle2,
} from "lucide-react";

const navLinks = [
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

const dentalServices = [
  "General Checkups",
  "Teeth Whitening",
  "Dental Implants",
  "Urgent Dental Care",
];

/* =========================================================
   LOGO
========================================================= */

function LogoMark() {
  return (
    <div className="grid size-10 shrink-0 place-items-center rounded-xl border border-sky-200 bg-sky-50 text-sky-600 shadow-sm sm:size-11 sm:rounded-2xl">
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
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
   FOOTER
========================================================= */

export default function Footer() {
  const year = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="border-t border-slate-200 bg-[#f8fbfd]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            MAIN
        ====================================================== */}

        <div className="grid gap-9 py-9 sm:grid-cols-2 sm:py-10 lg:grid-cols-[1.3fr_0.72fr_0.95fr] lg:gap-14 lg:py-11">
          {/* =================================================
              BRAND
          ================================================== */}

          <div>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="BrightSmile Dental home"
              className="flex items-center gap-3 text-left"
            >
              <LogoMark />

              <div>
                <p className="text-lg font-black leading-none tracking-[-0.035em] text-slate-950 sm:text-xl">
                  BrightSmile
                  <span className="text-sky-500">
                    {" "}
                    Dental
                  </span>
                </p>

                <p className="mt-1 text-[9px] font-black uppercase tracking-[0.13em] text-slate-400">
                  Modern Dental Care
                </p>
              </div>
            </button>

            <p className="mt-4 max-w-[370px] text-sm leading-6 text-slate-500">
              Friendly dental care focused on comfort,
              clear communication and a calm patient
              experience from consultation to treatment.
            </p>

            {/* TRUST POINTS */}

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2.5">
              {[
                "Gentle care",
                "Clear explanations",
                "Comfort focused",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-sky-500" />

                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* =================================================
              EXPLORE
          ================================================== */}

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.17em] text-slate-400">
              Explore
            </p>

            <nav className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3 sm:flex sm:flex-col sm:items-start">
              {navLinks.map((link) =>
                link.href === "#top" ? (
                  <button
                    key={link.label}
                    type="button"
                    onClick={scrollToTop}
                    className="text-left text-sm font-semibold text-slate-700 transition hover:text-sky-600"
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-semibold text-slate-700 transition hover:text-sky-600"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </nav>
          </div>

          {/* =================================================
              DENTAL CARE
          ================================================== */}

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.17em] text-slate-400">
              Dental Care
            </p>

            <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3 sm:flex sm:flex-col sm:items-start">
              {dentalServices.map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="text-sm font-semibold text-slate-700 transition hover:text-sky-600"
                >
                  {service}
                </a>
              ))}
            </div>

            {/* SMALL BOOKING CTA */}

            <a
              href="#booking"
              className="mt-5 inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 text-xs font-black text-white shadow-[0_8px_20px_rgba(14,165,233,0.16)] transition hover:-translate-y-0.5 hover:bg-sky-600"
            >
              <CalendarCheck className="h-4 w-4" />

              Book Appointment
            </a>
          </div>
        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div className="border-t border-slate-200/80 py-5 sm:py-4">
          <div className="flex flex-col gap-2 text-[10px] font-medium text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-xs">
            <p>
              © {year} BrightSmile Dental.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <span>
                Dental clinic demo
              </span>

              <span className="h-1 w-1 rounded-full bg-slate-300" />

              <span>
                Sample website design
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}