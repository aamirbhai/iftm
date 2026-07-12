"use client";

import Link from "next/link";

const events = [
  {
    date: "15",
    month: "Mar",
    title: "Annual Tech Fest 2026",
    description: "Three-day technology festival with workshops, hackathons, and guest lectures from industry leaders.",
    href: "/events/tech-fest",
  },
  {
    date: "22",
    month: "Mar",
    title: "Convocation Ceremony",
    description: "Annual convocation ceremony for the graduating batch of 2025-26.",
    href: "/events/convocation",
  },
  {
    date: "05",
    month: "Apr",
    title: "National Conference on AI",
    description: "Two-day national conference on Artificial Intelligence and Machine Learning applications.",
    href: "/events/ai-conference",
  },
];

export default function EventsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">
            Events
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-iftm-dark">
            Upcoming Events
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Link
              key={index}
              href={event.href}
              className="flex gap-4 p-6 rounded-xl border border-iftm-border hover:border-iftm-primary hover:shadow-lg transition-all group"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-iftm-primary rounded-lg flex flex-col items-center justify-center text-white">
                <span className="text-2xl font-bold leading-none font-[family-name:var(--font-number)]">
                  {event.date}
                </span>
                <span className="text-xs uppercase">{event.month}</span>
              </div>
              <div>
                <h3 className="text-iftm-dark font-bold text-[15px] mb-1 group-hover:text-iftm-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-iftm-text-light text-sm">
                  {event.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
