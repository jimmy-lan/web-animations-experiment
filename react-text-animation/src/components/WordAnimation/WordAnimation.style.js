import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  "@keyframes push": {
    "0%": {
      transform: "translateY(50px)",
      opacity: 0,
    },
    "70%": {
      transform: "translateY(-10px)",
      opacity: 0.9,
    },
    "100%": {
      transform: "translateY(0)",
      opacity: 1,
    },
  },
  animatedSpan: {
    display: "inline-block",
    "& span": {
      display: "inline-block",
      animationName: "$push",
      animationDuration: "0.3s",
      animationTimingFunction: "ease-in",
      fontSize: "5rem",
      fontWeight: 500,
      letterSpacing: 1.2,
      opacity: 0,
      animationFillMode: "forwards",
    },
  },
});
