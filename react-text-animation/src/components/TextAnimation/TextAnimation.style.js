import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  "@keyframes fade": {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
  animatedSpan: {
    animationName: "$fade",
    animationDuration: "6s",
    fontSize: "5rem",
    fontWeight: 500,
    letterSpacing: 1.2,
    opacity: 0,
    animationFillMode: "forwards",
  },
});
