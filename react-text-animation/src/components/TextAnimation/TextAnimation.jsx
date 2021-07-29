import React from "react";
import { useStyles } from "./TextAnimation.style";

export default function TextAnimation() {
  const classes = useStyles();

  return <span className={classes.animatedSpan}>React</span>;
}
