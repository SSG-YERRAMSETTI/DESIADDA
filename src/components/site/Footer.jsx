import { Instagram, Facebook, MapPin, Phone, Clock } from "lucide-react";
import { RESTAURANT } from "@/data/restaurant";
import OrderButton from "./OrderButton";

const NAV = [
  { label: "Menu", href: "#menu" },
  { label: "Order Online", href: "#home" },
  { label: "Visit", href: "#visit" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/15 pt-16 pb-28 lg:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="font-display text-3xl font-bold text-cream">
              DESI<span className="text-saffron"> ADDA</span>
            </span>
            <p className="mt-4 text-cream/60 max-w-sm">
              Authentic Indian flavors — biryanis, Andhra specialties, dosas, curries,
              Indo-Chinese and more.
            </p>
            <div className="mt-6">
              <OrderButton variant="outline">Order Online</OrderButton>
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-4">Explore</h4>
            <ul className="space-y-2">
              {NAV.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className="text-cream/70 hover:text-saffron transition">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-4">Visit</h4>
            <ul className="space-y-3 text-cream/70 text-sm">
              <li className="flex gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-saffron/70 shrink-0" />
                <span>
                  {RESTAURANT.address.line1}, {RESTAURANT.address.line2}
                </span>
              </li>
              <li className="flex gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-saffron/70 shrink-0" />
                <span>{RESTAURANT.phone}</span>
              </li>
              <li className="flex gap-2">
                <Clock className="h-4 w-4 mt-0.5 text-saffron/70 shrink-0" />
                <span>{RESTAURANT.hours}</span>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href={RESTAURANT.social.instagram}
                aria-label="Instagram"
                className="h-10 w-10 rounded-full border border-gold/30 flex items-center justify-center text-cream hover:bg-gold/10 transition"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={RESTAURANT.social.facebook}
                aria-label="Facebook"
                className="h-10 w-10 rounded-full border border-gold/30 flex items-center justify-center text-cream hover:bg-gold/10 transition"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-cream/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-cream/40">
          <p>
            © {new Date().getFullYear()} {RESTAURANT.name}. All rights reserved.
          </p>
          <p>Menu items and prices are subject to change.</p>
        </div>
      </div>
    </footer>
  );
}