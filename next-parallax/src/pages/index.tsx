import type { NextPage } from "next";
import React from "react";
import { Typography } from "@material-ui/core";
import Image from "next/image";
import { useStyles } from "./Home.style";

import layer0 from "../images/layer_0.png";
import layer1 from "../images/layer_1.png";
import layer2 from "../images/layer_2.png";
import layer3 from "../images/layer_3.png";
import layer4 from "../images/layer_4.png";
import layer5 from "../images/layer_5.png";
import layer6 from "../images/layer_6.png";

const Home: NextPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div
        className={classes.parallaxLayer}
        style={{ transform: "translateZ(-300px) scale(4)" }}
      >
        <Image src={layer0} objectFit="contain" width="100%" height="100%" />
      </div>
      <div
        className={classes.parallaxLayer}
        style={{ transform: "translateZ(-250px) scale(3.5)" }}
      >
        <Image src={layer1} />
      </div>
      <div
        className={classes.parallaxLayer}
        style={{ transform: "translateZ(-200px) scale(3)" }}
      >
        <Image src={layer2} />
      </div>
      <div
        className={classes.parallaxLayer}
        style={{ transform: "translateZ(-150px) scale(2.5)" }}
      >
        <Image src={layer3} />
      </div>
      <div
        className={classes.parallaxLayer}
        style={{ transform: "translateZ(-100px) scale(2)" }}
      >
        <Image src={layer4} />
      </div>
      <div
        className={classes.parallaxLayer}
        style={{ transform: "translateZ(-50px) scale(1.5)" }}
      >
        <Image src={layer5} />
      </div>
      <div
        className={classes.parallaxLayer}
        style={{ transform: "translateZ(0) scale(1)" }}
      >
        <Image src={layer6} />
      </div>
      <div className={classes.parallaxCover}>
        <Typography variant="h1">Hello World!</Typography>
      </div>
    </div>
  );
};

export default Home;
