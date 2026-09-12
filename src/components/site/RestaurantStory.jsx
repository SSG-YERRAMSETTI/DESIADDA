import { motion } from "framer-motion";

const STATS = [
  { n: "150+", l: "Dishes" },
  { n: "20+", l: "Biryanis & Pulaos" },
  { n: "2", l: "Snack Sessions" },
  { n: "100%", l: "Made Fresh" },
];

export default function RestaurantStory() {
  return (
    <section id="story" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-saffron">Our Story</span>
        <h2 className="mt-4 font-display text-4xl sm:text-6xl font-bold text-cream text-balance">
          Tradition at the Core. A Modern Indian Table.
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 text-lg sm:text-xl leading-relaxed text-cream/70 max-w-3xl mx-auto"
        >
          From slow-cooked biryanis and bold Andhra spices to comforting dosas, curries and
          street-side favorites, our menu brings together flavors from across India.
        </motion.p>
        <p className="mt-4 text-cream/40 italic text-sm">
          [Restaurant history coming soon — editable in settings.]
        </p>
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl sm:text-5xl font-bold gold-text">
                {s.n}
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-cream/50">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}