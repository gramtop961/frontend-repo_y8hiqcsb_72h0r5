import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductsGrid from "./components/ProductsGrid";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <ProductsGrid />

        {/* Benefits quick section */}
        <section id="benefits" className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-slate-200 p-6">
                <p className="font-semibold">Plant-based formulas</p>
                <p className="mt-1 text-slate-600 text-sm">Safe for kids, pets, and the planet</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <p className="font-semibold">Powerful cleaning</p>
                <p className="mt-1 text-slate-600 text-sm">Cuts grease and grime with ease</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <p className="font-semibold">Refill & save</p>
                <p className="mt-1 text-slate-600 text-sm">Reduce plastic with concentrates</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <p className="font-semibold">Fast, free shipping</p>
                <p className="mt-1 text-slate-600 text-sm">On orders over $35</p>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* Contact / Footer */}
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
