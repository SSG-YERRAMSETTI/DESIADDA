import { Star, ExternalLink } from "lucide-react";

export default function Reviews() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center gap-1 mb-6" aria-hidden="true">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-6 w-6 text-gold" fill="currentColor" />
          ))}
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-cream text-balance">
          Loved dining with us?
        </h2>
        <p className="mt-4 text-cream/60">
          We'd love to hear about your experience. Reviews connect automatically once linked.
        </p>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream text-obsidian px-6 py-3 text-sm font-semibold hover:bg-cream/90 transition min-h-[48px]"
        >
          Leave a Google Review <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}