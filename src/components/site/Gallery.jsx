import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IMAGES } from "@/data/images";
import { Image } from "@/components/ui/image";

const ITEMS = [
  { src: IMAGES.heroHandi, span: "lg:col-span-2 lg:row-span-2", label: "Biryani" },
  { src: IMAGES.gallery.naan, span: "", label: "Naan" },
  { src: IMAGES.gallery.noodles, span: "", label: "Indo-Chinese" },
  { src: IMAGES.gallery.tandoori, span: "lg:col-span-2", label: "Tandoori" },
  { src: IMAGES.gallery.gulabJamun, span: "", label: "Desserts" },
];

function Tile({ item }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`relative overflow-hidden rounded-2xl border border-gold/15 group ${item.span}`}
    >
      <Image
        src={item.src}
        alt={item.label}
        className="w-full h-full transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
      <span className="absolute bottom-3 left-4 font-display text-xl text-cream/90">
        {item.label}
      </span>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-saffron">Gallery</span>
          <h2 className="mt-3 font-display text-4xl sm:text-6xl font-bold text-cream text-balance">
            A Feast for the Eyes
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] lg:auto-rows-[220px] gap-4">
          {ITEMS.map((it, i) => (
            <Tile key={i} item={it} />
          ))}
        </div>
      </div>
    </section>
  );
}