"use client";

const recruiters = [
  "Google", "Microsoft", "Amazon", "TCS", "Infosys", "Wipro",
  "Cipla", "HCL", "Tech Mahindra", "Capgemini", "Accenture", "IBM",
];

export default function PlacementsSection() {
  return (
    <section className="py-20 bg-iftm-light">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-12">
          <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">
            Placements
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-iftm-dark">
            Our Top Recruiters
          </h2>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {recruiters.map((company) => (
            <div
              key={company}
              className="bg-white rounded-xl p-6 flex items-center justify-center h-20 grayscale hover:grayscale-0 transition-all"
            >
              <span className="text-iftm-text-light font-bold text-lg">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
