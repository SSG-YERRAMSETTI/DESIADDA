import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { RESTAURANT } from "@/data/restaurant";
import OrderButton from "./OrderButton";

function InfoRow({ icon: Icon, label, lines }) {
  return (
    <div className="flex gap-4">
      <div className="h-11 w-11 shrink-0 rounded-full bg-saffron/10 border border-saffron/20 flex items-center justify-center">
        <Icon className="h-5 w-5 text-saffron" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-cream/40">{label}</div>
        {lines.map((l, i) => (
          <div key={i} className="text-cream/85">
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function VisitUs() {
  const phoneTel = RESTAURANT.phone !== "[Phone]" ? `tel:${RESTAURANT.phone}` : "#";
  return (
    <section id="visit" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-saffron">Visit Us</span>
          <h2 className="mt-3 font-display text-4xl sm:text-6xl font-bold text-cream text-balance">
            Come Sit With Us
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glass rounded-3xl p-8 space-y-6">
            <InfoRow
              icon={MapPin}
              label="Address"
              lines={[RESTAURANT.name, RESTAURANT.address.line1, RESTAURANT.address.line2]}
            />
            <InfoRow icon={Phone} label="Phone" lines={[RESTAURANT.phone]} />
            <InfoRow icon={Mail} label="Email" lines={[RESTAURANT.email]} />
            <InfoRow icon={Clock} label="Hours" lines={[RESTAURANT.hours]} />
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={RESTAURANT.mapsUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-3 text-sm font-semibold text-cream hover:bg-gold/10 transition min-h-[48px]"
              >
                <Navigation className="h-4 w-4" /> Directions
              </a>
              <a
                href={phoneTel}
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-3 text-sm font-semibold text-cream hover:bg-gold/10 transition min-h-[48px]"
              >
                <Phone className="h-4 w-4" /> Call Us
              </a>
              <OrderButton variant="primary">Order Online</OrderButton>
            </div>
          </div>
          <div
            id="contact"
            className="relative rounded-3xl overflow-hidden border border-gold/15 min-h-[320px] bg-card flex items-center justify-center"
          >
            <div className="text-center p-8">
              <MapPin className="h-10 w-10 text-gold/60 mx-auto" />
              <p className="mt-4 text-cream/60 max-w-xs">
                A map preview will appear here once a Google Maps URL is connected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}