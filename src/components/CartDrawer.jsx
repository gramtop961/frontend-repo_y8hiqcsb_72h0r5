import { X, Trash, Plus, Minus, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "./CartContext";

export default function CartDrawer() {
  const { items, removeFromCart, setQuantity, subtotal, isOpen, setIsOpen, clearCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60"
            onClick={() => setIsOpen(false)}
          />
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between border-b border-slate-200 p-4">
              <div className="flex items-center gap-2 text-slate-900 font-semibold">
                <ShoppingBag className="h-5 w-5" /> Cart
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 rounded-md hover:bg-slate-100">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <p className="text-slate-600">Your cart is empty.</p>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li key={item.id} className="flex gap-3">
                      <img src={item.image} alt={item.name} className="h-20 w-20 rounded-md object-cover" />
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-medium text-slate-900">{item.name}</p>
                            <p className="text-sm text-slate-600">${item.price.toFixed(2)}</p>
                          </div>
                          <button onClick={() => removeFromCart(item.id)} className="p-2 rounded-md hover:bg-slate-100">
                            <Trash className="h-4 w-4 text-slate-500" />
                          </button>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <button onClick={() => setQuantity(item.id, item.quantity - 1)} className="p-1 rounded-md border border-slate-200 hover:bg-slate-50">
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="min-w-[2ch] text-center">{item.quantity}</span>
                          <button onClick={() => setQuantity(item.id, item.quantity + 1)} className="p-1 rounded-md border border-slate-200 hover:bg-slate-50">
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-slate-200 p-4">
              <div className="flex items-center justify-between text-slate-900 font-medium">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="mt-4 grid gap-2">
                <button className="w-full rounded-md bg-emerald-600 text-white py-2 font-medium hover:bg-emerald-700 transition-colors">
                  Checkout
                </button>
                <button onClick={clearCart} className="w-full rounded-md border border-slate-200 py-2 font-medium hover:bg-slate-50">
                  Clear cart
                </button>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
