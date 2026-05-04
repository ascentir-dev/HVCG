"use client";

import { useState } from "react";
import { faqSchema } from "@/lib/schema";
import { ChevronDownIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  heading?: string;
  includeSchema?: boolean;
}

export function FAQSection({ faqs, heading = "Frequently Asked Questions", includeSchema = true }: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-16">
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
        />
      )}
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-3 text-center">Common Questions</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-10 text-center">{heading}</h2>
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                type="button"
                className="w-full flex items-center justify-between py-5 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-gray-900 text-base">{faq.question}</span>
                <ChevronDownIcon className={cn("size-5 text-primary flex-shrink-0 transition-transform", open === i && "rotate-180")} />
              </button>
              {open === i && (
                <div className="pb-5 text-gray-600 text-sm leading-relaxed prose prose-sm max-w-none">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
