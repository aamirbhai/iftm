"use client";

const testimonials = [
  {
    name: "Rahul Sharma",
    course: "B.Tech (CS) 2018-2022",
    text: "IFTM University provided me with excellent education and placement opportunities. The faculty is supportive and the infrastructure is world-class.",
  },
  {
    name: "Priya Singh",
    course: "MBA 2019-2021",
    text: "My journey at IFTM was transformative. The university helped me develop both technical and soft skills needed for the corporate world.",
  },
  {
    name: "Amit Kumar",
    course: "B.Pharm 2017-2021",
    text: "The pharmaceutical sciences department has excellent labs and experienced faculty. I got placed in a top pharmaceutical company.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-iftm-primary text-xs font-bold uppercase tracking-[2px] mb-2 block">
            Testimonials
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-iftm-dark">
            What our Alumni say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-iftm-light rounded-xl p-8 text-center hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-iftm-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                {testimonial.name[0]}
              </div>
              <h4 className="font-bold text-iftm-dark">{testimonial.name}</h4>
              <p className="text-iftm-text-light text-sm mb-4">
                {testimonial.course}
              </p>
              <p className="text-iftm-text text-sm italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
