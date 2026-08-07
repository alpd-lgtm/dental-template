import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { TemplateDemoCTA } from "@/components/TemplateDemoCTA";

import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  HeartPulse,
  Phone,
  Braces,
  Sparkles,
  Star,
  Stethoscope,
  WandSparkles,
  Smile,
} from "lucide-react";

const services = [
  {
    title: "General Checkups",
    desc: "Routine exams, professional cleaning and prevention for long-term oral health.",
    icon: Stethoscope,
  },
  {
    title: "Teeth Whitening",
    desc: "Safe whitening treatments designed to brighten your smile naturally.",
    icon: Sparkles,
  },
  {
    title: "Dental Implants",
    desc: "Natural-looking tooth replacement solutions with clear treatment planning.",
    icon: Smile,
  },
  {
    title: "Emergency Dental",
    desc: "Fast support for tooth pain, broken teeth and urgent dental concerns.",
    icon: HeartPulse,
  },
  {
    title: "Invisalign & Braces",
    desc: "Modern teeth straightening options for a cleaner, more confident smile.",
    icon: Braces,
  },
  {
    title: "Cosmetic Dentistry",
    desc: "Veneers, reshaping and aesthetic treatments to improve your smile.",
    icon: WandSparkles,
  },
];

const trustItems = [
  "Gentle care for nervous patients",
  "Clear treatment plans",
  "Modern clinic environment",
  "Emergency dental support",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfdff] text-slate-950">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-blue-100">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-sky-100 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-100/80 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-6 md:gap-10 px-5 pt-4 pb-8 md:grid-cols-[0.95fr_1.05fr] md:pt-8 md:pb-16">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-semibold text-sky-700 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
              <CalendarCheck className="h-4 w-4" />
              Same-week appointments available
            </div>

            <h1 className="max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Gentle dental care for confident, healthy smiles.
            </h1>

            <p className="mt-4 max-w-md text-base leading-6 text-slate-600 sm:text-lg sm:leading-8">
              A calm, modern dental clinic offering checkups, whitening,
              emergency care and cosmetic treatments with clear advice and
              gentle support.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-500 px-6 py-4 font-semibold text-white shadow-[0_12px_30px_rgba(14,165,233,0.35)] transition hover:-translate-y-0.5 hover:bg-sky-600"
              >
                Book Appointment
                <ArrowRight className="h-5 w-5" />
              </a>

              <a
                href="tel:1300123456"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
              >
                <Phone className="h-5 w-5" />
                Call Clinic
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["4.9★", "Patient rating"],
                ["2k+", "Happy patients"],
                ["10+", "Years care"],
                ["24h", "Emergency help"],
              ].map(([number, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm sm:p-4 min-h-[88px]"
                >
                  <p className="text-2xl font-black text-sky-500">{number}</p>
                  <p className="mt-1 text-xs font-bold text-slate-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] bg-white p-3 shadow-[0_25px_70px_rgba(15,23,42,0.14)] sm:rounded-[2.5rem]">
              <div className="relative h-[230px] sm:h-[430px] overflow-hidden rounded-[1.5rem] sm:h-[430px] sm:rounded-[2rem]">
                <Image
                  src="/dental-hero.png"
                  alt="Dentist with patient smiling"
                  fill
                  priority
                  className="object-cover object-right"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />

<div className="absolute bottom-4 left-4 rounded-2xl bg-white px-4 py-3 shadow-xl sm:bottom-5 sm:left-5">
  <p className="text-xs font-bold text-sky-500">
    Patient-first care
  </p>
  <p className="mt-1 text-sm font-black text-slate-950 sm:text-base">
    Calm, comfortable visits
  </p>
</div>
              </div>
            </div>

            <div className="absolute -left-5 top-10 hidden rounded-3xl bg-white px-5 py-4 shadow-xl md:block">
              <div className="flex text-sky-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-1 text-sm font-bold text-slate-900">
                Trusted by 2,000+ patients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white px-5 pt-14 pb-16 md:py-20">
        <div className="mx-auto max-w-7xl">
<div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
  <p className="font-black text-sky-500">OUR SERVICES</p>

  <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
    Dental services for every smile.
  </h2>

  <p className="text-slate-600">
    From preventive care to urgent support, every treatment is explained clearly before it begins.
  </p>
</div>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {services.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-[#f8fbff] p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl sm:p-6"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-100 bg-white shadow-sm transition group-hover:scale-105 sm:h-12 sm:w-12">
                  <item.icon className="h-6 w-6 text-sky-500 transition group-hover:scale-110" />
                </div>

               <h3 className="text-base font-black sm:text-lg">{item.title}</h3>

                <p className="mt-2 text-xs leading-5 text-slate-600 sm:mt-3 sm:text-sm sm:leading-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dental Team */}
      <section id="why" className="bg-[#f8fbff] px-5 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[2.5rem] bg-white shadow-xl md:grid-cols-2">
            <div className="relative min-h-[340px]">
              <Image
                src="/doctor.png"
                alt="Dental team"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 to-transparent" />

<div className="absolute bottom-4 left-4 rounded-2xl bg-white px-4 py-3 shadow-xl sm:bottom-5 sm:left-5">
  <p className="text-xs font-bold text-sky-500">
    Patient-first care
  </p>
  <p className="mt-1 text-sm font-black text-slate-950 sm:text-base">
    Calm, comfortable visits
  </p>
</div>
            </div>

            <div className="p-6 md:p-10">
              <p className="font-black text-sky-500">MEET OUR DENTAL TEAM</p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                A caring dental team for every stage of your smile.
              </h2>

              <p className="mt-4 text-slate-600">
                BrightSmile Dental is built around comfort, trust and simple
                communication. Whether it is your first visit or ongoing care,
                our team ensures you understand every step clearly.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {trustItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-[#f8fbff] p-4"
                  >
                    <CheckCircle2 className="mb-3 h-5 w-5 text-sky-500" />
                    <p className="font-bold text-slate-800">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-3xl bg-sky-50 p-5">
                  <p className="text-3xl font-black text-sky-500">10+</p>
                  <p className="mt-1 text-sm font-bold text-slate-500">
                    Years experience
                  </p>
                </div>

                <div className="rounded-3xl bg-sky-50 p-5">
                  <p className="text-3xl font-black text-sky-500">2k+</p>
                  <p className="mt-1 text-sm font-bold text-slate-500">
                    Patients helped
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="bg-slate-950 px-5 py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="font-black text-sky-300">REQUEST APPOINTMENT</p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Book a visit with a calm, caring dental team.
            </h2>

            <p className="mt-4 max-w-md text-slate-300">
              Choose your preferred service, date and time. The clinic will
              confirm your appointment shortly.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Same-week appointments",
                "Gentle care for nervous patients",
                "Clear treatment explanations",
                "Emergency dental support",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <CheckCircle2 className="mb-3 h-5 w-5 text-sky-300" />
                  <p className="font-bold text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <form className="rounded-[2rem] bg-white p-6 text-slate-950 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <div className="mb-5 rounded-2xl bg-sky-50 p-4">
              <p className="text-sm font-bold text-sky-600">
                Appointment request
              </p>
              <p className="mt-1 text-2xl font-black">
                Find a time that suits you
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <input
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-sky-400 focus:bg-white"
                placeholder="Full name"
              />

              <input
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-sky-400 focus:bg-white"
                placeholder="Phone number"
              />

              <select className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-sky-400 focus:bg-white sm:col-span-2">
                <option>Select service</option>
                <option>General checkup</option>
                <option>Teeth whitening</option>
                <option>Emergency dental</option>
                <option>Dental implants</option>
              </select>

              <input
                type="date"
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-sky-400 focus:bg-white"
              />

              <select className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-sky-400 focus:bg-white">
                <option>Preferred time</option>
                <option>9:00 AM</option>
                <option>11:30 AM</option>
                <option>2:00 PM</option>
                <option>4:30 PM</option>
              </select>

              <textarea
                className="min-h-24 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-sky-400 focus:bg-white sm:col-span-2"
                placeholder="Message or concern"
              />
            </div>

            <button
              type="button"
              className="mt-4 w-full rounded-2xl bg-sky-500 px-5 py-4 font-black text-white shadow-lg shadow-sky-200 transition hover:bg-sky-600"
            >
              Request Appointment
            </button>

            <p className="mt-3 text-center text-xs text-slate-500">
              No obligation · Friendly consultation · Quick confirmation
            </p>
          </form>
        </div>
      </section>

      {/* Reviews */}
<section id="reviews" className="bg-gradient-to-b from-white to-slate-50 px-5 py-16 md:py-20">
  <div className="mx-auto max-w-7xl">

<div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
  <p className="font-black text-sky-500">REVIEWS</p>

  <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
    Patients love their experience.
  </h2>

  <div className="rounded-2xl bg-[#f8fbff] px-5 py-3 shadow-sm">
    <div className="flex justify-center text-sky-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-current" />
      ))}
    </div>

    <p className="mt-1 text-sm font-black text-slate-7n00">
      4.9/5 from local patients
    </p>
  </div>
</div>


    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[
        "Calm clinic and very friendly team.",
        "My teeth whitening result was amazing.",
        "They explained everything clearly before treatment.",
      ].map((review) => (
        <div
          key={review}
          className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-6"
        >
          <div className="mb-3 flex gap-1 text-sky-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>

          <p className="leading-7 text-slate-700">
            &quot;{review}&quot;
          </p>

          <p className="mt-4 text-sm font-bold text-slate-500">
            Local patient
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

<TemplateDemoCTA />

<Footer />
    </main>
  );
}