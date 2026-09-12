import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Leaf, Drumstick, Utensils } from "lucide-react";
import { DISHES, CATEGORIES } from "@/data/menu";
import MenuCard from "./MenuCard";

const DIET_FILTERS = [
  { key: "all", label: "All", icon: Utensils },
  { key: "veg", label: "Vegetarian", icon: Leaf },
  { key: "nonveg", label: "Non-Veg", icon: Drumstick },
];

export default function MenuSection() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("popular");
  const [diet, setDiet] = useState("all");

  const filtered = useMemo(() => {
    let list = DISHES;
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter((d) => d.name.toLowerCase().includes(q));
    } else if (cat === "popular") {
      list = list.filter((d) => d.popular);
    } else {
      list = list.filter((d) => d.category === cat);
    }
    if (diet === "veg") list = list.filter((d) => d.veg);
    if (diet === "nonveg") list = list.filter((d) => !d.veg);
    return list;
  }, [query, cat, diet]);

  const snacksSplit = !query.trim() && cat === "snacks";
  const before5 = snacksSplit ? filtered.filter((d) => d.time === "before5") : [];
  const after5 = snacksSplit ? filtered.filter((d) => d.time === "after5") : [];

  return (
    <section
      id="menu"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-obsidian to-background"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-saffron">Our Menu</span>
          <h2 className="mt-3 font-display text-4xl sm:text-6xl font-bold text-cream text-balance">
            From street-side favorites to slow-cooked biryanis.
          </h2>
        </div>

        <div className="mt-10 max-w-xl mx-auto">
          <div className="glass flex items-center gap-3 rounded-full px-5 py-3">
            <Search className="h-5 w-5 text-gold/70 shrink-0" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search biryani, paneer, chicken..."
              aria-label="Search menu"
              className="flex-1 bg-transparent text-cream placeholder:text-cream/40 outline-none text-base"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="text-cream/50 hover:text-cream text-sm shrink-0"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {DIET_FILTERS.map((f) => {
            const active = diet === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setDiet(f.key)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  active
                    ? "bg-saffron text-obsidian"
                    : "border border-cream/15 text-cream/70 hover:border-gold/40"
                }`}
              >
                <f.icon className="h-4 w-4" /> {f.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 -mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto no-scrollbar">
          <div className="flex gap-2 w-max sm:w-auto sm:flex-wrap sm:justify-center">
            {CATEGORIES.map((c) => {
              const active = !query.trim() && cat === c.key;
              return (
                <button
                  key={c.key}
                  onClick={() => {
                    setCat(c.key);
                    setQuery("");
                  }}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    active
                      ? "bg-gold text-obsidian"
                      : "bg-card/60 text-cream/70 hover:text-cream border border-gold/10"
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={query.trim() ? "search-" + diet : cat + "-" + diet}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="mt-10"
          >
            {filtered.length === 0 ? (
              <p className="text-center text-cream/50 py-20">
                No dishes found. Try another search.
              </p>
            ) : snacksSplit ? (
              <div className="space-y-12">
                <SnackGroup title="Available Before 5 PM" items={before5} />
                <SnackGroup title="Available After 5 PM" items={after5} />
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map((d) => (
                  <MenuCard key={d.name} dish={d} />
                ))}
              </div>
            )}
            <p className="mt-8 text-center text-sm text-cream/40">
              {filtered.length} {filtered.length === 1 ? "dish" : "dishes"}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function SnackGroup({ title, items }) {
  if (!items.length) return null;
  return (
    <div>
      <h3 className="mb-4 inline-flex items-center gap-2 font-display text-2xl font-semibold text-cream">
        <span className="h-2 w-2 rounded-full bg-saffron" />
        {title}
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((d) => (
          <MenuCard key={d.name} dish={d} />
        ))}
      </div>
    </div>
  );
}