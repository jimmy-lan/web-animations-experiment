import React, {
  FunctionComponent,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

interface Props {
  children: ReactNode;
  offset?: number;
}

type ParallaxProps = Props;

const Parallax: FunctionComponent<ParallaxProps> = (props) => {
  const { children, offset = 50 } = props;
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useViewportScroll();

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  const y = useTransform(scrollY, [initial, final], [offset, -offset]);

  useLayoutEffect(() => {
    if (!window) {
      return () => {};
    }
    const element = ref.current;
    const onResize = () => {
      setElementTop(
        element!.getBoundingClientRect().top + window.scrollY ||
          window.pageYOffset
      );
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

export { Parallax };
