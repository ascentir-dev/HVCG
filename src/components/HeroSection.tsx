"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { CheckCircleIcon } from "@/components/icons"

const FEATURES = [
  "Transform your home with a trusted name in home improvement projects.",
  "Affordable Financing and Payment Options",
  "Technology Driven for Accuracy and Design Customization",
  "No Money Down (with Approved Credit)",
] as const

const SERVICE_OPTIONS = [
  "Bathroom Remodeling",
  "Window Replacement",
  "Door Replacement",
  "Flooring Installation",
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
  "w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.26_0.10_263)]/50 focus:border-[oklch(0.26_0.10_263)]"

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
      {/* Background image */}
      <Image
        src="/images/hero-background.jpg"
        alt="Modern composite shower"
        fill
        className="object-cover object-center"
        priority
        quality={85}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
          {/* Left: text content — 55% on desktop */}
          <div className="flex-1 md:max-w-[55%]">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 text-white text-xs font-semibold uppercase tracking-wide rounded-full px-3 py-1 mb-4">
              Remodeling Reimagined&trade;
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              Affordable luxury.
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/90 font-medium mt-3 mb-8">
              Home remodeling, done right.
            </p>

            {/* Feature list */}
            <ul className="flex flex-col gap-3">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CheckCircleIcon className="size-5 text-white/80 flex-shrink-0 mt-0.5" />
                  <span className="text-base text-white/90">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: quote form — ~40% on desktop */}
          <div className="w-full md:w-[40%] md:flex-shrink-0">
            <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-5">
                Get started with your project
              </h2>

              <form onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col gap-4">
                  {/* Row 1: First Name | Last Name */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="firstName" className={labelClass}>
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={form.firstName}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className={labelClass}>
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={form.lastName}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone | Zip */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="zip" className={labelClass}>
                        Zip Code
                      </label>
                      <input
                        id="zip"
                        name="zip"
                        type="text"
                        required
                        value={form.zip}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Row 3: Email */}
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  {/* Row 4: Service type */}
                  <div>
                    <label htmlFor="service" className={labelClass}>
                      Select Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className={cn(inputClass, "bg-white")}
                    >
                      <option value="" disabled>
                        Select a Service Type
                      </option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className={cn(
                      "w-full bg-[oklch(0.26_0.10_263)] text-white",
                      "font-bold py-3 text-base uppercase rounded-sm",
                      "hover:opacity-90 transition-opacity"
                    )}
                  >
                    Get My Free Quote
                  </button>

                  {/* Fine print */}
                  <p className="text-[10px] text-gray-400 text-center mt-2">
                    By submitting this form you agree to be contacted by West
                    Shore Home.
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
