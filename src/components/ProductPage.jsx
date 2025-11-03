import { useParams, useNavigate } from "react-router-dom";
import { Star, CheckCircle2, ArrowLeft } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./Navbar";
import { getProductById } from "./productsData";
import { useCart } from "./CartContext";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addToCart } = useCart();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-700">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 h-1 origin-left bg-emerald-600 z-40" />

      <main className="pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
        </div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl overflow-hidden border border-slate-200">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}>
              <h1 className="text-3xl font-bold text-slate-900">{product.name}</h1>
              <div className="mt-2 flex items-center gap-2 text-amber-500">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-slate-700">{product.rating} / 5</span>
              </div>
              <p className="mt-4 text-slate-700 leading-relaxed">{product.longDescription}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-2xl font-semibold text-emerald-700">${product.price.toFixed(2)}</span>
                <div className="flex gap-3">
                  <button onClick={() => addToCart(product, 1)} className="rounded-md bg-emerald-600 text-white px-5 py-2 font-medium hover:bg-emerald-700 transition-colors">
                    Add to cart
                  </button>
                </div>
              </div>

              <div className="mt-8 grid gap-3">
                {product.features.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <p className="text-slate-700">{f}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-emerald-50/50 border-y border-emerald-100 py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="text-2xl font-semibold text-emerald-900"
            >
              Why you'll love it
            </motion.h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {["Non-toxic & safe", "Refill-friendly", "Powerful on grime"].map((title, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm"
                >
                  <p className="font-medium text-slate-900">{title}</p>
                  <p className="mt-1 text-sm text-slate-600">Thoughtfully formulated for an effective, planet-friendly clean.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
