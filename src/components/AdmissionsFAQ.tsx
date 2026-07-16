"use client";

import { useState } from "react";

const faqs = [
  { q: "What is the admission process?", a: "Apply online through our portal, submit required documents, and attend counselling. Merit-based admissions with scholarships available for deserving students." },
  { q: "Are scholarships available?", a: "Yes! IFTM offers merit scholarships up to 100% tuition fee waiver, sports scholarships, and need-based financial assistance for eligible students." },
  { q: "What is the placement record?", a: "90%+ placement rate with 500+ recruiting partners including TCS, Infosys, Wipro, Amazon, and more. Highest package: ₹12 LPA." },
  { q: "Is hostel facility available?", a: "Yes, separate hostel facilities for boys and girls with Wi-Fi, mess, 24/7 security, and recreational facilities within the 69+ acre campus." },
  { q: "What approvals does IFTM have?", a: "NAAC 'A' Grade, UGC Section 2(f), AICTE, PCI, and BCI approved. Your degree is recognized nationwide and globally." },
];

export default function AdmissionsFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
          <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-gray-100/50 transition-colors">
            <span className="font-bold text-iftm-navy text-sm md:text-base pr-4">{faq.q}</span>
            <i className={"fas fa-chevron-down text-iftm-primary text-xs transition-transform duration-300 flex-shrink-0 " + (openFaq === i ? "rotate-180" : "")} />
          </button>
          <div className={"overflow-hidden transition-all duration-300 " + (openFaq === i ? "max-h-40" : "max-h-0")}>
            <p className="px-4 md:px-5 pb-4 md:pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
