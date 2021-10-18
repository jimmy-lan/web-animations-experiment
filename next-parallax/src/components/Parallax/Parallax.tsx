import React, { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

type ParallaxProps = Props;

const Parallax: FunctionComponent<ParallaxProps> = (props) => {
  const { children } = props;
  return <>children</>;
};

export { Parallax };
