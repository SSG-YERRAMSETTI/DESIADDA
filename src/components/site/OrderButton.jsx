import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { isOrderConfigured, orderUrl } from "@/data/restaurant";
import { ShoppingBag } from "lucide-react";

const variants = {
  primary:
    "bg-saffron text-obsidian hover:bg-saffron/90 shadow-[0_8px_30px_-8px_hsl(var(--saffron)/0.6)]",
  gold: "bg-gold text-obsidian hover:bg-gold/90",
  outline:
    "border border-gold/40 text-cream hover:border-gold hover:bg-gold/10",
  ghost: "text-cream hover:text-saffron",
};

export default function OrderButton({
  variant = "primary",
  className,
  children = "Order Online",
  icon = true,
  ...props
}) {
  const { toast } = useToast();
  const configured = isOrderConfigured();
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 active:scale-[0.98] min-h-[48px]";

  const content = (
    <>
      {icon && <ShoppingBag className="h-4 w-4" />}
      {children}
    </>
  );

  if (configured) {
    return (
      <a
        href={orderUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, variants[variant], className)}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() =>
        toast({
          title: "Online ordering coming soon",
          description:
            "We're connecting our ordering system — please call us to place an order.",
        })
      }
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {content}
    </button>
  );
}