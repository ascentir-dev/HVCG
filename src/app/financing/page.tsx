import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FAQSection } from "@/components/FAQSection";
import { ServiceCTA } from "@/components/ServiceCTA";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Home Remodeling Financing Options",
  description: "Flexible financing for your Hudson Valley home remodel. Pre-qualify in minutes with no impact to your credit score. Loans from $5,000 to $100,000+.",
  openGraph: { title: "Financing Options | HVCG", url: "https://hvcg.com/financing" },
  alternates: { canonical: "https://hvcg.com/financing" },
};

const OPTIONS = [
  {
    title: "Home Improvement Loan",
    subtitle: "Most Popular",
    details: [
      "Fixed rates from 6.99% APR",
      "Loan terms from 24 to 84 months",
      "No home equity required",
      "Borrow $5,000–$100,000",
      "Approval in 24–48 hours",
      "Funds in 3–5 business days",
    ],
    highlight: true,
  },
  {
    title: "Home Equity Line of Credit",
    subtitle: "Best for Large Projects",
    details: [
      "Variable rates tied to prime",
      "Use your existing home equity",
      "Interest may be tax-deductible*",
      "Revolving credit — use as needed",
      "Great for phased renovations",
      "Longer repayment terms available",
    ],
    highlight: false,
  },
  {
    title: "0% Promotional Financing",
    subtitle: "Best for Smaller Projects",
    details: [
      "12–18 month no-interest periods",
      "Ideal for $5,000–$25,000 projects",
      "No prepayment penalties",
      "Simple online application",
      "Same-day decisions available",
      "Multiple lender options",
    ],
    highlight: false,
  },
];

const STEPS = [
  { num: "01", title: "Apply in 2 Minutes", desc: "Complete a simple online or phone application — basic personal and income information only." },
  { num: "02", title: "Get Pre-Qualified", desc: "Receive a decision with no hard credit inquiry. Know your rate and terms before committing to anything." },
  { num: "03", title: "Choose Your Terms", desc: "Select the loan amount, rate, and repayment term that fits your monthly budget and timeline." },
  { num: "04", title: "Start Your Project", desc: "Funds are available within days of final approval — your project starts on schedule." },
];

const FAQS = [
  { question: "Does applying affect my credit score?", answer: "No. The pre-qualification process uses a soft credit pull only, which has no impact on your credit score. A hard inquiry only occurs if you accept a loan offer and complete the full application." },
  { question: "What credit score do I need to qualify?", answer: "We work with lenders that offer options for a range of credit profiles. A score of 640 or higher typically qualifies for our best rates, but options are available for scores as low as 580. We'll connect you with the right lender for your situation." },
  { question: "How quickly can I get approved?", answer: "Pre-qualification decisions are often instant. Full loan approval typically takes 24–48 hours. Funds are usually available within 3–5 business days of final approval, so your project can start almost immediately." },
  { question: "Can I finance just part of my project?", answer: "Yes. Our minimum project size for financing is $5,000. You can also choose to finance a portion of your project and pay the remainder out of pocket — whatever works best for your budget." },
  { question: "Is the interest tax-deductible?", answer: "Interest on HELOCs (Home Equity Lines of Credit) may be tax-deductible when funds are used for home improvement. Home improvement loan interest is generally not deductible. Consult a tax advisor to understand what applies to your specific situation." },
  { question: "What if I want to pay it off early?", answer: "Most of our financing partners charge no prepayment penalties. You can pay off your loan in full at any time without additional fees. We confirm this with each lender before recommending any product." },
];

export default function FinancingPage() {
  return (
    <>
      <PageHero
        badge="Flexible Financing"
        h1="Make Your Dream Home a Reality"
        subhead="Don&apos;t let budget hold you back from the home you deserve. Flexible financing with competitive rates and no hard credit pull to pre-qualify."
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Financing", url: "/financing" }]}
        cta={{ label: "Check My Rate", href: "/contact" }}
        ctaSecondary={{ label: "Call (845) 728-5247", href: "tel:+18457285247" }}
      />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">Financing Options Available</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We partner with leading lenders to offer options that fit every project size and financial situation.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {OPTIONS.map((opt) => (
              <div
                key={opt.title}
                className={`rounded-lg border p-8 ${opt.highlight ? "border-primary bg-primary/5 shadow-md" : "border-gray-100 bg-white shadow-sm"}`}
              >
                {opt.highlight && (
                  <span className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                    {opt.subtitle}
                  </span>
                )}
                {!opt.highlight && (
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                    {opt.subtitle}
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-5">{opt.title}</h3>
                <ul className="space-y-3">
                  {opt.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckIcon className="size-4 text-primary flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[oklch(0.96_0.02_263)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-10 text-center">How It Works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s) => (
              <div key={s.num} className="bg-white rounded-lg p-6 shadow-sm text-center">
                <p className="text-3xl font-black text-primary mb-2">{s.num}</p>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 text-center">Sample Monthly Payments</h2>
          <p className="text-gray-600 text-center mb-8 text-sm">Estimates based on a fixed-rate home improvement loan. Actual rates vary by creditworthiness.</p>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[oklch(0.96_0.02_263)]">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Project Amount</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Interest Rate</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Loan Term</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Est. Monthly Payment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">$25,000</td>
                  <td className="px-6 py-4 text-gray-600">7.99% APR</td>
                  <td className="px-6 py-4 text-gray-600">60 months</td>
                  <td className="px-6 py-4 font-bold text-primary">~$507/mo</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">$50,000</td>
                  <td className="px-6 py-4 text-gray-600">7.99% APR</td>
                  <td className="px-6 py-4 text-gray-600">84 months</td>
                  <td className="px-6 py-4 font-bold text-primary">~$763/mo</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">$75,000</td>
                  <td className="px-6 py-4 text-gray-600">8.49% APR</td>
                  <td className="px-6 py-4 text-gray-600">84 months</td>
                  <td className="px-6 py-4 font-bold text-primary">~$1,168/mo</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">$100,000</td>
                  <td className="px-6 py-4 text-gray-600">8.99% APR</td>
                  <td className="px-6 py-4 text-gray-600">120 months</td>
                  <td className="px-6 py-4 font-bold text-primary">~$1,267/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">*Rates shown are estimates only. Not a commitment to lend. Actual rates depend on creditworthiness and lender terms.</p>
        </div>
      </section>

      <section className="bg-[oklch(0.96_0.02_263)] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-10 text-center">Why Finance Your Remodel?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Preserve Your Cash Flow", desc: "Keep your savings intact for emergencies and other goals — spread project costs over manageable monthly payments." },
              { title: "Beat Rising Material Costs", desc: "Construction material costs have been volatile. Starting your project now and financing it locks in today's prices." },
              { title: "Add Value Immediately", desc: "Enjoy your renovated home right away while it increases in value — don't wait years to save while living in a space you don't love." },
              { title: "Flexible Payments", desc: "Choose terms from 2 to 10 years to find the monthly payment that works for your budget — no one-size-fits-all approach." },
            ].map((b) => (
              <div key={b.title} className="bg-white rounded-lg p-6 shadow-sm flex gap-4">
                <CheckIcon className="size-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={FAQS} heading="Financing FAQ" />

      <ServiceCTA heading="Ready to Start Your Project?" subhead="Apply for financing today and turn your vision into reality — with monthly payments that fit your budget." />
    </>
  );
}
