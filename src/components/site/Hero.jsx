import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import OrderButton from "./OrderButton";

const SPICES = [
  { size: 10, color: "bg-saffron/70", x: "8%", y: "22%", delay: 0 },
  { size: 6, color: "bg-gold/80", x: "86%", y: "30%", delay: 1.2 },
  { size: 8, color: "bg-chilli/70", x: "14%", y: "76%", delay: 0.6 },
  { size: 5, color: "bg-mint/70", x: "80%", y: "80%", delay: 2 },
  { size: 7, color: "bg-gold/70", x: "50%", y: "12%", delay: 1.8 },
  { size: 6, color: "bg-saffron/60", x: "92%", y: "60%", delay: 0.9 },
  { size: 9, color: "bg-chilli/50", x: "4%", y: "52%", delay: 2.4 },
];

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });

  const bowlX = useTransform(sx, [-0.5, 0.5], [-18, 18]);
  const bowlY = useTransform(sy, [-0.5, 0.5], [-12, 12]);
  const glowX = useTransform(sx, [-0.5, 0.5], [40, -40]);

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
    <section
      id="home"
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-obsidian" />
      <div className="absolute inset-0 tandoor-glow opacity-50" />
      <motion.div
        style={{ x: glowX }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[80vh] w-[80vh] rounded-full tandoor-glow blur-3xl" />
      <div className="absolute inset-0 grain opacity-[0.06] mix-blend-overlay" />

      {!reduce &&
        SPICES.map((s, i) => (
          <motion.span
            key={i}
            className={"absolute rounded-full " + s.color}
            style={{ left: s.x, top: s.y, width: s.size, height: s.size }}
            animate={{ y: [0, -22, 0], x: [0, 8, 0], opacity: [0.35, 0.85, 0.35] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
          />
        ))}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center w-full pt-28 pb-24">
        <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block rounded-full border border-gold/30 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold"
          >
            Authentic Indian Cuisine
          </motion.span>
          <h1 className="mt-6 font-display font-bold leading-[1.05] text-cream text-balance">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="block text-5xl sm:text-6xl lg:text-7xl"
              >
                Authentic Indian
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.45, duration: 0.8 }}
                className="block text-5xl sm:text-6xl lg:text-7xl text-saffron"
              >
                Flavors.
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="block text-5xl sm:text-6xl lg:text-7xl"
              >
                Made With Character.
              </motion.span>
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-6 max-w-xl mx-auto lg:mx-0 text-cream/70 text-lg leading-relaxed"
          >
            From aromatic biryanis, pulavs and Andhra curries to crispy dosas, Indo-Chinese
            favorites and traditional Indian desserts.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <OrderButton className="px-8 py-4 text-base">Order Online</OrderButton>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/20 px-8 py-4 text-base font-semibold text-cream hover:bg-cream/5 transition-all min-h-[48px]"
            >
              Explore Menu <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <motion.div style={{ x: bowlX, y: bowlY }} className="relative">
            <motion.div
              animate={reduce ? {} : { rotate: [0, 3, 0, -3, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute -inset-10 tandoor-glow blur-2xl opacity-70" />
              <div className="relative h-[320px] w-[320px] sm:h-[440px] sm:w-[440px] lg:h-[500px] lg:w-[560px] flex items-center justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}favicon.ico`}
                  alt="DESI ADDA logo"
                  className="w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-cream/50 hover:text-saffron transition-colors"
      >
        <span className="text-[11px] uppercase tracking-[0.3em]">Discover Our Menu</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}