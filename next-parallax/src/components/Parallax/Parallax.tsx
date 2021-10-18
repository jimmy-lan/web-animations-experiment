import React, { FunctionComponent, ReactNode } from "react";
import { useViewportScroll } from "framer-motion";

interface Props {
  children: ReactNode;
}

type ParallaxProps = Props;

const Parallax: FunctionComponent<ParallaxProps> = (props) => {
  const { children } = props;
  const { scrollY } = useViewportScroll();

  return <>children</>;
};

export { Parallax };
