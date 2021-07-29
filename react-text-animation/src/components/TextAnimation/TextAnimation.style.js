import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  "@keyframes fade": {
    "0%": {
      opacity: 0,
      transform: "translateY(60px) skewY(8deg)",
      filter: "blur(6px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0) skewY(0)",
      filter: "blur(0)",
    },
  },
  animatedSpan: {
    display: "inline-block",
    animationName: "$fade",
    animationDuration: "1.5s",
    animationTimingFunction: "ease-in-out",
    fontSize: "5rem",
    fontWeight: 500,
    letterSpacing: 1.2,
    opacity: 0,
    animationFillMode: "forwards",
  },
});
