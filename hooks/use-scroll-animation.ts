import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function useScrollAnimation(threshold = 0.1) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold,
    rootMargin: "0px 0px -50px 0px",
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return { ref, controls };
}
