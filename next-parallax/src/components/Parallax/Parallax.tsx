import React, { FunctionComponent, ReactNode, useRef, useState } from "react";
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
  const ref = useRef();

  const { scrollY } = useViewportScroll();

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  const y = useTransform(scrollY, [100, 200], [0, 500]);

  return <motion.div style={{ y }}>{children}</motion.div>;
};

export { Parallax };
