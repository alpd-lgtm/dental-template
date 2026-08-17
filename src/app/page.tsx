"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TemplateEnquiryModal from "@/components/TemplateEnquiryModal";
import Image from "next/image";

import {
  ArrowRight,
  Braces,
  CalendarCheck,
  CheckCircle2,
  HeartPulse,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  WandSparkles,
} from "lucide-react";

import {
  type FormEvent,
  useState,
} from "react";

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    title: "General Checkups",
    desc: "Routine exams, professional cleaning and preventive care for long-term oral health.",
    icon: Stethoscope,
  },
  {
    title: "Teeth Whitening",
    desc: "Professional whitening options designed to brighten your smile safely and comfortably.",
    icon: Sparkles,
  },
  {
    title: "Dental Implants",
    desc: "Natural-looking tooth replacement solutions with clear treatment planning.",
    icon: Smile,
  },
  {
    title: "Urgent Dental Care",
    desc: "Support for tooth pain, broken teeth and other urgent dental concerns.",
    icon: HeartPulse,
  },
  {
    title: "Invisalign & Braces",
    desc: "Modern teeth-straightening options designed around your smile and lifestyle.",
    icon: Braces,
  },
  {
    title: "Cosmetic Dentistry",
    desc: "Veneers, reshaping and aesthetic treatments tailored to your smile goals.",
    icon: WandSparkles,
  },
];

/* =========================================================
   TRUST ITEMS
========================================================= */

const trustItems = [
  {
    title: "Gentle care",
    text: "A patient-first approach designed to make appointments feel calmer.",
  },
  {
    title: "Clear explanations",
    text: "Treatment options are explained clearly before care begins.",
  },
  {
    title: "Modern environment",
    text: "A clean and comfortable setting for everyday dental care.",
  },
  {
    title: "Personalised planning",
    text: "Care can be discussed around individual needs and smile goals.",
  },
];

/* =========================================================
   SAMPLE PATIENT STORIES
========================================================= */

const patientStories = [
  {
    title: "Comfort & care",
    text: "This sample shows how genuine patient feedback about comfort and the clinic experience could be presented.",
  },
  {
    title: "Clear communication",
    text: "Approved patient feedback about explanations, treatment options and communication can be featured here.",
  },
  {
    title: "Patient experience",
    text: "This section can be replaced with genuine patient experiences supplied and approved by the dental clinic.",
  },
];

/* =========================================================
   FAQ
========================================================= */

const faqs = [
  {
    q: "What dental services are available?",
    a: "Dental clinics can offer preventive checkups, cleaning, whitening, restorative care, implants, orthodontic options and cosmetic treatments depending on their services.",
  },
  {
    q: "Can I request an appointment online?",
    a: "Yes. Use the appointment form to request a preferred service, date and time. The clinic can then confirm availability directly.",
  },
  {
    q: "What if I feel nervous about dental treatment?",
    a: "You can mention any concerns when requesting an appointment so the dental team can understand your needs and help make the visit more comfortable.",
  },
  {
    q: "Can I ask about treatment costs before booking?",
    a: "Yes. Pricing and treatment options can be discussed with the clinic after your dental needs have been assessed.",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function Home() {
  const [templateModalOpen, setTemplateModalOpen] =
    useState(false);

  const [appointmentSent, setAppointmentSent] =
    useState(false);

  function handleAppointmentSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    setAppointmentSent(true);
  }

  return (
    <main
      id="top"
      className="min-h-screen overflow-x-hidden bg-[#fbfdff] text-slate-950"
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <Header />

      {/* =====================================================
          AXIS STUDIO DEMO STRIP
      ====================================================== */}

      <div className="border-b border-sky-200/80 bg-[#f2faff]">
        <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <span className="shrink-0 rounded-full bg-slate-950 px-2.5 py-1 text-[7px] font-black uppercase tracking-[0.14em] text-white sm:px-3 sm:text-[9px]">
                Axis Studio Demo
              </span>

              <p className="hidden truncate text-xs font-medium text-slate-500 sm:block">
                Sample dental website content for design preview only.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setTemplateModalOpen(true)}
              className="shrink-0 rounded-lg border border-sky-300 bg-white px-3 py-2 text-[8px] font-black text-sky-700 shadow-sm transition hover:border-sky-400 hover:bg-sky-50 sm:px-4 sm:text-xs"
            >
              Start With This Design →
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f8fcff] to-[#eaf7ff]">
        <div className="pointer-events-none absolute -left-32 top-16 h-80 w-80 rounded-full bg-sky-100/80 blur-3xl" />

        <div className="pointer-events-none absolute -right-28 top-4 h-[420px] w-[420px] rounded-full bg-blue-100/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-9 px-4 pb-14 pt-7 sm:px-6 sm:pb-18 sm:pt-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-16 lg:px-8 lg:pb-20 lg:pt-12">
          {/* LEFT */}

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/90 px-3.5 py-2 text-[9px] font-black uppercase tracking-[0.12em] text-sky-700 shadow-sm backdrop-blur sm:px-4 sm:text-xs">
              <Sparkles className="h-4 w-4" />
              Gentle Care · Modern Dentistry
            </div>

            <h1 className="mt-5 max-w-[660px] text-[2.55rem] font-black leading-[0.98] tracking-[-0.05em] sm:mt-6 sm:text-5xl lg:text-[3.9rem]">
              Gentle dental care for

              <span className="block text-sky-500">
                confident, healthy smiles.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
              Friendly, modern dental care with clear treatment
              plans, gentle support and a comfortable experience
              from your first visit.
            </p>

            {/* HERO CTA */}

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#booking"
                className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-sky-500 px-7 text-sm font-black text-white shadow-[0_12px_30px_rgba(14,165,233,0.26)] transition hover:-translate-y-0.5 hover:bg-sky-600 sm:text-base"
              >
                Book Appointment
              </a>

              <a
                href="#services"
                className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 text-sm font-black text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50/40 hover:shadow-md sm:text-base"
              >
                Explore Services
              </a>
            </div>

            {/* TRUST */}

            <div className="mt-7 grid grid-cols-2 gap-2.5 sm:mt-8 sm:grid-cols-4 sm:gap-3">
              {[
                {
                  icon: ShieldCheck,
                  title: "Gentle",
                  text: "Patient-first care",
                },
                {
                  icon: CheckCircle2,
                  title: "Clear",
                  text: "Treatment plans",
                },
                {
                  icon: Sparkles,
                  title: "Modern",
                  text: "Clinic experience",
                },
                {
                  icon: CalendarCheck,
                  title: "Flexible",
                  text: "Appointment requests",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="min-h-[84px] rounded-2xl border border-white bg-white/90 p-3.5 shadow-[0_8px_25px_rgba(15,23,42,0.05)] backdrop-blur sm:min-h-[94px] sm:p-4"
                >
                  <Icon className="h-4 w-4 text-sky-500" />

                  <p className="mt-2.5 text-xs font-black sm:text-sm">
                    {title}
                  </p>

                  <p className="mt-1 text-[9px] font-medium leading-4 text-slate-500 sm:text-[10px]">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 inline-flex rounded-xl border border-sky-100 bg-white/70 px-3 py-2 text-[8px] font-medium leading-4 text-slate-400 backdrop-blur sm:mt-5 sm:text-[10px]">
              Sample clinic content used for website design demonstration.
            </div>
          </div>

          {/* RIGHT IMAGE */}

          <div className="relative mx-auto w-full max-w-[600px] lg:max-w-none">
            <div className="rounded-[1.8rem] bg-white p-2.5 shadow-[0_25px_70px_rgba(15,23,42,0.12)] sm:rounded-[2.3rem] sm:p-3">
              <div className="relative h-[310px] overflow-hidden rounded-[1.4rem] sm:h-[440px] sm:rounded-[1.9rem] lg:h-[500px]">
                <Image
                  src="/dental-hero.png"
                  alt="Modern dental care"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 54vw"
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur sm:bottom-5 sm:left-5">
                  <p className="text-[8px] font-black uppercase tracking-[0.13em] text-sky-600 sm:text-[9px]">
                    Patient-first care
                  </p>

                  <p className="mt-1 text-xs font-black text-slate-950 sm:text-base">
                    Calm, comfortable visits
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -left-6 top-9 hidden rounded-2xl border border-sky-100 bg-white px-5 py-4 shadow-xl lg:block">
              <p className="text-[8px] font-black uppercase tracking-[0.13em] text-sky-600">
                Comfort focused
              </p>

              <p className="mt-1 text-sm font-black">
                Clear & gentle care
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section
        id="services"
        className="scroll-mt-24 bg-white px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-sky-500 sm:text-xs">
              Our Services
            </p>

            <h2 className="mt-3 text-[1.9rem] font-black leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-[2.7rem]">
              Dental care for every stage of your smile.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              From preventive care to cosmetic and restorative
              treatment, every service can be discussed clearly
              before care begins.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-3">
            {services.map((item) => (
              <article
                key={item.title}
                className="group flex h-full min-h-[190px] flex-col rounded-[1.25rem] border border-slate-200 bg-gradient-to-b from-white to-[#f7fbff] p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_16px_35px_rgba(14,165,233,0.09)] sm:min-h-[230px] sm:rounded-[1.65rem] sm:p-6"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-sky-100 bg-white text-sky-500 shadow-sm transition duration-300 group-hover:border-sky-500 group-hover:bg-sky-500 group-hover:text-white sm:h-12 sm:w-12 sm:rounded-2xl">
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>

                <h3 className="mt-4 text-[12px] font-black leading-5 sm:mt-5 sm:text-lg">
                  {item.title}
                </h3>

                <p className="mt-2 text-[10px] leading-5 text-slate-600 sm:mt-3 sm:text-sm sm:leading-6">
                  {item.desc}
                </p>

                <a
                  href="#booking"
                  className="mt-auto pt-4 text-[9px] font-black text-sky-600 transition hover:text-sky-700 sm:pt-5 sm:text-xs"
                >
                  View Service
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY BRIGHTSMILE
      ====================================================== */}

      <section
        id="why"
        className="scroll-mt-24 bg-[#f3f9fe] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[1.75rem] border border-sky-100 bg-white shadow-[0_22px_60px_rgba(15,23,42,0.07)] lg:grid-cols-[0.92fr_1.08fr] lg:rounded-[2rem]">
            {/* IMAGE */}

            <div className="relative min-h-[330px] sm:min-h-[420px] lg:min-h-[500px]">
              <Image
                src="/doctor.png"
                alt="Dental care team"
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-3.5 shadow-xl backdrop-blur sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-[300px] sm:p-4">
                <p className="text-[8px] font-black uppercase tracking-[0.13em] text-sky-600">
                  A calmer dental experience
                </p>

                <p className="mt-1 text-xs font-black leading-5 sm:text-sm">
                  Clear communication from consultation to care.
                </p>
              </div>
            </div>

            {/* CONTENT */}

            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-sky-500 sm:text-xs">
                Why BrightSmile
              </p>

              <h2 className="mt-3 max-w-xl text-[1.9rem] font-black leading-[1.04] tracking-[-0.04em] sm:text-4xl lg:text-[2.7rem]">
                Dental care that feels clear, calm and personal.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                BrightSmile Dental focuses on comfort, trust and
                straightforward communication. Every visit begins
                with understanding your concerns and explaining
                the available options clearly.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4">
                {trustItems.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-[#f8fbff] p-4 sm:p-5"
                  >
                    <CheckCircle2 className="h-4 w-4 text-sky-500 sm:h-5 sm:w-5" />

                    <h3 className="mt-3 text-xs font-black sm:text-sm">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-[9px] leading-4 text-slate-500 sm:text-xs sm:leading-5">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOOKING
      ====================================================== */}

      <section
        id="booking"
        className="scroll-mt-24 bg-[#071426] px-4 py-14 text-white sm:px-6 sm:py-18 lg:px-8 lg:py-20"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* LEFT */}

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-sky-300 sm:text-xs">
              Request Appointment
            </p>

            <h2 className="mt-3 max-w-xl text-[1.95rem] font-black leading-[1.04] tracking-[-0.04em] sm:text-4xl lg:text-[2.8rem]">
              Make your next dental visit feel easier.
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              Choose a service and preferred appointment details,
              then let the dental clinic know what you would like
              help with.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4">
              {[
                {
                  icon: CalendarCheck,
                  label: "Simple booking",
                },
                {
                  icon: ShieldCheck,
                  label: "Gentle approach",
                },
                {
                  icon: CheckCircle2,
                  label: "Clear explanations",
                },
                {
                  icon: Sparkles,
                  label: "Modern care",
                },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="min-h-[90px] rounded-2xl border border-white/10 bg-white/[0.045] p-4"
                >
                  <Icon className="h-4 w-4 text-sky-300 sm:h-5 sm:w-5" />

                  <p className="mt-3 text-xs font-black sm:text-sm">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.045] p-4">
              <p className="text-[8px] font-black uppercase tracking-[0.14em] text-sky-300">
                Demo Website
              </p>

              <p className="mt-2 text-[10px] leading-5 text-slate-400 sm:text-xs">
                This appointment form demonstrates the customer
                experience. No real dental appointment will be
                created.
              </p>
            </div>
          </div>

          {/* FORM */}

          <div className="rounded-[1.7rem] bg-white p-4 text-slate-950 shadow-[0_25px_70px_rgba(0,0,0,0.23)] sm:p-6 lg:p-7">
            {appointmentSent ? (
              <div className="flex min-h-[430px] flex-col items-center justify-center px-3 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-sky-500 text-2xl font-black text-white shadow-[0_14px_35px_rgba(14,165,233,0.25)]">
                  ✓
                </div>

                <p className="mt-5 text-[9px] font-black uppercase tracking-[0.17em] text-sky-600">
                  Demo Appointment
                </p>

                <h3 className="mt-2 text-2xl font-black tracking-[-0.035em] sm:text-3xl">
                  Appointment request completed.
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                  This is a demonstration website, so no real
                  dental appointment has been sent.
                </p>

                <button
                  type="button"
                  onClick={() => setAppointmentSent(false)}
                  className="mt-6 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-800 transition hover:border-sky-300 hover:bg-sky-50"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleAppointmentSubmit}>
                <div className="rounded-2xl bg-sky-50 p-4 sm:p-5">
                  <p className="text-[8px] font-black uppercase tracking-[0.15em] text-sky-600 sm:text-[9px]">
                    Appointment Request
                  </p>

                  <h3 className="mt-1.5 text-xl font-black tracking-[-0.03em] sm:text-2xl">
                    Find a time that suits you.
                  </h3>

                  <p className="mt-1.5 text-[10px] leading-5 text-slate-500 sm:text-xs">
                    Complete the form below to preview the dental
                    appointment experience.
                  </p>
                </div>

                <div className="mt-4 grid gap-3 sm:mt-5 sm:grid-cols-2">
                  <input
                    required
                    type="text"
                    placeholder="Full name"
                    className="min-h-12 rounded-xl border border-slate-200 bg-[#f8fafc] px-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10"
                  />

                  <input
                    required
                    type="tel"
                    placeholder="Phone number"
                    className="min-h-12 rounded-xl border border-slate-200 bg-[#f8fafc] px-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10"
                  />

                  <select
                    required
                    defaultValue=""
                    className="min-h-12 rounded-xl border border-slate-200 bg-[#f8fafc] px-4 text-sm font-medium text-slate-700 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 sm:col-span-2"
                  >
                    <option value="" disabled>
                      Select service
                    </option>

                    {services.map((service) => (
                      <option
                        key={service.title}
                        value={service.title}
                      >
                        {service.title}
                      </option>
                    ))}
                  </select>

                  <input
                    required
                    type="date"
                    className="min-h-12 rounded-xl border border-slate-200 bg-[#f8fafc] px-4 text-sm font-medium outline-none transition focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10"
                  />

                  <select
                    required
                    defaultValue=""
                    className="min-h-12 rounded-xl border border-slate-200 bg-[#f8fafc] px-4 text-sm font-medium text-slate-700 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10"
                  >
                    <option value="" disabled>
                      Preferred time
                    </option>

                    <option>Morning</option>
                    <option>Midday</option>
                    <option>Afternoon</option>
                  </select>

                  <textarea
                    rows={4}
                    placeholder="Message or dental concern"
                    className="min-h-28 resize-none rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3 text-sm font-medium leading-6 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-500/10 sm:col-span-2"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 flex min-h-12 w-full items-center justify-center rounded-xl bg-sky-500 px-5 text-sm font-black text-white shadow-[0_10px_24px_rgba(14,165,233,0.18)] transition hover:-translate-y-0.5 hover:bg-sky-600"
                >
                  Request Appointment
                </button>

                <p className="mt-3 text-center text-[9px] leading-4 text-slate-400">
                  Demo form only · No real dental appointment will be created
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          PATIENT STORIES
      ====================================================== */}

      <section
        id="reviews"
        className="scroll-mt-24 bg-white px-4 pb-9 pt-14 sm:px-6 sm:pb-10 sm:pt-18 lg:px-8 lg:pb-12 lg:pt-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.14em] text-sky-700 sm:text-[9px]">
              Sample Patient Stories
            </span>

            <h2 className="mt-4 text-[1.9rem] font-black leading-[1.04] tracking-[-0.04em] sm:text-4xl lg:text-[2.7rem]">
              What a comfortable dental experience can feel like.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              Genuine approved patient feedback can help people
              understand the care, communication and experience
              they can expect.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-3 lg:gap-5">
            {patientStories.map((story) => (
              <article
                key={story.title}
                className="flex h-full flex-col rounded-[1.4rem] border border-slate-200 bg-[#f8fbff] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_15px_35px_rgba(14,165,233,0.08)] sm:p-6"
              >
                <span className="text-4xl font-black leading-none text-sky-200">
                  “
                </span>

                <h3 className="mt-3 text-base font-black sm:text-lg">
                  {story.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 sm:leading-7">
                  {story.text}
                </p>

                <div className="mt-5 border-t border-slate-200 pt-4">
                  <p className="text-[8px] font-black uppercase tracking-[0.13em] text-sky-600 sm:text-[9px]">
                    Demonstration Content
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-5 max-w-3xl rounded-xl border border-slate-200 bg-[#f8fbff] px-4 py-2.5 text-center text-[8px] leading-4 text-slate-400 sm:mt-6 sm:text-[10px]">
            <strong className="text-slate-500">
              Demo content:
            </strong>{" "}
            Patient testimonials shown here are illustrative only.
            A finished website should use genuine approved patient
            feedback.
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

      <section className="bg-[#f3f9fe] px-4 pb-14 pt-10 sm:px-6 sm:pb-18 sm:pt-12 lg:px-8 lg:pb-20 lg:pt-14">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-sky-500 sm:text-xs">
              FAQ
            </p>

            <h2 className="mt-3 text-[1.9rem] font-black leading-[1.04] tracking-[-0.04em] sm:text-4xl lg:text-[2.7rem]">
              Frequently asked dental questions.
            </h2>
          </div>

          <div className="mt-7 grid gap-3 sm:mt-9">
            {faqs.map((faq) => (
              <article
                key={faq.q}
                className="rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-[0_5px_20px_rgba(15,23,42,0.03)] sm:p-5"
              >
                <h3 className="flex items-start gap-3 text-xs font-black leading-5 sm:text-base sm:leading-6">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-500 sm:h-5 sm:w-5" />

                  {faq.q}
                </h3>

                <p className="mt-2 pl-7 text-[10px] leading-5 text-slate-600 sm:pl-8 sm:text-sm sm:leading-6">
                  {faq.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          AXIS STUDIO CTA
      ====================================================== */}

      <section className="bg-[#f3f9fe] px-4 pb-10 pt-0 sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[1.6rem] bg-[#071936] px-6 py-7 text-white shadow-[0_20px_60px_rgba(15,23,42,0.14)] sm:px-8 sm:py-9 lg:px-10">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-sky-400 px-3 py-1 text-[8px] font-black uppercase tracking-[0.15em] text-slate-950 sm:text-[9px]">
                    Axis Studio Demo
                  </span>

                  <span className="text-[9px] font-medium text-slate-400 sm:text-[10px]">
                    Dental Clinic Website
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-black tracking-[-0.035em] sm:text-3xl">
                  Like this website design?
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                  We can customise this design with your clinic
                  name, dental services, colours, images, team,
                  content and contact details, then help you launch
                  it.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:min-w-[450px]">
                <button
                  type="button"
                  onClick={() => setTemplateModalOpen(true)}
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-sky-400 px-6 py-3 text-sm font-black text-slate-950 shadow-[0_10px_24px_rgba(56,189,248,0.18)] transition hover:-translate-y-0.5 hover:bg-sky-300"
                >
                  Start With This Design

                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href="https://axistudio.studio/templates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 flex-1 items-center justify-center rounded-xl border border-white/20 bg-white/[0.03] px-6 py-3 text-sm font-black text-white transition hover:bg-white/[0.08]"
                >
                  View More Designs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />

      {/* =====================================================
          TEMPLATE ENQUIRY
      ====================================================== */}

      <TemplateEnquiryModal
        open={templateModalOpen}
        onClose={() => setTemplateModalOpen(false)}
      />
    </main>
  );
}