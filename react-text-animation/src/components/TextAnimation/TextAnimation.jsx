import React from "react";
import { useStyles } from "./TextAnimation.style";

export default function TextAnimation({ content }) {
  const classes = useStyles();

  const charArray = content.split("");

  return (
    <span className={classes.animatedSpan}>
      {charArray.map((char, index) => (
        <span
          key={`${char}${index}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
