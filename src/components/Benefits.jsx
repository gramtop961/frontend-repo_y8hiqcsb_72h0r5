import { Leaf, ShieldCheck, Recycle, Sparkles } from "lucide-react";

const items = [
  {
    icon: Leaf,
    title: "Plant-Based",
    desc: "Made with biodegradable, non-toxic ingredients that are safe for families and pets.",
  },
  {
    icon: ShieldCheck,
    title: "Powerful Clean",
    desc: "Professional-grade performance that tackles grease, grime, and germs.",
  },
  {
    icon: Recycle,
    title: "Refill Friendly",
    desc: "Cut plastic waste with concentrated refills and recyclable packaging.",
  },
  {
    icon: Sparkles,
    title: "Streak-Free Finish",
    desc: "Leaves surfaces shining without residue or harsh chemical smells.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-emerald-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Why Choose PureShine</h2>
          <p className="mt-2 text-slate-600">Sustainable formulas. Impressive results.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
