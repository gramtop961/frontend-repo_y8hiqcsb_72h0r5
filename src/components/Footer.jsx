export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-semibold text-lg">PureShine</h4>
            <p className="mt-2 text-sm text-slate-400">
              Eco-friendly cleaning products crafted for a healthier home and planet.
            </p>
          </div>
          <div>
            <h5 className="text-white font-semibold">Help</h5>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#products" className="hover:text-white">Shop</a></li>
              <li><a href="#benefits" className="hover:text-white">Sustainability</a></li>
              <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold">Stay updated</h5>
            <form className="mt-3 flex gap-2">
              <input type="email" required placeholder="Email address" className="w-full rounded-md bg-slate-800 border border-slate-700 px-3 py-2 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <button className="rounded-md bg-emerald-600 px-4 py-2 text-white text-sm font-medium hover:bg-emerald-700">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} PureShine, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
