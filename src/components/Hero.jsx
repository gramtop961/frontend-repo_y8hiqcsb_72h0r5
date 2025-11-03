import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              Eco-friendly cleaning that actually works
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Make every surface shine with safe, sustainable care
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Premium plant-based cleaners for home and business. Powerful on dirt, gentle on the planet.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#products" className="inline-flex justify-center rounded-md bg-emerald-600 px-6 py-3 text-white font-medium shadow hover:bg-emerald-700 transition-colors">Shop bestsellers</a>
              <a href="#benefits" className="inline-flex justify-center rounded-md border border-slate-300 px-6 py-3 text-slate-700 font-medium hover:bg-slate-50 transition-colors">Why choose us</a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 p-6">
              <img
                src="https://images.unsplash.com/photo-1598300053656-8b3a5f8d6d2f?q=80&w=1974&auto=format&fit=crop"
                alt="Eco cleaning products"
                className="h-full w-full object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-emerald-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium">
              New: Concentrated refills
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
