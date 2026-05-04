import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { PhoneIcon, MapPinIcon, ClockIcon } from "@/components/icons";
import { BUSINESS } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Us — Free Home Remodeling Estimate",
  description: "Contact Hudson Valley Contracting Group for a free in-home estimate. Serving Orange, Ulster & Dutchess Counties, NY. Call (845) 728-5247.",
  openGraph: { title: "Contact HVCG | Free Estimate", url: "https://www.hudsonvalleycontractinggroup.com/contact" },
  alternates: { canonical: "https://www.hudsonvalleycontractinggroup.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Get In Touch"
        h1="Request Your Free Estimate"
        subhead="Fill out the form and we&apos;ll contact you within 1 business day to schedule your free in-home consultation."
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }]}
      />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <h2 className="text-xl font-black text-gray-900 mb-6">Tell Us About Your Project</h2>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5">
              <div className="bg-[oklch(0.96_0.02_263)] rounded-lg p-8 border border-[oklch(0.90_0.02_263)]">
                <h2 className="text-xl font-black text-gray-900 mb-6">Get In Touch Directly</h2>

                <div className="space-y-5">
                  <a href={`tel:${BUSINESS.phoneTel}`} className="flex items-center gap-3 group">
                    <div className="size-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <PhoneIcon className="size-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Call Us</p>
                      <p className="text-lg font-black text-gray-900 group-hover:text-primary transition">{BUSINESS.phone}</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3">
                    <div className="size-10 bg-[oklch(0.90_0.02_263)] rounded-full flex items-center justify-center flex-shrink-0">
                      <ClockIcon className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Hours</p>
                      <p className="text-sm text-gray-700">Mon–Fri: 8:00 AM – 6:00 PM</p>
                      <p className="text-sm text-gray-700">Saturday: 9:00 AM – 4:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="size-10 bg-[oklch(0.90_0.02_263)] rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Service Area</p>
                      <p className="text-sm text-gray-700">Orange, Ulster &amp; Dutchess Counties</p>
                      <p className="text-sm text-gray-500">Hudson Valley, New York</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[oklch(0.87_0.02_263)] mt-6 pt-6">
                  <div className="bg-white rounded-md p-4 border border-[oklch(0.87_0.02_263)]">
                    <p className="text-sm font-semibold text-gray-900 mb-1">⏱ Quick Response Guarantee</p>
                    <p className="text-xs text-gray-600">Most estimates are scheduled within 48 hours of your request.</p>
                  </div>
                  <div className="flex items-center justify-around mt-4 pt-4 border-t border-[oklch(0.87_0.02_263)]">
                    {["Licensed & Insured", "Free Estimates", "No Hard Sell"].map((badge) => (
                      <div key={badge} className="text-center">
                        <p className="text-xs font-bold text-primary">{badge}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-[oklch(0.96_0.02_263)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-black text-gray-900 mb-6 text-center">Serving All of Hudson Valley</h2>
          <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center border border-gray-300 mb-8">
            <p className="text-gray-500 text-sm text-center px-6">
              Interactive service area map coming soon<br />
              <span className="text-gray-400 text-xs">Serving Orange, Ulster &amp; Dutchess Counties, NY</span>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {BUSINESS.cities.map((city) => (
              <span key={city} className="text-xs bg-white text-gray-600 border border-gray-200 rounded-full px-3 py-1">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
