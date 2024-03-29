import React, {
  FunctionComponent,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";

interface Props {
  children: ReactNode;
  offset?: number;
  [p: string]: any;
}

type ParallaxProps = Props;

const Parallax: FunctionComponent<ParallaxProps> = (props) => {
  const { children, offset = 50, ...otherProps } = props;
  const isPreferReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useViewportScroll();

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
  const y = useSpring(yRange, { stiffness: 400, damping: 90 });

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

  if (isPreferReducedMotion) {
    return <div {...otherProps}>{children}</div>;
  }

  return (
    <motion.div ref={ref} style={{ y }} {...otherProps}>
      {children}
    </motion.div>
  );
};

export { Parallax };
