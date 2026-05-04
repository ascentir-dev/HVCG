"use client";

import { useState } from "react";

const PROJECT_TYPES = [
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Basement Finishing",
  "Home Addition",
  "Whole-Home Renovation",
  "Other",
];

const BUDGET_RANGES = [
  "Under $15,000",
  "$15,000–$30,000",
  "$30,000–$60,000",
  "$60,000–$100,000",
  "$100,000+",
  "Not Sure Yet",
];

const CALL_TIMES = [
  "Morning (8am–12pm)",
  "Afternoon (12pm–5pm)",
  "Evening (5pm–7pm)",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    projectType: "",
    description: "",
    budget: "",
    financing: false,
    callTime: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const target = e.target;
    const value = target instanceof HTMLInputElement && target.type === "checkbox"
      ? target.checked
      : target.value;
    setForm((prev) => ({ ...prev, [target.name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-[oklch(0.96_0.02_263)] rounded-lg p-10 text-center border border-[oklch(0.90_0.02_263)]">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-black text-gray-900 mb-2">Request Received!</h3>
        <p className="text-gray-600">
          Thank you — we&apos;ll be in touch within 1 business day to schedule your free in-home consultation.
        </p>
        <p className="text-sm text-gray-500 mt-3">
          Questions in the meantime? Call us at <a href="tel:+18457285247" className="text-primary font-semibold">(845) 728-5247</a>.
        </p>
      </div>
    );
  }

  const inputClass = "border border-gray-300 rounded-sm px-3 py-2.5 w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="firstName">First Name *</label>
          <input id="firstName" name="firstName" type="text" required value={form.firstName} onChange={handleChange} className={inputClass} placeholder="Jane" />
        </div>
        <div>
          <label className={labelClass} htmlFor="lastName">Last Name *</label>
          <input id="lastName" name="lastName" type="text" required value={form.lastName} onChange={handleChange} className={inputClass} placeholder="Smith" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="phone">Phone *</label>
          <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} className={inputClass} placeholder="(845) 555-0000" />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="jane@example.com" />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="city">Your City / Town</label>
        <input id="city" name="city" type="text" value={form.city} onChange={handleChange} className={inputClass} placeholder="e.g. Newburgh, Beacon, Kingston..." />
      </div>

      <div>
        <label className={labelClass} htmlFor="projectType">Project Type *</label>
        <select id="projectType" name="projectType" required value={form.projectType} onChange={handleChange} className={inputClass}>
          <option value="">Select a project type...</option>
          {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="description">Tell Us About Your Project</label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={form.description}
          onChange={handleChange}
          className={inputClass}
          placeholder="Describe what you're hoping to accomplish — the more detail, the better..."
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="budget">Approximate Budget</label>
          <select id="budget" name="budget" value={form.budget} onChange={handleChange} className={inputClass}>
            <option value="">Select a range...</option>
            {BUDGET_RANGES.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="callTime">Best Time to Call</label>
          <select id="callTime" name="callTime" value={form.callTime} onChange={handleChange} className={inputClass}>
            <option value="">Select a time...</option>
            {CALL_TIMES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <input
          id="financing"
          name="financing"
          type="checkbox"
          checked={form.financing}
          onChange={handleChange}
          className="mt-0.5 size-4 accent-primary"
        />
        <label htmlFor="financing" className="text-sm text-gray-700 cursor-pointer">
          I&apos;m interested in financing options for this project
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white font-bold text-sm uppercase tracking-wider px-6 py-4 rounded-sm hover:opacity-90 transition-opacity"
      >
        Request My Free Estimate
      </button>

      <p className="text-xs text-gray-400 text-center">
        By submitting, you agree to be contacted about your project. We never share your information.
      </p>
    </form>
  );
}
