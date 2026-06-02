import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function Cursor() {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const x = useSpring(mx, { stiffness: 400, damping: 40, mass: 0.4 });
  const y = useSpring(my, { stiffness: 400, damping: 40, mass: 0.4 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor]"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  return (
    <>
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      >
        <motion.div
          animate={{ scale: hover ? 2.4 : 1, opacity: hover ? 0.3 : 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="-translate-x-1/2 -translate-y-1/2 size-3 rounded-full bg-primary"
        />
      </motion.div>
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[99] hidden md:block"
      >
        <motion.div
          animate={{ scale: hover ? 1.6 : 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 18 }}
          className="-translate-x-1/2 -translate-y-1/2 size-10 rounded-full border border-primary/40"
        />
      </motion.div>
    </>
  );
}
