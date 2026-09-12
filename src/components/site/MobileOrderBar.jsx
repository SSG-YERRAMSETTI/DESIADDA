import { motion } from "framer-motion";
import OrderButton from "./OrderButton";

export default function MobileOrderBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 p-3">
      <motion.div
        initial={{ y: 80 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 100, damping: 18 }}
        className="glass rounded-full p-2 shadow-2xl shadow-black/50"
      >
        <div className="relative">
          <div className="absolute -inset-1 rounded-full tandoor-glow blur-md opacity-60 animate-pulse" />
          <OrderButton className="relative w-full py-3.5 text-base">
            Order Online
          </OrderButton>
        </div>
      </motion.div>
    </div>
  );
}