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

  const wordArray = (children as string).split(" ");

  return (
    <Typography {...typographyProps} ref={ref} component={motionComponent}>
      {wordArray.map((word, idx) => (
        <span
          key={(children as string) + idx}
          style={{ display: "inline-block", margin: 0, overflow: "hidden" }}
        >
          <motion.span
            animate={controls}
            initial={{ y: "100%" }}
            style={{ display: "inline-block" }}
            variants={{
              visible: (idx) => ({
                y: 0,
                transition: {
                  delay: idx * 0.1,
                },
              }),
            }}
            custom={idx}
          >
            {idx === wordArray.length - 1 ? word : word + "\u00A0"}
          </motion.span>
        </span>
      ))}
    </Typography>
  );
};

export { RevealTypography };
