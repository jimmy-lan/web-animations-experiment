import React from "react";
import { useStyles } from "./WordAnimation.style";

const SPACE = "\u00a0";

export default function WordAnimation({ content }) {
  const classes = useStyles();

  const wordList = content.split(" ");

  return (
    <span className={classes.animatedSpan}>
      {wordList.map((word, index) => (
        <span
          style={{ animationDelay: `${0.1 * index}s` }}
          key={`${word}${index}`}
        >
          {index !== wordList.length - 1 ? word + SPACE : word}
        </span>
      ))}
    </span>
  );
}
