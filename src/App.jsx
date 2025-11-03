import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductsGrid from "./components/ProductsGrid";
import Testimonials from "./components/Testimonials";
import AnimatedSection from "./components/AnimatedSection";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 h-1 origin-left bg-emerald-600 z-40" />
      <main>
        <AnimatedSection>
          <Hero />
        </AnimatedSection>
        <AnimatedSection>
          <ProductsGrid />
        </AnimatedSection>

        <AnimatedSection className="bg-white py-14">
          <div id="benefits" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {["Plant-based formulas", "Powerful cleaning", "Refill & save", "Fast, free shipping"].map((title, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="rounded-2xl border border-slate-200 p-6"
                >
                  <p className="font-semibold">{title}</p>
                  <p className="mt-1 text-slate-600 text-sm">
                    {i === 0 && "Safe for kids, pets, and the planet"}
                    {i === 1 && "Cuts grease and grime with ease"}
                    {i === 2 && "Reduce plastic with concentrates"}
                    {i === 3 && "On orders over $35"}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>

        <footer id="contact" className="bg-slate-900 text-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold">Get in touch</h3>
                <p className="mt-2 text-slate-300">Questions about products or wholesale? We’re here to help.</p>
                <p className="mt-4 text-slate-200">support@pureshine.co</p>
              </div>
              <form className="grid gap-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <input className="w-full rounded-md border border-slate-600 bg-slate-800 px-3 py-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Your name" />
                  <input type="email" className="w-full rounded-md border border-slate-600 bg-slate-800 px-3 py-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Email address" />
                </div>
                <textarea rows="3" className="w-full rounded-md border border-slate-600 bg-slate-800 px-3 py-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="How can we help?" />
                <button className="inline-flex w-fit items-center justify-center rounded-md bg-emerald-600 px-5 py-2 font-medium text-white hover:bg-emerald-700 transition-colors">Send</button>
              </form>
            </div>
            <div className="mt-10 border-t border-slate-700 pt-6 text-sm text-slate-400">© {new Date().getFullYear()} PureShine. All rights reserved.</div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
