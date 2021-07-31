import React from "react";
import { useStyles } from "./WordAnimation.style";

export default function WordAnimation({ content }) {
  const classes = useStyles();
  return <span className={classes.animatedSpan}>{content}</span>;
}
