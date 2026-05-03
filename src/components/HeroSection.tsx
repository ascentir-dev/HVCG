"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { CheckCircleIcon } from "@/components/icons"

const FEATURES = [
  "Serving the Hudson Valley for over 15 years.",
  "Transparent pricing — no hidden fees, ever.",
  "Licensed, insured, and background-checked crews.",
  "Financing available with approved credit.",
] as const

const SERVICE_OPTIONS = [
  "Bathroom Remodeling",
  "Kitchen Renovation",
  "Basement Finishing",
  "Home Addition",
  "Other",
] as const

interface FormState {
  firstName: string
  lastName: string
  phone: string
  zip: string
  email: string
  service: string
}

const INITIAL_FORM: FormState = {
  firstName: "",
  lastName: "",
  phone: "",
  zip: "",
  email: "",
  service: "",
}

const labelClass =
  "block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"

const inputClass =
  "w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"

export function HeroSection() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("Quote form submitted:", form)
  }

  return (
    <section id="quote" className="relative min-h-screen flex items-center">
      <Image
        src="/images/hero-background.jpg"
        alt="Beautiful bathroom remodel by HVCG"
        fill
        className="object-cover object-center"
        priority
        quality={85}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">

          {/* Left: text content */}
          <div className="flex-1 md:max-w-[55%]">
            <div className="inline-flex items-center bg-white/10 text-white text-xs font-semibold uppercase tracking-wide rounded-full px-3 py-1 mb-4">
              Hudson Valley&apos;s Trusted Contractor
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              Craftsmanship<br />you can trust.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium mt-3 mb-8">
              Home remodeling, built to last.
            </p>
            <ul className="flex flex-col gap-3">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CheckCircleIcon className="size-5 text-white/80 flex-shrink-0 mt-0.5" />
                  <span className="text-base text-white/90">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: quote form */}
          <div className="w-full md:w-[40%] md:flex-shrink-0">
            <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                Get your free estimate
              </h2>
              <p className="text-sm text-gray-500 mb-5">No obligation. We&apos;ll call you within 24 hours.</p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="firstName" className={labelClass}>First Name</label>
                      <input id="firstName" name="firstName" type="text" required
                        value={form.firstName} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="lastName" className={labelClass}>Last Name</label>
                      <input id="lastName" name="lastName" type="text" required
                        value={form.lastName} onChange={handleChange} className={inputClass} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone</label>
                      <input id="phone" name="phone" type="tel" required
                        value={form.phone} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="zip" className={labelClass}>Zip Code</label>
                      <input id="zip" name="zip" type="text" required
                        value={form.zip} onChange={handleChange} className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>Email</label>
                    <input id="email" name="email" type="email" required
                      value={form.email} onChange={handleChange} className={inputClass} />
                  </div>

                  <div>
                    <label htmlFor="service" className={labelClass}>Service Needed</label>
                    <select id="service" name="service" required
                      value={form.service} onChange={handleChange}
                      className={cn(inputClass, "bg-white")}
                    >
                      <option value="" disabled>Select a service</option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-bold py-3 text-base uppercase rounded-sm hover:opacity-90 transition-opacity"
                  >
                    Request Free Estimate
                  </button>

                  <p className="text-[10px] text-gray-400 text-center">
                    By submitting you agree to be contacted by Hudson Valley Contracting Group.
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
