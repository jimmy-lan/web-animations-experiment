import React, {
  ForwardRefExoticComponent,
  FunctionComponent,
  useEffect,
} from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Typography, TypographyProps } from "@material-ui/core";

interface OwnProps extends TypographyProps {
  motionComponent: ForwardRefExoticComponent<any>;
}

type Props = OwnProps;

const RevealTypography: FunctionComponent<Props> = (props) => {
  const controls = useAnimation();
  const [ref, isInView] = useInView();
  const { motionComponent, children, ...typographyProps } = props;

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <Typography
      {...typographyProps}
      ref={ref}
      animate={controls}
      initial="hidden"
      transition="0.5s"
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      component={motionComponent}
    >
      {children}
    </Typography>
  );
};

export { RevealTypography };
