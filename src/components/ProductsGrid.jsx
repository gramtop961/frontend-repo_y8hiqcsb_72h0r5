import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "./productsData";
import { useCart } from "./CartContext";
import { motion } from "framer-motion";

export default function ProductsGrid() {
  const { addToCart } = useCart();

  return (
    <section id="products" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Bestsellers</h2>
          <p className="mt-2 text-slate-600">Top-rated essentials customers love</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, idx) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.45, delay: idx * 0.03 }}
              className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <Link to={`/product/${p.id}`} className="block aspect-square overflow-hidden bg-slate-100">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              </Link>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <Link to={`/product/${p.id}`} className="font-semibold text-slate-900 hover:text-emerald-700">
                    {p.name}
                  </Link>
                  <span className="text-emerald-700 font-semibold">${p.price.toFixed(2)}</span>
                </div>
                <p className="mt-1 text-sm text-slate-600">{p.description}</p>
                <div className="mt-3 flex items-center gap-1 text-amber-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm text-slate-700">{p.rating} / 5</span>
                </div>
                <button onClick={() => addToCart(p, 1)} className="mt-4 w-full rounded-md bg-emerald-600 px-4 py-2 text-white font-medium hover:bg-emerald-700 transition-colors">
                  Add to cart
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
