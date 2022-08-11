import { useRef, useEffect, useState, ReactNode } from "react";
import { Box } from "@chakra-ui/react";

/**
 * Get scroll progression range from 0.0 to 1.0
 */
const getScrollProgress = (from = 0, to = 0) => {
  const progress = (document.documentElement.scrollTop - from) / to - from;

  return progress;
};

/**
 * Parallaxable component that will smoothly slide in as user scroll.
 *
 * SSR is not supported
 */
const Parallax = ({
  startTop = "0",
  scrollTop = 0,
  children,
}: {
  startTop: string;
  scrollTop?: number;
  children: ReactNode;
}) => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({
    start: [0, 0],
    end: [0, 0],
  });
  const [absTop, setAbsTop] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const progress = getScrollProgress(position.start[0], position.end[0]);

      const absTop =
        progress * (position.end[1] - position.start[1]) + position.start[1];

      setAbsTop(absTop);
    };

    onScroll();

    addEventListener("scroll", onScroll);

    return () => {
      removeEventListener("scroll", onScroll);
    };
  }, [position]);

  useEffect(() => {
    const setupFn = () => {
      if (innerRef.current && outerRef.current) {
        innerRef.current.style.top = startTop;

        const rect = outerRef.current.getBoundingClientRect();
        const scrollEnd =
          rect.top -
          document.documentElement.getBoundingClientRect().top +
          rect.height / 2 -
          window.innerHeight / 2;

        const newPosition = {
          start: [
            scrollTop,
            parseFloat(getComputedStyle(innerRef.current).top),
          ],
          end: [scrollEnd, parseFloat(getComputedStyle(outerRef.current).top)],
        };

        setPosition(newPosition);
      }
    };

    if (innerRef.current && outerRef.current) {
      const resizeObserver = new ResizeObserver(setupFn);
      resizeObserver.observe(outerRef.current);
      addEventListener("resize", setupFn);

      return () => {
        resizeObserver.disconnect();
        removeEventListener("resize", setupFn);
      };
    }
  }, [scrollTop, startTop]);

  return (
    <>
      <Box ref={innerRef} pos="absolute" style={{ top: absTop + "px" }}>
        {children}
      </Box>
      <Box ref={outerRef} pos="absolute" opacity="0">
        {children}
      </Box>
    </>
  );
};

export default Parallax;
