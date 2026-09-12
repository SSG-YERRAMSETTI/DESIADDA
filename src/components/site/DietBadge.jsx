import { cn } from "@/lib/utils";

// Classic Indian veg/non-veg indicator — a bordered square with a centered dot.
// Green = vegetarian, red = non-vegetarian. Never relies on color alone (aria-label).
export default function DietBadge({ veg, className }) {
  return (
    <span
      role="img"
      aria-label={veg ? "Vegetarian" : "Non-vegetarian"}
      className={cn(
        "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] border",
        veg ? "border-mint" : "border-cayenne",
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", veg ? "bg-mint" : "bg-cayenne")} />
    </span>
  );
}