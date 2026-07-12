"use client";

const galleryItems = [
  { label: "Main Building", gradient: "from-iftm-primary to-iftm-navy" },
  { label: "Library", gradient: "from-iftm-navy to-iftm-navy-light" },
  { label: "Laboratory", gradient: "from-iftm-primary-dark to-iftm-primary" },
  { label: "Sports Complex", gradient: "from-iftm-navy-light to-iftm-primary" },
  { label: "Hostel", gradient: "from-iftm-primary to-iftm-dark" },
  { label: "Auditorium", gradient: "from-iftm-dark to-iftm-navy" },
];

export default function CampusGallerySection() {
  return (
    <section className="py-20 bg-iftm-light">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">
            Campus Life
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-iftm-dark">
            Explore Our Campus
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden h-[200px] md:h-[250px] group cursor-pointer bg-gradient-to-br ${item.gradient}`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-white font-semibold text-sm md:text-base">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
