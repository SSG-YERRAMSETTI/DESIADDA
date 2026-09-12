import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";
import OrderButton from "./OrderButton";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Popular Dishes", href: "#popular" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit Us", href: "#visit" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            className={cn(
              "flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all duration-500",
              scrolled ? "glass shadow-lg shadow-black/40" : "bg-transparent"
            )}
          >
            <a href="#home" className="flex items-center gap-2" aria-label="DESI ADDA home">
              <img
                src={`${import.meta.env.BASE_URL}favicon.ico`}
                alt=""
                className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
              />
              <span className="font-display text-2xl font-bold tracking-tight text-cream">
                DESI<span className="text-saffron"> ADDA</span>
              </span>
            </a>
            <div className="hidden lg:flex items-center gap-8">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="relative text-sm font-medium text-cream/70 hover:text-saffron transition-colors duration-300 group"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-saffron transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
            <div className="hidden lg:block">
              <OrderButton className="px-5 py-2.5 text-xs uppercase tracking-widest">
                Order Online
              </OrderButton>
            </div>
            <button
              className="lg:hidden text-cream p-2 -mr-2"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-obsidian/95 backdrop-blur-xl" />
            <div className="relative h-full flex flex-col">
              <div className="flex items-center justify-between px-6 py-5">
                <span className="font-display text-2xl font-bold text-cream">
                  DESI<span className="text-saffron"> ADDA</span>
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="text-cream p-2 -mr-2"
                >
                  <X className="h-7 w-7" />
                </button>
              </div>
              <nav className="flex-1 flex flex-col justify-center gap-1 px-6">
                {LINKS.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.07 * i + 0.1 }}
                    className="font-display text-4xl font-semibold text-cream/80 hover:text-saffron transition-colors py-2 border-b border-cream/10"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>
              <div className="px-6 pb-10">
                <OrderButton className="w-full">Order Online</OrderButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}