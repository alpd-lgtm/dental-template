import { MapPin, Phone } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Book", href: "#booking" },
  { label: "Reviews", href: "#reviews" },
];

const services = [
  "General Checkups",
  "Teeth Whitening",
  "Dental Implants",
  "Emergency Dental",
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#f8fbff] px-5 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4">
<div className="md:col-span-2">
  <p className="text-2xl font-black">
    BrightSmile <span className="text-sky-500">Dental</span>
  </p>

  <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
    Modern dental care for healthy, confident smiles. Gentle checkups,
    cosmetic treatments, emergency care and clear appointment support.
  </p>

  <a
    href="tel:1300123456"
    className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-sky-500 px-5 py-3 font-black text-white shadow-lg shadow-sky-200"
  >
    <Phone className="h-5 w-5" />
    Call 1300 123 456
  </a>

  {/* ✅ Address here */}
  <p className="mt-5 flex items-start gap-2 text-sm text-slate-600 font-medium leading-relaxed">
    <MapPin className="mt-[2px] h-4 w-4 text-sky-500 shrink-0" />
    <span className="max-w-xs">
      123 George Street, Parramatta NSW 2150, Australia
    </span>
  </p>
</div>

          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div>
              <h3 className="font-black">Quick Links</h3>
              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
                {links.map((link) => (
                  <a key={link.href} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-black">Services</h3>
              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
                {services.map((service) => (
                  <span key={service}>{service}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

<div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-400">

  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

    {/* Location */}
    <p className="flex items-start gap-2 leading-relaxed">
      <MapPin className="mt-[2px] h-4 w-4 text-sky-500 shrink-0" />
      <span className="max-w-xs">
        Serving Sydney, Parramatta, Blacktown & nearby areas.
      </span>
    </p>

    {/* Copyright */}
    <p className="mt-1 text-xs font-semibold md:mt-0 md:text-sm">
      © 2026 BrightSmile Dental. All rights reserved.
    </p>

  </div>

</div>
      </div>
    </footer>
  );
}