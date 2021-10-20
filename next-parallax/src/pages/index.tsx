import type { NextPage } from "next";
import React from "react";
import { useStyles } from "./Home.style";

const Home: NextPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div
        className={classes.parallaxLayer}
        style={{ transform: "translateZ(-300px) scale(4)" }}
      >
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_0.png?raw=true" />
      </div>
      <div
        className={classes.parallaxLayer}
        style={{ transform: "translateZ(-250px) scale(3.5)" }}
      >
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_1.png?raw=true" />
      </div>
      <div
        className={classes.parallaxLayer}
        style={{ transform: "translateZ(-200px) scale(3)" }}
      >
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_2.png?raw=true" />
      </div>
      <div
        className={classes.parallaxLayer}
        style={{ transform: "translateZ(-150px) scale(2.5)" }}
      >
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_3.png?raw=true" />
      </div>
      <div
        className={classes.parallaxLayer}
        style={{ transform: "translateZ(-100px) scale(2)" }}
      >
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_4.png?raw=true" />
      </div>
      <div
        className={classes.parallaxLayer}
        style={{ transform: "translateZ(-50px) scale(1.5)" }}
      >
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_5.png?raw=true" />
      </div>
      <div
        className={classes.parallaxLayer}
        style={{ transform: "translateZ(0) scale(1)" }}
      >
        <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_6.png?raw=true" />
      </div>
      <div className={classes.parallaxCover} />
    </div>
  );
};

export default Home;
