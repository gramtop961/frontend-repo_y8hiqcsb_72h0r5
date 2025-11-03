import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ava R.",
    text: "These are the only cleaners I trust around my kids and pets. They smell amazing and actually work!",
  },
  {
    id: 2,
    name: "Marcus D.",
    text: "Our glass table finally looks streak-free. Customer service is fantastic too.",
  },
  {
    id: 3,
    name: "Priya S.",
    text: "Love the refill system—saves money and cuts plastic waste. 10/10.",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-emerald-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900">What customers say</h2>
          <p className="mt-2 text-slate-600">Real reviews from happy homes</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.id} className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <Quote className="absolute -top-3 -left-3 h-8 w-8 text-emerald-200" />
              <blockquote className="text-slate-700">“{t.text}”</blockquote>
              <figcaption className="mt-4 font-semibold text-slate-900">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
