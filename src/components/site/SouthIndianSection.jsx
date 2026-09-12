import { motion } from "framer-motion";
import { DISHES, formatPrice } from "@/data/menu";
import { IMAGES } from "@/data/images";
import { Image } from "@/components/ui/image";
import DietBadge from "./DietBadge";
import OrderButton from "./OrderButton";

const ITEMS = [
  "Masala Dosa",
  "Mysore Masala Dosa",
  "Ghee Karam Dosa",
  "Ghee Karam Idly",
  "Podi Idly",
  "Plain Pesarattu",
];

export default function SouthIndianSection() {
  const dishes = ITEMS.map((n) => DISHES.find((d) => d.name === n)).filter(Boolean);
  return (
    <section
      className="relative py-24 sm:py-32"
      style={{
        background:
          "linear-gradient(180deg, hsl(0 0% 4%), hsl(40 30% 12%), hsl(0 0% 4%))",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <span className="text-xs uppercase tracking-[0.3em] text-saffron">South Indian</span>
            <h2 className="mt-3 font-display text-4xl sm:text-6xl font-bold text-cream text-balance">
              South Indian Comfort. Made Fresh.
            </h2>
            <p className="mt-5 text-cream/70 text-lg max-w-md">
              Crisp dosas, soft idlis and golden pesarattu — breakfast done right, all day.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {dishes.map((d, i) => (
                <motion.div
                  key={d.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center justify-between rounded-xl bg-obsidian/40 border border-gold/15 px-4 py-3"
                >
                  <span className="flex items-center gap-2">
                    <DietBadge veg={d.veg} />
                    <span className="font-display text-lg text-cream">{d.name}</span>
                  </span>
                  <span className="text-gold font-semibold">{formatPrice(d.price)}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-8">
              <OrderButton variant="gold">Order South Indian</OrderButton>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-gold/20 shadow-2xl">
              <Image
                src={IMAGES.southIndian}
                alt="South Indian breakfast spread"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}