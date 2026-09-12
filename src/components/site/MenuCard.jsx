import { formatPrice } from "@/data/menu";
import { dishImage } from "@/data/images";
import { Image } from "@/components/ui/image";
import DietBadge from "./DietBadge";
import OrderButton from "./OrderButton";

const TIME_BADGE = {
  before5: {
    label: "Before 5 PM",
    className: "bg-saffron/15 text-saffron border-saffron/30",
  },
  after5: {
    label: "After 5 PM",
    className: "bg-chilli/15 text-cream border-chilli/30",
  },
};

export default function MenuCard({ dish }) {
  const img = dishImage(dish.name);
  const tb = dish.time ? TIME_BADGE[dish.time] : null;
  return (
    <div className="group relative flex gap-4 rounded-2xl bg-card/60 border border-gold/10 hover:border-gold/25 p-3 transition-colors">
      <div className="relative h-20 w-20 sm:h-24 sm:w-24 shrink-0 overflow-hidden rounded-xl bg-obsidian">
        {img ? (
          <Image
            src={img}
            alt={dish.name}
            className="w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-chilli/20 to-obsidian flex items-center justify-center font-display text-2xl text-gold/40">
            {dish.name[0]}
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between min-w-0 flex-1 py-1">
        <div>
          <div className="flex items-center gap-2">
            <DietBadge veg={dish.veg} />
            <h3 className="font-display text-lg sm:text-xl font-semibold text-cream truncate">
              {dish.name}
            </h3>
          </div>
          {tb && (
            <span
              className={`mt-1.5 inline-block rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wider ${tb.className}`}
            >
              Available {tb.label}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="font-display text-xl font-semibold text-gold">
            {formatPrice(dish.price)}
          </span>
          <OrderButton
            variant="outline"
            className="px-3 py-1.5 text-xs opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
          >
            Order
          </OrderButton>
        </div>
      </div>
    </div>
  );
}