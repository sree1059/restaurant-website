import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const MagneticButton = ({
  children,
  className = "",
  strength = 25,
  as: Tag = "a",
  ...props
}) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });
  const tx = useTransform(sx, (v) => v);
  const ty = useTransform(sy, (v) => v);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    x.set((dx / r.width) * strength);
    y.set((dy / r.height) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const MotionTag = motion[Tag] || motion.a;

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: tx, y: ty }}
      className={className}
      {...props}
    >
      <motion.span style={{ display: "inline-block", x: tx, y: ty }}>
        {children}
      </motion.span>
    </MotionTag>
  );
};

export default MagneticButton;
