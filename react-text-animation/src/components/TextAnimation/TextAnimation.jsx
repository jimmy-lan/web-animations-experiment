import React from "react";
import { useStyles } from "./TextAnimation.style";

export default function TextAnimation({ content }) {
  const classes = useStyles();

  return <span className={classes.animatedSpan}>{content}</span>;
}
