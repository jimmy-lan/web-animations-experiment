import React, { FunctionComponent } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.25,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 85,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const JimmyTextSvg = () => {
  return (
    <Box
      component={motion.div}
      sx={{
        position: "absolute",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
      variants={textContainer}
    >
      <motion.svg
        style={{
          position: "absolute",
          zIndex: 50,
          display: "flex",
        }}
      >
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={750}
          height={800}
          style={{ color: "white" }}
        >
          <rect
            style={{
              width: "100%",
              height: "100%",
              fill: "currentColor",
            }}
          />
          <motion.rect
            variants={text}
            style={{
              width: "100%",
              height: "100%",
              color: "rgb(75 85 99)",
              fill: "currentColor",
            }}
          />
        </pattern>
        <text
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{ fill: "url(#pattern)", fontSize: 36, fontWeight: "bold" }}
        >
          Jimmy Lan
        </text>
      </motion.svg>
    </Box>
  );
};

const blackBox = {
  initial: {
    height: "100%",
    bottom: 0,
  },
  animate: {
    top: "100%",
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

interface Props {}

const InitialTransition: FunctionComponent<Props> = (props) => {
  return (
    <Box
      sx={{
        height: "100vh",
        position: "absolute",
        bottom: 0,
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Box
        component={motion.div}
        sx={{
          position: "relative",
          zIndex: 50,
          width: "100vw",
          background: "black",
        }}
        initial="initial"
        animate="animate"
        variants={blackBox}
      >
        <JimmyTextSvg />
      </Box>
    </Box>
  );
};

export { InitialTransition };
