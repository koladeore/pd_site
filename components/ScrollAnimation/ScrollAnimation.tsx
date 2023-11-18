"use client"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode, useEffect } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
}

const ScrollAnimation = ({ children }: ScrollAnimationProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
