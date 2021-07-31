import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  "@keyframe animation": {
    "0%": {
      transform: "translateY(-30px)",
      opacity: 0,
    },
    "70%": {
      transform: "translateY(10px)",
      opacity: 1,
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
      animationName: "$animation",
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
