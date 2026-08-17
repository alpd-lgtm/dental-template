"use client";

import {
  Building2,
  Check,
  ChevronDown,
  Globe2,
  Mail,
  Phone,
  ShieldCheck,
  Stethoscope,
  X,
} from "lucide-react";

import {
  type FormEvent,
  useEffect,
  useState,
} from "react";

type TemplateEnquiryModalProps = {
  open: boolean;
  onClose: () => void;
};

const fieldClass =
  "min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-950 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10";

export default function TemplateEnquiryModal({
  open,
  onClose,
}: TemplateEnquiryModalProps) {
  const [carePlan, setCarePlan] =
    useState(false);

  const [error, setError] =
    useState("");

  const [submitting, setSubmitting] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  /* =========================================================
     RESET WHEN OPENED
  ========================================================= */

  useEffect(() => {
    if (!open) return;

    setCarePlan(false);
    setError("");
    setSubmitting(false);
    setSubmitted(false);
  }, [open]);

  /* =========================================================
     LOCK BODY + ESC CLOSE
  ========================================================= */

  useEffect(() => {
    if (!open) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    function handleEscape(
      event: KeyboardEvent,
    ) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener(
      "keydown",
      handleEscape,
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, [open, onClose]);

  if (!open) return null;

  /* =========================================================
     SUBMIT
  ========================================================= */

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setError("");
    setSubmitting(true);

    const formData =
      new FormData(event.currentTarget);

    const payload = {
      business: String(
        formData.get("business") ?? "",
      ).trim(),

      email: String(
        formData.get("email") ?? "",
      ).trim(),

      phone: String(
        formData.get("phone") ?? "",
      ).trim(),

      currentWebsite: String(
        formData.get("currentWebsite") ?? "",
      ).trim(),

      budget: String(
        formData.get("budget") ?? "",
      ).trim(),

      message: String(
        formData.get("message") ?? "",
      ).trim(),

      companyFax: String(
        formData.get("companyFax") ?? "",
      ).trim(),

      carePlan,

      selectedTemplate: {
        name: "BrightSmile Dental",
        type: "Dental Clinic Website Design",
      },

      websiteType:
        "Ready-Made Website",
    };

    /* REQUIRED */

    if (
      !payload.business ||
      !payload.email
    ) {
      setError(
        "Please enter your business name and email address.",
      );

      setSubmitting(false);
      return;
    }

    /* EMAIL VALIDATION */

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !emailPattern.test(
        payload.email,
      )
    ) {
      setError(
        "Please enter a valid email address.",
      );

      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        "/api/project-enquiry",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            payload,
          ),
        },
      );

      const result = await response
        .json()
        .catch(() => null);

      if (!response.ok) {
        throw new Error(
          result?.error ||
            "We couldn't send your enquiry. Please try again.",
        );
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/75 p-3 backdrop-blur-md sm:p-5">
      {/* =====================================================
          BACKDROP
      ====================================================== */}

      <button
        type="button"
        aria-label="Close enquiry form"
        onClick={onClose}
        className="absolute inset-0 cursor-default"
      />

      {/* =====================================================
          MODAL
      ====================================================== */}

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Start with the BrightSmile Dental website design"
        className={`relative z-10 w-full overflow-hidden bg-white shadow-[0_32px_100px_rgba(15,23,42,0.35)] ${
          submitted
            ? "max-w-[430px] rounded-[26px]"
            : "max-h-[88dvh] max-w-[580px] overflow-y-auto overscroll-contain rounded-[24px] sm:max-h-[90dvh] sm:rounded-[30px]"
        }`}
      >
        {/* TOP ACCENT */}

        <div className="h-1.5 bg-gradient-to-r from-sky-600 via-sky-400 to-cyan-200" />

        {/* =====================================================
            SUCCESS
        ====================================================== */}

        {submitted ? (
          <div className="relative px-5 pb-7 pt-9 text-center sm:px-8 sm:pb-9 sm:pt-10">
            {/* CLOSE */}

            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-400 transition hover:border-sky-300 hover:bg-sky-50 hover:text-slate-950"
            >
              <X size={17} />
            </button>

            {/* ICON */}

            <div className="relative mx-auto w-fit">
              <div className="absolute inset-0 scale-[1.35] rounded-full bg-sky-500/10" />

              <div className="relative grid h-16 w-16 place-items-center rounded-full bg-sky-500 text-white shadow-[0_14px_35px_rgba(14,165,233,0.25)]">
                <Check
                  size={27}
                  strokeWidth={3}
                />
              </div>
            </div>

            {/* STATUS */}

            <div className="mt-6 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-sky-700">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />

                Enquiry Received
              </span>
            </div>

            {/* TITLE */}

            <h2 className="mx-auto mt-4 max-w-[360px] text-[1.85rem] font-black leading-[1.12] tracking-[-0.04em] text-slate-950 sm:text-[2rem]">
              Thanks — we&apos;ve got your request.
            </h2>

            <p className="mx-auto mt-3 max-w-[350px] text-sm leading-6 text-slate-500">
              We&apos;ve received your project details and
              selected dental website design. We&apos;ll
              review everything and contact you with the
              next steps.
            </p>

            {/* NEXT STEPS */}

            <div className="mt-6 rounded-[18px] border border-sky-100 bg-[#f7fcff] p-4 text-left sm:p-5">
              <p className="text-[9px] font-black uppercase tracking-[0.17em] text-sky-700">
                What happens next
              </p>

              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sky-100 text-xs font-black text-sky-700">
                    1
                  </span>

                  <div>
                    <p className="text-sm font-black text-slate-950">
                      We review your request
                    </p>

                    <p className="mt-0.5 text-[11px] leading-5 text-slate-500">
                      We&apos;ll review your clinic details,
                      requirements and selected BrightSmile
                      design.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sky-100 text-xs font-black text-sky-700">
                    2
                  </span>

                  <div>
                    <p className="text-sm font-black text-slate-950">
                      We&apos;ll contact you
                    </p>

                    <p className="mt-0.5 text-[11px] leading-5 text-slate-500">
                      We&apos;ll explain how the website can
                      be customised and answer your questions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SELECTED DESIGN */}

            <div className="mt-4 flex items-center justify-between gap-3 rounded-[16px] border border-sky-200 bg-white px-4 py-3.5 text-left shadow-sm">
              <div className="min-w-0">
                <p className="text-[8px] font-black uppercase tracking-[0.16em] text-sky-700">
                  Selected Design
                </p>

                <p className="mt-1 truncate text-sm font-black text-slate-950">
                  BrightSmile Dental
                </p>

                <p className="mt-0.5 text-[10px] text-slate-400">
                  Dental Clinic Website
                </p>
              </div>

              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-sky-50 px-2.5 py-1.5 text-[8px] font-black uppercase tracking-[0.1em] text-sky-700">
                <span className="grid h-4 w-4 place-items-center rounded-full bg-sky-500 text-white">
                  <Check
                    size={9}
                    strokeWidth={3.5}
                  />
                </span>

                Received
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-slate-950 px-8 py-3 text-sm font-black text-white shadow-[0_10px_24px_rgba(15,23,42,0.15)] transition hover:-translate-y-0.5 hover:bg-slate-900"
            >
              Done
            </button>

            <p className="mt-3 text-[10px] text-slate-400">
              You can safely close this window.
            </p>
          </div>
        ) : (
          /* =====================================================
             FORM
          ====================================================== */

          <div className="p-4 sm:p-7">
            {/* HEADER */}

            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <Stethoscope
                    size={14}
                    className="text-sky-500"
                  />

                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-sky-700">
                    Axis Studio · Dental Demo
                  </p>
                </div>

                <h2 className="mt-2.5 text-[1.65rem] font-black leading-[1.06] tracking-[-0.04em] text-slate-950 sm:text-[2.2rem]">
                  Start with this design.
                </h2>

                <p className="mt-2 max-w-md text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                  Share a few details and we&apos;ll explain
                  how the BrightSmile design can be customised
                  for your dental clinic.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-slate-400 transition hover:border-sky-300 hover:bg-sky-50 hover:text-slate-950"
              >
                <X size={17} />
              </button>
            </div>

            {/* SELECTED DESIGN */}

            <div className="relative mt-5 overflow-hidden rounded-[18px] border border-sky-200 bg-gradient-to-r from-sky-50 via-white to-[#f7fcff] shadow-[0_10px_30px_rgba(14,165,233,0.06)]">
              <div className="flex items-center justify-between gap-3 p-3.5 sm:p-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-950 text-sky-300 shadow-sm">
                    <Stethoscope size={18} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[8px] font-black uppercase tracking-[0.16em] text-sky-700">
                      Selected Design
                    </p>

                    <p className="mt-1 truncate text-sm font-black text-slate-950 sm:text-base">
                      BrightSmile Dental
                    </p>

                    <p className="mt-0.5 text-[10px] text-slate-500">
                      Dental Clinic Website Design
                    </p>
                  </div>
                </div>

                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-sky-200 bg-white px-2.5 py-1.5 text-[8px] font-black uppercase tracking-[0.1em] text-sky-700">
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-sky-500 text-white">
                    <Check
                      size={9}
                      strokeWidth={3.5}
                    />
                  </span>

                  Selected
                </span>
              </div>

              <div className="h-[2px] bg-gradient-to-r from-sky-500 via-cyan-400 to-transparent" />
            </div>

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="mt-5"
            >
              {/* HONEYPOT */}

              <input
                type="text"
                name="companyFax"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              {/* BUSINESS + EMAIL */}

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="business"
                    className="mb-2 block text-xs font-black text-slate-800"
                  >
                    Business name{" "}
                    <span className="text-sky-600">
                      *
                    </span>
                  </label>

                  <div className="relative">
                    <Building2
                      size={16}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="business"
                      name="business"
                      type="text"
                      maxLength={120}
                      placeholder="Your dental clinic"
                      className={`${fieldClass} pl-11`}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-black text-slate-800"
                  >
                    Email address{" "}
                    <span className="text-sky-600">
                      *
                    </span>
                  </label>

                  <div className="relative">
                    <Mail
                      size={16}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      maxLength={254}
                      placeholder="you@example.com"
                      className={`${fieldClass} pl-11`}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* PHONE + WEBSITE */}

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-black text-slate-800"
                  >
                    Phone{" "}
                    <span className="font-medium text-slate-400">
                      (optional)
                    </span>
                  </label>

                  <div className="relative">
                    <Phone
                      size={16}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      maxLength={50}
                      placeholder="Phone number"
                      className={`${fieldClass} pl-11`}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="currentWebsite"
                    className="mb-2 block text-xs font-black text-slate-800"
                  >
                    Existing website{" "}
                    <span className="font-medium text-slate-400">
                      (optional)
                    </span>
                  </label>

                  <div className="relative">
                    <Globe2
                      size={16}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="currentWebsite"
                      name="currentWebsite"
                      type="url"
                      maxLength={300}
                      placeholder="https://..."
                      className={`${fieldClass} pl-11`}
                    />
                  </div>
                </div>
              </div>

              {/* BUDGET */}

              <div className="mt-4">
                <label
                  htmlFor="budget"
                  className="mb-2 block text-xs font-black text-slate-800"
                >
                  Approximate budget{" "}
                  <span className="font-medium text-slate-400">
                    (optional)
                  </span>
                </label>

                <div className="relative">
                  <select
                    id="budget"
                    name="budget"
                    defaultValue=""
                    className={`${fieldClass} cursor-pointer appearance-none pr-10`}
                  >
                    <option value="">
                      Select a budget range
                    </option>

                    <option value="Under $500">
                      Under $500
                    </option>

                    <option value="$500 – $1,000">
                      $500 – $1,000
                    </option>

                    <option value="$1,000 – $2,000">
                      $1,000 – $2,000
                    </option>

                    <option value="$2,000+">
                      $2,000+
                    </option>

                    <option value="Not sure yet">
                      Not sure yet
                    </option>
                  </select>

                  <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                </div>
              </div>

              {/* CARE PLAN */}

              <button
                type="button"
                onClick={() =>
                  setCarePlan(
                    (value) => !value,
                  )
                }
                className={`mt-4 flex w-full items-start gap-3 rounded-[16px] border p-4 text-left transition ${
                  carePlan
                    ? "border-sky-400 bg-sky-50"
                    : "border-slate-200 bg-[#f9fcff] hover:border-sky-300"
                }`}
              >
                <span
                  className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border transition ${
                    carePlan
                      ? "border-sky-500 bg-sky-500 text-white"
                      : "border-slate-300 bg-white text-transparent"
                  }`}
                >
                  <Check
                    size={12}
                    strokeWidth={3}
                  />
                </span>

                <div>
                  <p className="text-xs font-black text-slate-950 sm:text-sm">
                    Add Website Care Plan
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-slate-500 sm:text-xs">
                    Hosting, updates, backups and ongoing
                    website support.
                  </p>
                </div>
              </button>

              {/* MESSAGE */}

              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-black text-slate-800"
                >
                  Tell us about your project{" "}
                  <span className="font-medium text-slate-400">
                    (optional)
                  </span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={1000}
                  placeholder="Tell us about your clinic, dental services, preferred colours, pages you need or anything you would like changed in this design."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium leading-6 text-slate-950 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
                />
              </div>

              {/* ERROR */}

              {error && (
                <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-semibold text-red-700">
                  {error}
                </div>
              )}

              {/* SUBMIT */}

              <button
                type="submit"
                disabled={submitting}
                className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-sky-500 px-6 py-3.5 text-sm font-black text-white shadow-[0_12px_30px_rgba(14,165,233,0.22)] transition hover:-translate-y-0.5 hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {submitting ? (
                  <>
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                    Sending Request...
                  </>
                ) : (
                  "Send Website Enquiry"
                )}
              </button>

              {/* REASSURANCE */}

              <div className="mt-3 flex items-center justify-center gap-2">
                <ShieldCheck
                  size={13}
                  className="text-sky-500"
                />

                <p className="text-center text-[10px] font-medium text-slate-400">
                  No payment or commitment required to send
                  an enquiry.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}