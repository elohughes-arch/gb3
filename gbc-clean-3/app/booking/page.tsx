"use client";
import { useActionState, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";
import { siteData } from "../data/siteData";

// ─────────────────────────────────────────────────────────────
// IMPORTANT: Replace YOUR_FORM_ID below with your Formspree ID.
// ─────────────────────────────────────────────────────────────
const FORM_ID = "YOUR_FORM_ID";

async function submitBookingAction(prevState: any, formData: FormData) {
  const data = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    service: formData.get("service"),
    location: formData.get("location"),
    size: formData.get("size"),
    preferredDate: formData.get("date"),
    message: formData.get("message"),
    _subject: `New enquiry from ${formData.get("name")} — ${formData.get("service")}`,
  };

  if (!data.name || !data.phone || !data.service) {
    return { error: "Please complete your name, phone and service type." };
  }

  try {
    const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      return { success: true };
    } else {
      return { error: "Submission failed. Please try again or call us." };
    }
  } catch (e) {
    return { error: "Something went wrong. Please call us directly." };
  }
}

export default function BookingPage() {
  const [state, formAction, isPending] = useActionState(submitBookingAction, null);
  const [submittedName, setSubmittedName] = useState("");

  if (state?.success) return (
    <main className="min-h-screen bg-wegrow-dark">
      <Nav />
      <div className="min-h-[80vh] flex items-center justify-center px-6 py-20 text-center">
        <div className="animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-wegrow-lime flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-wegrow-lime/20">
            <svg className="w-10 h-10 text-wegrow-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white tracking-tight mb-4">
            Enquiry Sent
          </h2>
          <p className="text-white/60 text-lg max-w-sm mx-auto mb-10 leading-relaxed">
            Thanks! We'll be in touch within 24 hours to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="px-8 py-4 bg-wegrow-lime hover:bg-white text-wegrow-dark font-bold rounded-full transition-all">
              Back to Home
            </Link>
            <a href={`tel:${siteData.phone.replace(/\s/g, '')}`} className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all">
              Call Now
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );

  return (
    <main className="bg-wegrow-dark min-h-screen text-white">
      <Nav />

      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 bg-wegrow-lime/10 border border-wegrow-lime/30 rounded-full text-wegrow-lime text-xs font-bold tracking-widest uppercase mb-6">
            Free Quote
          </div>
          <h1 className="text-5xl md:text-7xl font-sans tracking-tight leading-[0.9] mb-6">
            Book a Service<br />
            <span className="text-wegrow-lime font-serif italic font-light">or Get a Quote</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            Fill in the form and we'll respond within 24 hours. Prefer to talk? Call <a href={`tel:${siteData.phone.replace(/\s/g, '')}`} className="text-wegrow-lime hover:text-white transition-colors font-bold">{siteData.phone}</a> directly.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <form action={formAction} className="space-y-8">
            
            {/* Contact Details */}
            <div className="glass p-8 md:p-10 rounded-3xl space-y-6">
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-wegrow-lime">Your Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[0.65rem] font-bold uppercase tracking-widest text-white/50">Full Name *</label>
                  <input name="name" type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-wegrow-lime transition-colors" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[0.65rem] font-bold uppercase tracking-widest text-white/50">Phone Number *</label>
                  <input name="phone" type="tel" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-wegrow-lime transition-colors" placeholder="Your phone number" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[0.65rem] font-bold uppercase tracking-widest text-white/50">Email Address</label>
                <input name="email" type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-wegrow-lime transition-colors" placeholder="your@email.com" />
              </div>
            </div>

            {/* Project Details */}
            <div className="glass p-8 md:p-10 rounded-3xl space-y-6">
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-wegrow-lime">Project Details</h3>
              
              <div className="space-y-2">
                <label className="text-[0.65rem] font-bold uppercase tracking-widest text-white/50">Service Required *</label>
                <select name="service" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-wegrow-lime transition-colors appearance-none cursor-pointer">
                  <option value="" className="bg-wegrow-card">Select a service...</option>
                  {siteData.services.map(s => <option key={s.title} value={s.title} className="bg-wegrow-card">{s.title}</option>)}
                  <option value="Multiple" className="bg-wegrow-card">Multiple Services</option>
                  <option value="Advice" className="bg-wegrow-card">Not Sure — Need Advice</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[0.65rem] font-bold uppercase tracking-widest text-white/50">Location / Postcode</label>
                  <input name="location" type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-wegrow-lime transition-colors" placeholder="e.g. Taunton, TA1" />
                </div>
                <div className="space-y-2">
                  <label className="text-[0.65rem] font-bold uppercase tracking-widest text-white/50">Approximate Size</label>
                  <input name="size" type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-wegrow-lime transition-colors" placeholder="e.g. 2 acres, 50m hedge" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[0.65rem] font-bold uppercase tracking-widest text-white/50">Preferred Date</label>
                <input name="date" type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-wegrow-lime transition-colors [color-scheme:dark]" />
              </div>

              <div className="space-y-2">
                <label className="text-[0.65rem] font-bold uppercase tracking-widest text-white/50">Additional Details</label>
                <textarea name="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-wegrow-lime transition-colors resize-none" placeholder="Tell us anything else about the job..."></textarea>
              </div>
            </div>

            {state?.error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400 text-sm animate-fade-in">
                {state.error}
              </div>
            )}

            <button 
              type="submit" 
              disabled={isPending}
              className={`w-full py-5 rounded-full font-bold uppercase tracking-widest text-sm transition-all transform active:scale-95 ${
                isPending ? "bg-white/10 text-white/50 cursor-not-allowed" : "bg-wegrow-lime hover:bg-white text-wegrow-dark shadow-2xl"
              }`}
            >
              {isPending ? "Sending Enquiry..." : "Submit Request"}
            </button>

            <p className="text-center text-white/50 text-sm mt-6 leading-relaxed">
              We respond to all enquiries within 24 hours.<br />
              Need help faster? Call us: <a href={`tel:${siteData.phone.replace(/\s/g, '')}`} className="text-wegrow-lime font-bold">{siteData.phone}</a>
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
