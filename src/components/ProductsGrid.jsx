import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "All-Purpose Cleaner",
    description: "Plant-based formula for kitchens, counters, and more.",
    price: 12.99,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1604335399105-a0c9c9c9b7f6?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Glass & Mirror Spray",
    description: "Streak-free shine with zero harsh fumes.",
    price: 10.5,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1615484477875-6d26667b2d38?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Bathroom Foam Cleaner",
    description: "Cuts through soap scum and hard water safely.",
    price: 14.0,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Floor Concentrate",
    description: "Powerful clean for wood, tile, and laminate.",
    price: 16.0,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1603714228685-8d6d0d9c5b5e?q=80&w=1887&auto=format&fit=crop",
  },
];

export default function ProductsGrid() {
  return (
    <section id="products" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Bestsellers</h2>
          <p className="mt-2 text-slate-600">Top-rated essentials customers love</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article key={p.id} className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="aspect-square overflow-hidden bg-slate-100">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-slate-900">{p.name}</h3>
                  <span className="text-emerald-700 font-semibold">${p.price.toFixed(2)}</span>
                </div>
                <p className="mt-1 text-sm text-slate-600">{p.description}</p>
                <div className="mt-3 flex items-center gap-1 text-amber-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm text-slate-700">{p.rating} / 5</span>
                </div>
                <button className="mt-4 w-full rounded-md bg-emerald-600 px-4 py-2 text-white font-medium hover:bg-emerald-700 transition-colors">
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
