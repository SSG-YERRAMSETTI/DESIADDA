import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { popularDishes, formatPrice } from "@/data/menu";
import { dishImage } from "@/data/images";
import { Image } from "@/components/ui/image";
import DietBadge from "./DietBadge";
import OrderButton from "./OrderButton";

function TiltCard({ dish, index }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 15,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 15,
  });
  const img = dishImage(dish.name);

  const onMove = (e) => {
    if (reduce) return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08 }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="group relative rounded-3xl overflow-hidden bg-card border border-gold/10 hover:border-gold/30 transition-colors"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {img ? (
          <Image
            src={img}
            alt={dish.name}
            className="w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-chilli/30 to-obsidian flex items-center justify-center">
            <span className="font-display text-5xl text-gold/40">{dish.name[0]}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
        <div className="absolute top-4 left-4">
          <DietBadge veg={dish.veg} className="h-5 w-5" />
        </div>
        <div className="absolute top-4 right-4 rounded-full bg-obsidian/70 backdrop-blur px-3 py-1 text-sm font-semibold text-gold border border-gold/20">
          {formatPrice(dish.price)}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-2xl font-semibold text-cream">{dish.name}</h3>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs uppercase tracking-widest text-cream/40">Popular</span>
          <OrderButton
            variant="outline"
            className="px-4 py-2 text-xs opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
          >
            Order
          </OrderButton>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedDishes() {
  const dishes = popularDishes();
  return (
    <section id="popular" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-saffron">Featured</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-cream text-balance">
              Popular Dishes
            </h2>
          </div>
          <p className="max-w-sm text-cream/60">
            Guest favorites — from signature biryanis to crispy dosas and cool lassi.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dishes.map((d, i) => (
            <TiltCard key={d.name} dish={d} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}