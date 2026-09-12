import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DISHES, formatPrice } from "@/data/menu";
import { dishImage } from "@/data/images";
import { Image } from "@/components/ui/image";
import OrderButton from "./OrderButton";

const BIRYANI_NAMES = [
  "Vijayawada Boneless Biryani",
  "Chicken 65 Biryani",
  "Mutton Keema Biryani",
  "Mutton Ghee Roast Biryani",
  "Chicken Ghee Roast Biryani",
  "Lamb Biryani",
  "Shrimp Biryani",
];

export default function BiryaniCollection() {
  const dishes = BIRYANI_NAMES.map((n) => DISHES.find((d) => d.name === n)).filter(
    Boolean
  );
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const dish = dishes[i];

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((p) => (p + 1) % dishes.length), 4000);
    return () => clearInterval(t);
  }, [paused, dishes.length]);

  const go = (n) => setI((p) => (p + n + dishes.length) % dishes.length);

  return (
    <section
      className="relative py-24 sm:py-32 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 tandoor-glow opacity-25" />
      <div className="absolute -left-20 top-1/3 h-40 w-40 rounded-full bg-chilli/20 blur-3xl" />
      <div className="absolute right-10 bottom-10 h-56 w-56 rounded-full bg-saffron/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square rounded-[2rem] overflow-hidden border border-gold/20 shadow-2xl"
              >
                <Image src={dishImage(dish.name)} alt={dish.name} className="w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
            <div className="absolute -bottom-4 -right-2 sm:-right-4 glass rounded-2xl px-5 py-3">
              <span className="font-display text-3xl font-bold text-gold">
                {formatPrice(dish.price)}
              </span>
            </div>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-saffron">Signature</span>
            <h2 className="mt-3 font-display text-4xl sm:text-6xl font-bold text-cream text-balance">
              The Biryani Collection
            </h2>
            <p className="mt-5 text-cream/60 text-lg max-w-md">
              Slow-cooked, layered and sealed — our biryanis are the heart of the kitchen.
            </p>
            <div className="mt-8 space-y-2">
              {dishes.map((d, idx) => (
                <button
                  key={d.name}
                  onClick={() => setI(idx)}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-all ${
                    idx === i
                      ? "bg-saffron/10 border border-saffron/30"
                      : "border border-transparent hover:bg-card/50"
                  }`}
                >
                  <span
                    className={`font-display text-lg ${
                      idx === i ? "text-saffron" : "text-cream/80"
                    }`}
                  >
                    {d.name}
                  </span>
                  <span
                    className={`text-sm font-semibold ${
                      idx === i ? "text-gold" : "text-cream/50"
                    }`}
                  >
                    {formatPrice(d.price)}
                  </span>
                </button>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-3">
              <OrderButton>Order This Biryani</OrderButton>
              <div className="flex gap-2">
                <button
                  onClick={() => go(-1)}
                  aria-label="Previous biryani"
                  className="h-11 w-11 rounded-full border border-gold/30 text-cream hover:bg-gold/10 flex items-center justify-center"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Next biryani"
                  className="h-11 w-11 rounded-full border border-gold/30 text-cream hover:bg-gold/10 flex items-center justify-center"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}