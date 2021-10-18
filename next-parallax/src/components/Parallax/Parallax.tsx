import React, { FunctionComponent, ReactNode } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

interface Props {
  children: ReactNode;
}

type ParallaxProps = Props;

const Parallax: FunctionComponent<ParallaxProps> = (props) => {
  const { children } = props;
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [100, 200], [0, 500]);

  return <motion.div style={{ y }}>{children}</motion.div>;
};

export { Parallax };
