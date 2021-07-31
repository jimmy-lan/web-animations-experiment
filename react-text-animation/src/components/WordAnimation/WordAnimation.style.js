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
  },
});
