import React from "react";
import { useStyles } from "./WordAnimation.style";

export default function WordAnimation({ content }) {
  const classes = useStyles();

  const wordList = content.split(" ");

  return (
    <span className={classes.animatedSpan}>
      {wordList.map((word, index) => (
        <span style={{ animationDelay: `${0.1 * index}s` }}>{word}</span>
      ))}
    </span>
  );
}
