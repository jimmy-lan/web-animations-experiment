import type { NextPage } from "next";
import React from "react";
import Image from "next/image";
import { Paper, Typography } from "@material-ui/core";
import { useStyles } from "./Home.style";
import { Parallax } from "../components";

const Home: NextPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.parallaxLayer}>
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_0.png?raw=true" />
      </div>
      <div className={classes.parallaxLayer}>
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_1.png?raw=true" />
      </div>
      <div className={classes.parallaxLayer}>
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_2.png?raw=true" />
      </div>
      <div className={classes.parallaxLayer}>
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_3.png?raw=true" />
      </div>
      <div className={classes.parallaxLayer}>
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_4.png?raw=true" />
      </div>
      <div className={classes.parallaxLayer}>
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_5.png?raw=true" />
      </div>
      <div className={classes.parallaxLayer}>
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_6.png?raw=true" />
      </div>
    </div>
  );
};

export default Home;
