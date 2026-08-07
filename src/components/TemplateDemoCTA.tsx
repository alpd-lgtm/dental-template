export function TemplateDemoCTA() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[28px] bg-[#071126] px-6 py-8 text-white sm:px-10 sm:py-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* LEFT */}
            <div>
              <span className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-sky-300">
                Axis Studio Website Demo
              </span>

              <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                Like this website?
                <span className="block text-sky-400">
                  Make this design yours.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                Axis Studio can customise this design with your business name,
                branding, services, images, content and contact details.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold text-white/65 sm:text-sm">
                <span>✓ Customised for your business</span>
                <span>✓ Mobile-friendly</span>
                <span>✓ Setup & launch included</span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 sm:p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-sky-300">
                Interested in this design?
              </p>

              <h3 className="mt-2 text-xl font-black">
                Start with this website style.
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Tell us about your business and we&apos;ll help you get started.
              </p>

              <div className="mt-5 grid gap-3">
                <a
                 href="https://axistudio.studio/contact?template=brightsmile-dental"
                  className="flex min-h-12 items-center justify-center rounded-xl bg-sky-500 px-5 text-sm font-black text-white transition hover:bg-sky-400"
                >
                  Start With This Design →
                </a>

                <a
                  href="https://axistudio.studio/templates"
                  className="flex min-h-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-5 text-sm font-black text-white/70 transition hover:bg-white/[0.08] hover:text-white"
                >
                  View More Designs →
                </a>
              </div>

              <p className="mt-4 text-center text-[10px] text-white/30">
                This website is an Axis Studio demonstration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}