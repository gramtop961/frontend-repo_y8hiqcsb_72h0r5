import { ShoppingCart, Sprout } from "lucide-react";
import { useCart } from "./CartContext";

export default function Navbar() {
  const { totalItems, setIsOpen } = useCart();

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-emerald-600 text-white">
              <Sprout className="h-5 w-5" />
            </span>
            <span className="font-semibold text-slate-800 text-lg">PureShine</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#products" className="hover:text-emerald-700 transition-colors">Products</a>
            <a href="#benefits" className="hover:text-emerald-700 transition-colors">Why Us</a>
            <a href="#reviews" className="hover:text-emerald-700 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-emerald-700 transition-colors">Contact</a>
          </nav>

          <button onClick={() => setIsOpen(true)} className="relative inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 transition-colors">
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden sm:inline">Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-white px-1 text-emerald-700 text-xs font-semibold shadow">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
