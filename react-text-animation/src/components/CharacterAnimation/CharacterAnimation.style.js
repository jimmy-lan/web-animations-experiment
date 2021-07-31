import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  "@keyframes push-blur": {
    "0%": {
      opacity: 0,
      transform: "translateY(30px) skewY(8deg)",
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
    "& span": {
      display: "inline-block",
      animationName: "$push-blur",
      animationDuration: "1.5s",
      animationTimingFunction: "cubic-bezier(0.075, 0.82, 0.165, 1)",
      fontSize: "5rem",
      fontWeight: 500,
      letterSpacing: 1.2,
      opacity: 0,
      animationFillMode: "forwards",
    },
  },
});
