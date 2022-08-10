import { SlideFade } from "@chakra-ui/react";
import { MotionStyle } from "framer-motion";
import { useEffect, useState } from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";

/**
 * Transition when element is in viewport
 */
const InViewTransition = ({
  style,
  children,
  opt = { threshold: 0.2 },
}: {
  children: React.ReactNode;
  opt?: IntersectionOptions;
  style?: MotionStyle;
}) => {
  const [isIn, setIsIn] = useState(false);
  const { inView, ref } = useInView(opt);

  useEffect(() => {
    if (inView) setIsIn(true);
  }, [inView]);

  return (
    <SlideFade style={style} ref={ref} in={isIn}>
      {children}
    </SlideFade>
  );
};

export default InViewTransition;
