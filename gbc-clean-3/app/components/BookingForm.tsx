"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { siteData } from "../data/siteData";

const schema = z.object({
    name: z.string().min(2, "Please enter your full name"),
    phone: z.string().min(7, "Please enter a phone number"),
    email: z.string().email("Please enter a valid email"),
    postcode: z.string().min(2, "Please enter your location or postcode"),
    service: z.string().min(1, "Please pick a service"),
    contactPref: z.enum(["Phone", "Email", "Either"]),
    preferred: z.string().optional(),
    message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const SERVICES = [
    "Tree Surgery",
    "Land Clearance",
    "Log Splitting",
    "Hedge Clearance",
    "Outdoor Contracting",
    "Not sure — need advice",
  ];

export default function BookingForm() {
    const [submitted, setSubmitted] = useState(false);
    const {
          register,
          handleSubmit,
          formState: { errors, isSubmitting },
    } = useForm<FormValues>({
          resolver: zodResolver(schema),
          defaultValues: { contactPref: "Either" },
    });

  const onSubmit = (data: FormValues) => {
        const subject = `Quote enquiry — ${data.service} — ${data.name}`;
        const lines = [
                `Name: ${data.name}`,
                `Phone: ${data.phone}`,
                `Email: ${data.email}`,
                `Location / postcode: ${data.postcode}`,
                `Service: ${data.service}`,
                `Preferred contact: ${data.contactPref}`,
                data.preferred ? `Preferred date/time: ${data.preferred}` : null,
                "",
                "Job details:",
                data.message || "(no extra detail provided)",
                "",
                "— Sent from gbcontracting.co.uk booking form",
              ].filter(Boolean);

        const mailto = `mailto:${siteData.email}?subject=${encodeURIComponent(
                subject
              )}&body=${encodeURIComponent(lines.join("\n"))}`;

        // Open the user's email client with a pre-filled draft.
        window.location.href = mailto;
        setSubmitted(true);
  };

  if (submitted) {
        return (
                <div className="rounded-2xl border border-forest-900/10 bg-cream-50 p-8 md:p-12 text-center">
                        <div className="mx-auto h-12 w-12 rounded-full bg-forest-800 text-cream-50 grid place-items-center mb-5">
                                  <svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                                              <path d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-3-3a1 1 0 011.4-1.4L9 11.6l6.3-6.3a1 1 0 011.4 0z" />
                                  </svg>svg>
                        </div>div>
                        <h3 className="font-display font-bold text-2xl text-forest-950 tracking-tight">
                                  Almost there — just hit send.
                        </h3>h3>
                        <p className="mt-3 text-charcoal-800/80">
                                  Your email app should have opened with a pre-filled message to <strong>{siteData.email}</strong>strong>. Send it and Mungo will get back to you.
                        </p>p>
                        <p className="mt-2 text-sm text-charcoal-800/60">
                                  Email didn’t open? <a className="underline" href={`mailto:${siteData.email}`}>Click here</a>a> or call{" "}
                                  <a className="underline" href={`tel:${siteData.phoneTel}`}>{siteData.phoneDisplay}</a>a>.
                        </p>p>
                </div>div>
              );
  }
  
    const inputCls =
          "w-full rounded-xl border border-forest-900/15 bg-cream-50 px-4 py-3 text-sm text-forest-950 placeholder:text-forest-950/40 focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-forest-600 transition";
    const labelCls = "text-xs uppercase tracking-[0.2em] font-semibold text-forest-900";
    const errCls = "mt-1 text-xs text-red-700";
  
    return (
          <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="rounded-2xl border border-forest-900/10 bg-cream-50 p-6 md:p-10"
                >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                                  <label className={labelCls} htmlFor="name">Full name *</label>label>
                                  <input id="name" autoComplete="name" {...register("name")} className={`mt-2 ${inputCls}`} placeholder="e.g. Sam Williams" />
                          {errors.name && <p className={errCls}>{errors.name.message}</p>p>}
                        </div>div>
                        <div>
                                  <label className={labelCls} htmlFor="phone">Phone *</label>label>
                                  <input id="phone" inputMode="tel" autoComplete="tel" {...register("phone")} className={`mt-2 ${inputCls}`} placeholder="07…" />
                          {errors.phone && <p className={errCls}>{errors.phone.message}</p>p>}
                        </div>div>
                        <div>
                                  <label className={labelCls} htmlFor="email">Email *</label>label>
                                  <input id="email" type="email" autoComplete="email" {...register("email")} className={`mt-2 ${inputCls}`} placeholder="you@email.com" />
                          {errors.email && <p className={errCls}>{errors.email.message}</p>p>}
                        </div>div>
                        <div>
                                  <label className={labelCls} htmlFor="postcode">Location / postcode *</label>label>
                                  <input id="postcode" autoComplete="postal-code" {...register("postcode")} className={`mt-2 ${inputCls}`} placeholder="e.g. TA1 4…" />
                          {errors.postcode && <p className={errCls}>{errors.postcode.message}</p>p>}
                        </div>div>
                        <div>
                                  <label className={labelCls} htmlFor="service">Type of work *</label>label>
                                  <select id="service" {...register("service")} className={`mt-2 ${inputCls}`} defaultValue="">
                                              <option value="" disabled>
                                                            Choose one…
                                              </option>option>
                                    {SERVICES.map((s) => (
                                <option key={s} value={s}>
                                  {s}
                                </option>option>
                              ))}
                                  </select>select>
                          {errors.service && <p className={errCls}>{errors.service.message}</p>p>}
                        </div>div>
                        <div>
                                  <label className={labelCls} htmlFor="contactPref">Preferred contact</label>label>
                                  <select id="contactPref" {...register("contactPref")} className={`mt-2 ${inputCls}`}>
                                              <option>Either</option>option>
                                              <option>Phone</option>option>
                                              <option>Email</option>option>
                                  </select>select>
                        </div>div>
                        <div className="md:col-span-2">
                                  <label className={labelCls} htmlFor="preferred">Preferred date / time for callback or visit</label>label>
                                  <input id="preferred" {...register("preferred")} className={`mt-2 ${inputCls}`} placeholder="e.g. Weekday afternoons / Sat 22 March" />
                        </div>div>
                        <div className="md:col-span-2">
                                  <label className={labelCls} htmlFor="message">Job details</label>label>
                                  <textarea id="message" rows={5} {...register("message")} className={`mt-2 ${inputCls}`} placeholder="Briefly describe the job, site access, any tricky bits…" />
                        </div>div>
                </div>div>
          
                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-forest-800 hover:bg-forest-700 text-cream-50 px-6 py-3.5 text-sm font-semibold transition-colors disabled:opacity-60"
                                  >
                          {isSubmitting ? "Preparing…" : "Send my enquiry"}
                                  <span className="arrow-shift" aria-hidden>→</span>span>
                        </button>button>
                        <a
                                    href={`tel:${siteData.phoneTel}`}
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-forest-900/20 text-forest-950 hover:bg-forest-950 hover:text-cream-50 px-6 py-3.5 text-sm font-semibold transition-colors"
                                  >
                                  Or call {siteData.phoneDisplay}
                        </a>a>
                </div>div>
          
                <p className="mt-5 text-xs text-charcoal-800/60">
                        Submitting opens your email app with a pre-filled draft to {siteData.email}. We’ll never share your details.
                </p>p>
          </form>form>
        );
}
</div>
